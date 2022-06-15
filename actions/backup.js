import { HDSegwitBech32Wallet, KeyBackup } from '../libs';

import store from '../store';
import * as NavigationService from '../NavigationService';
import * as alert from './alert';
import { saveToDisk, savePinToDisk } from './wallet';
import { Platform } from 'react-native';

const platform = Platform.OS === 'ios' ? 'iCloud' : 'Google Drive';

export function init() {
    KeyBackup.init({ keyServerURI: store.config.keyServer });
}

export async function authenticate() {
    try {
        await KeyBackup.authenticate({
            clientId: '535388410545-2qu0melfkv5n593i6nv4v9dhaa1u4vph.apps.googleusercontent.com',
            iosClientId:
                '945320253057-pjnoje35noor02633t97bprlkg3s3bqo.apps.googleusercontent.com', // EttaWallet OAuth IOS client
            androidClientId: '945320253057-ihfj716pq3dnc97et0vo3ufbl90d2894.apps.googleusercontent.com' // EttaWallet OAuth Android client
        });
    } catch (err) {
        alert.error({ err });
    }
}

export async function checkBackup() {
    store.backupExists = await KeyBackup.checkForExistingBackup();
    return store.backupExists;
}

//
// Pin Set screen
//

export function initBackup() {
    store.backup.pin = '';
    store.backup.pinVerify = '';
    NavigationService.reset('Backup');
}

export function setPin(pin) {
    store.backup.pin = pin;
}

export async function validateNewPin() {
    const { pin } = store.backup;
    if (!pin || pin.length < 4) {
        return alert.error({ message: 'PIN must be at least 4 digits!' });
    }
    NavigationService.goTo('VerifyPinScreen');
}

//
// Pin Check screen
//

export function setPinVerify(pin) {
    store.backup.pinVerify = pin;
}

export async function validatePinVerify() {
    const { pin, pinVerify } = store.backup;
    if (pin !== pinVerify) {
        return alert.error({ message: "PINs don't match!" });
    }
    try {
        NavigationService.goTo('WaitForBackupScreen', {
            message: `Creating encrypted\n${platform} backup...`,
        });
        await _generateWalletAndBackup(pin);
        NavigationService.reset('Main');
    } catch (err) {
        NavigationService.goTo('VerifyPinScreen');
        alert.error({ err });
    }
}

async function _generateWalletAndBackup(pin) {
    // generate new wallet
    const wallet = new HDSegwitBech32Wallet();
    await wallet.generate();
    const mnemonic = await wallet.getSecret();
    // cloud backup of encrypted seed
    const data = { mnemonic };
    await KeyBackup.createBackup({ data, pin });
    await saveToDisk(wallet, pin);
}

//
// Pin Change screen
//

export function initPinChange() {
    store.backup.pin = '';
    store.backup.newPin = '';
    store.backup.pinVerify = '';
    NavigationService.goTo('PinChange');
}

export async function validatePinChange() {
    NavigationService.goTo('PinChangeNew', {
        onNext: validatePinChangeNew,
    });
}

export function setNewPin(newPin) {
    store.backup.newPin = newPin;
}

export async function validatePinChangeNew() {
    const { newPin } = store.backup;
    if (!newPin || newPin.length < 4) {
        return alert.error({ message: 'PIN must be at least 4 digits!' });
    }
    NavigationService.goTo('PinChangeVerify', {
        onNext: validatePinChangeVerify,
    });
}

export async function validatePinChangeVerify() {
    const { newPin, pinVerify } = store.backup;
    if (newPin !== pinVerify) {
        return alert.error({ message: "PINs don't match!" });
    }
    try {
        NavigationService.goTo('PinChangeWait', {
            message: 'Changing PIN...',
        });
        await _changePin();
        NavigationService.goTo('Settings');
    } catch (err) {
        NavigationService.goTo('PinChangeVerify');
        alert.error({ err });
    }
}

async function _changePin() {
    const { pin, newPin } = store.backup;
    await KeyBackup.changePin({ pin, newPin });
    await savePinToDisk(newPin);
}

//
// Restore screen
//

export function initRestore() {
    store.backup.pin = '';
    NavigationService.reset('Restore');
}

export async function validatePin() {
    try {
        NavigationService.goTo('RestoreWait', {
            message: `Restoring wallet\nfrom ${platform}...`,
        });
        await _verifyPinAndRestore();
        NavigationServiceav.reset('Main');
    } catch (err) {
        NavigationService.goTo('RestorePin');
        if (err.delay) {
            alert.error({
                title: 'Rate limit hit',
                message: `Wallet restore locked until ${new Date(err.delay)}.`,
            });
        } else {
            alert.error({ message: 'Invalid PIN' });
        }
    }
}

async function _verifyPinAndRestore() {
    const { pin } = store.backup;
    // fetch encryption key and decrypt cloud backup
    const { mnemonic } = await KeyBackup.restoreBackup({ pin });
    // restore wallet from seed
    const wallet = new HDSegwitBech32Wallet();
    wallet.setSecret(mnemonic);
    if (!wallet.validateMnemonic()) {
        throw Error('Cannot validate mnemonic');
    }
    await saveToDisk(wallet, pin);
}
