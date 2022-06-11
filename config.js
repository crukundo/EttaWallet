/**
 * @fileOverview this file is used to hardcode default settings for the app.
 */
module.exports.PIN_LENGTH = 4;

module.exports.UNITS = {
    sat: { display: 'sats', displayLong: 'Satoshi', denominator: 1 },
    bit: { display: 'bits', displayLong: 'Bits', denominator: 100 },
    btc: { display: 'BTC', displayLong: 'Bitcoin', denominator: 100000000 },
};

module.exports.FIATS = {
    usd: { display: '$', displayLong: 'US Dollar' },
    eur: { display: '€', displayLong: 'Euro' },
    gbp: { display: '£', displayLong: 'British Pound' },
};
