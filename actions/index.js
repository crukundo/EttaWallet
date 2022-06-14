import { when } from 'mobx';

import store from '../store';
import * as NavigationService from '../NavigationService';
import * as wallet from './wallet';
import * as backup from './backup';
import * as userId from './user-id';

when(
    () => store.navReady,
    async () => {
        backup.init();
        const hasWallet = await wallet.loadFromDisk();
        if (hasWallet) {
            NavigationService.reset('PinCheck');
            return;
        }
        await backup.authenticate();
        const hasBackup = await backup.checkBackup();
        if (!hasBackup) {
            backup.initBackup();
        } else {
            backup.initRestore();
        }
    },
);

when(
    () => store.walletReady,
    async () => {
        wallet.loadXpub();
        wallet.loadBalance();
        wallet.loadTransactions();
        await Promise.all([
            wallet.initElectrumClient(),
            wallet.update(),
            userId.fetchUserIds(),
        ]);
    },
);
