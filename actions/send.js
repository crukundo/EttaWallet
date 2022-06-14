import Clipboard from '@react-native-community/clipboard';
import RNShare from 'react-native-share';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import { ElectrumClient } from '../libs/BlueElectrum';
import urlParse from 'url-parse';

import store from '../store';
import { nap, btcToSat } from '../utils';
import * as NavigationService from './NavigationService';
import * as alert from './alert';
import * as walletLib from './wallet';

const BLOCK_TARGET = 48; // 8 hours

export async function initSendAddress() {
  store.send.value = null;
  store.send.address = null;
  await fetchFeeRate();
}

export async function fetchFeeRate() {
  try {
    while (!store.electrumConnected) {
      await nap(100);
    }
    const satPerByte = await ElectrumClient.estimateFee(BLOCK_TARGET);
    store.send.feeRate = String(satPerByte);
  } catch (err) {
    console.error(err);
  }
}

export function isAddress(str) {
  return /^[a-zA-Z0-9]{26,90}$/.test(str);
}

export async function readQRCode(uri) {
  if (store.send.address) {
    return;
  }
  const {
    pathname: address,
    query: { amount },
  } = urlParse(uri, true);
  setAmount(amount ? String(btcToSat(amount)) : null);
  validateAddress(address);
}

export async function pasteAddress() {
  const address = await Clipboard.getString();
  validateAddress(address);
}

export function validateAddress(address) {
  if (!isAddress(address)) {
    return alert.error({ message: 'Invalid address!' });
  }
  store.send.address = address;
  NavigationService.goTo('SendAmount');
}

export function setAmount(value) {
  store.send.value = value;
}

export function setFeeRate(feeRate) {
  store.send.feeRate = feeRate;
}

export async function validateAmount() {
  try {
    NavigationService.goTo('SendWait', {
      message: 'Checking...',
    });
    await createTransaction();
    if (walletLib.getMultisigWallet()) {
      NavigationService.goTo('SendPsbt');
    } else {
      NavigationService.goTo('SendConfirm');
    }
  } catch (err) {
    NavigationService.goTo('SendAmount');
    alert.error({ err });
  }
}

export async function createTransaction() {
  let { value, feeRate, address } = store.send;
  value = value ? parseInt(value, 10) : undefined;
  feeRate = parseInt(feeRate, 10);
  const wallet = walletLib.getWallet();
  await wallet.fetchUtxo();
  const utxo = wallet.getUtxo();
  const target = [{ value, address }];
  const changeTo = await wallet.getAddressAsync();
  store.send.newTx = wallet.createTransaction(utxo, target, feeRate, changeTo);
}

export async function exportPsbt() {
  try {
    await _sharePsbtFile();
  } catch (err) {
    alert.error({ err });
  }
}

async function _sharePsbtFile() {
  const psbtBase64 = store.send.newTx.psbt.toBase64();
  const filePath = `${RNFS.DocumentDirectoryPath}/${Date.now()}.psbt`;
  await RNFS.writeFile(filePath, psbtBase64, 'base64');
  await RNShare.open({
    url: `file://${filePath}`,
    type: 'application/octet-stream',
    saveToFiles: true,
  });
  await RNFS.unlink(filePath);
}

export async function importSignedPbst() {
  try {
    await _importPbstFile();
    NavigationService.goTo('SendConfirm');
  } catch (err) {
    alert.error({ err });
  }
}

async function _importPbstFile() {
  const res = await DocumentPicker.pick({
    type: [DocumentPicker.types.allFiles],
  });
  const psbtBase64 = await RNFS.readFile(res.uri, 'base64');
  const wallet = walletLib.getWallet();
  store.send.newTx.tx = wallet.combinePsbt(store.send.newTx.psbt, psbtBase64);
}

export async function validateSend() {
  try {
    NavigationService.goTo('SendSuccess');
    await broadcastTransaction();
  } catch (err) {
    NavigationService.goTo('SendConfirm');
    alert.error({ err });
  }
}

export async function broadcastTransaction() {
  const { newTx } = store.send;
  const wallet = walletLib.getWallet();
  await wallet.broadcastTx(newTx.tx.toHex());
}
