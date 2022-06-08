/**
 * @fileOverview the global application store used by mobx for
 * state management. These values are either rendered directly
 * in react components or used as a basis for computed values.
 */

import { extendObservable } from 'mobx';
import { primary, dark, light } from './constants/styles';

export class Store {
    constructor() {
        extendObservable(this, {
            auth: {
                pin: '',
                newPin: '',
                pinVerify: '',
                resetPinCurrent: '',
                resetPinNew: '',
                resetPinVerify: '',
            },
            backup: {
                newPass: '',
                confirmedPass: '',
                valid: false,
            },
            theme: {
                type: 'dark',
                primary: primary,
                color: light, // change this to update themeColor
                userColor: light
            },
            hardwareWallet: {
                type: 'none',
                identifying: false,
                identified: false,
                verifying: false,
                addressVerified: false,
                resgistered: false,
            },
            transactions: [],
            exchangeRate: {},
            defaultUnit: 'btc',
            defaultFiat: 'eur',
        });
    }
    init() { }
}

export default new Store();
