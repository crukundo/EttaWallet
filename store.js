import { observable } from 'mobx';
import { primary, light } from './constants/styles';
import ComputedSend from './computed/send';
import ComputedWallet from './computed/wallet';

const store = observable({
    // app state
    navReady: false,
    backupExists: null,
    walletReady: false,
    electrumConnected: false,
    xpub: null,
    balance: null,
    balanceRefreshing: false,
    transactions: [],
    nextAddress: null,
    cosigners: [],

    // screens
    backup: {
        pin: '',
        newPin: '',
        pinVerify: '',
    },
    userId: {
        email: '',
        code: '',
        pin: '',
        delay: null,
    },
    settings: {
        email: null,
    },
    send: {
        value: null,
        feeRate: '2',
        address: null,
        newTx: {},
    },
    theme: {
        type: 'dark',
        primary: primary,
        color: light, // change this to update themeColor
        userColor: light
    },
    // Persistent data
    config: {
        electrum: {
            host: 'electrum1.bluewallet.io',
            tcp: '50001',
            ssl: null,
        },
        keyServer: 'https://keys-dev.photonsdk.com',
    },
});

ComputedSend(store);
ComputedWallet(store);

export default store;