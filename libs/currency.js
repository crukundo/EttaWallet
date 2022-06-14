import Frisbee from 'frisbee';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FiatUnit } from './model';
import BigNumber from 'bignumber.js';

export const EXCHANGE_RATES = 'currency';
export const PREFERRED_CURRENCY = 'preferredCurrency';

let preferredFiatCurrency = FiatUnit.USD;
const exchangeRates = {};

export const STRUCT = {
  LAST_UPDATED: 'LAST_UPDATED',
};

/**
 * Saves to storage preferred currency, whole object
 * from `./model/fiatUnit`
 *
 * @param item {Object} one of the values in `./model/fiatUnit`
 * @returns {Promise<void>}
 */
export async function setPrefferedCurrency(item) {
  await AsyncStorage.setItem(PREFERRED_CURRENCY, JSON.stringify(item));
}

export async function getPreferredCurrency() {
  return JSON.parse(await AsyncStorage.getItem(PREFERRED_CURRENCY));
}

export async function updateExchangeRate() {
  if (+new Date() - exchangeRates[STRUCT.LAST_UPDATED] <= 30 * 60 * 1000) {
    // not updating too often
    return;
  }

  try {
    preferredFiatCurrency = JSON.parse(await AsyncStorage.getItem(PREFERRED_CURRENCY));
  } catch (_) { }
  preferredFiatCurrency = preferredFiatCurrency || FiatUnit.USD;

  let json;
  try {
    const api = new Frisbee({
      baseURI: 'https://api.coindesk.com',
    });
    const response = await api.get('/v1/bpi/currentprice/' + preferredFiatCurrency.endPointKey + '.json');
    json = JSON.parse(response.body);
    if (!json || !json.bpi || !json.bpi[preferredFiatCurrency.endPointKey] || !json.bpi[preferredFiatCurrency.endPointKey].rate_float) {
      throw new Error('Could not update currency rate: ' + response.err);
    }
  } catch (Err) {
    console.warn(Err);
    const lastSavedExchangeRate = JSON.parse(await AsyncStorage.getItem(EXCHANGE_RATES));
    exchangeRates['BTC_' + preferredFiatCurrency.endPointKey] = lastSavedExchangeRate['BTC_' + preferredFiatCurrency.endPointKey] * 1;
    return;
  }

  exchangeRates[STRUCT.LAST_UPDATED] = +new Date();
  exchangeRates['BTC_' + preferredFiatCurrency.endPointKey] = json.bpi[preferredFiatCurrency.endPointKey].rate_float * 1;
  await AsyncStorage.setItem(EXCHANGE_RATES, JSON.stringify(exchangeRates));
  await AsyncStorage.setItem(PREFERRED_CURRENCY, JSON.stringify(preferredFiatCurrency));
}

let interval = false;
export async function startUpdater() {
  if (interval) {
    clearInterval(interval);
    exchangeRates[STRUCT.LAST_UPDATED] = 0;
  }

  interval = setInterval(() => updateExchangeRate(), 2 * 60 * 100);
  return updateExchangeRate();
}

export function satoshiToLocalCurrency(satoshi) {
  if (!exchangeRates['BTC_' + preferredFiatCurrency.endPointKey]) {
    startUpdater();
    return '...';
  }

  let b = new BigNumber(satoshi);
  b = b
    .dividedBy(100000000)
    .multipliedBy(exchangeRates['BTC_' + preferredFiatCurrency.endPointKey])
    .toString(10);
  b = parseFloat(b).toFixed(2);

  let formatter;

  try {
    formatter = new Intl.NumberFormat(preferredFiatCurrency.locale, {
      style: 'currency',
      currency: preferredFiatCurrency.endPointKey,
      minimumFractionDigits: 2,
    });
  } catch (error) {
    console.warn(error);
    console.log(error);
    formatter = new Intl.NumberFormat(FiatUnit.USD.locale, {
      style: 'currency',
      currency: preferredFiatCurrency.endPointKey,
      minimumFractionDigits: 2,
    });
  }

  return formatter.format(b);
}

export function BTCToLocalCurrency(bitcoin) {
  let sat = new BigNumber(bitcoin);
  sat = sat.multipliedBy(100000000).toNumber();

  return satoshiToLocalCurrency(sat);
}

export function satoshiToBTC(satoshi) {
  let b = new BigNumber(satoshi);
  b = b.dividedBy(100000000);
  return b.toString(10);
}
