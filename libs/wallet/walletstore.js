import { HDSegwitP2SHWallet, LegacyWallet, SegwitP2SHWallet, SegwitBech32Wallet, HDSegwitBech32Wallet, MultisigHDWallet } from './';
import * as keychain from '../keychain';

const WALLETS = 'photon.wallets';

export class WalletStore {
  constructor() {
    this.wallets = [];
    this.tx_metadata = {};
  }

  /**
   * Wrapper for storage call.
   *
   * @param key
   * @param value
   * @returns {Promise<any>|Promise<any> | Promise<void> | * | Promise | void}
   */
  setItem(key, value) {
    return keychain.setItem(key, value);
  }

  /**
   * Wrapper for storage call.
   *
   * @param key
   * @returns {Promise<any>|*}
   */
  getItem(key) {
    return keychain.getItem(key);
  }

  /**
   * Loads from storage all wallets and
   * maps them to `this.wallets`
   *
   * @returns {Promise.<boolean>}
   */
  async loadFromDisk() {
    try {
      let data = await this.getItem(WALLETS);
      if (data !== null) {
        data = JSON.parse(data);
        if (!data.wallets) return false;
        const wallets = data.wallets;
        for (const key of wallets) {
          // deciding which type is wallet and instatiating correct object
          const tempObj = JSON.parse(key);
          let unserializedWallet;
          switch (tempObj.type) {
            case SegwitBech32Wallet.type:
              unserializedWallet = SegwitBech32Wallet.fromJson(key);
              break;
            case SegwitP2SHWallet.type:
              unserializedWallet = SegwitP2SHWallet.fromJson(key);
              break;
            case HDSegwitP2SHWallet.type:
              unserializedWallet = HDSegwitP2SHWallet.fromJson(key);
              break;
            case HDSegwitBech32Wallet.type:
              unserializedWallet = HDSegwitBech32Wallet.fromJson(key);
              break;
            case MultisigHDWallet.type:
              unserializedWallet = MultisigHDWallet.fromJson(key);
              break;
            case LegacyWallet.type:
            default:
              unserializedWallet = LegacyWallet.fromJson(key);
              break;
          }
          // done
          if (!this.wallets.some(wallet => wallet.getSecret() === unserializedWallet.secret)) {
            this.wallets.push(unserializedWallet);
            this.tx_metadata = data.tx_metadata;
          }
        }
        return true;
      } else {
        return false; // failed loading data or loading/decryptin data
      }
    } catch (error) {
      console.warn(error.message);
      return false;
    }
  }

  /**
   * Lookup wallet in list by it's secret and
   * remove it from `this.wallets`
   *
   * @param wallet {AbstractWallet}
   */
  deleteWallet(wallet) {
    const secret = wallet.getSecret();
    const tempWallets = [];

    for (const value of this.wallets) {
      if (value.getSecret() === secret) {
        // the one we should delete
        // nop
      } else {
        // the one we must keep
        tempWallets.push(value);
      }
    }
    this.wallets = tempWallets;
  }

  /**
   * Serializes and saves to storage object data.
   *
   * @returns {Promise} Result of storage save
   */
  async saveToDisk() {
    const walletsToSave = [];
    for (const key of this.wallets) {
      if (typeof key === 'boolean') continue;
      if (key.prepareForSerialization) key.prepareForSerialization();
      walletsToSave.push(JSON.stringify({ ...key, type: key.type }));
    }
    const data = {
      wallets: walletsToSave,
      tx_metadata: this.tx_metadata,
    };
    return this.setItem(WALLETS, JSON.stringify(data));
  }

  /**
   * For each wallet, fetches balance from remote endpoint.
   * Use getter for a specific wallet to get actual balance.
   * Returns void.
   * If index is present then fetch only from this specific wallet
   *
   * @return {Promise.<void>}
   */
  async fetchWalletBalances(index) {
    console.log('fetchWalletBalances for wallet#', index);
    if (index || index === 0) {
      let c = 0;
      for (const wallet of this.wallets) {
        if (c++ === index) {
          await wallet.fetchBalance();
        }
      }
    } else {
      for (const wallet of this.wallets) {
        await wallet.fetchBalance();
      }
    }
  }

  /**
   * Fetches from remote endpoint all transactions for each wallet.
   * Returns void.
   * To access transactions - get them from each respective wallet.
   * If index is present then fetch only from this specific wallet.
   *
   * @param index {Integer} Index of the wallet in this.wallets array,
   *                        blank to fetch from all wallets
   * @return {Promise.<void>}
   */
  async fetchWalletTransactions(index) {
    console.log('fetchWalletTransactions for wallet#', index);
    if (index || index === 0) {
      let c = 0;
      for (const wallet of this.wallets) {
        if (c++ === index) {
          await wallet.fetchTransactions();
          if (wallet.fetchPendingTransactions) {
            await wallet.fetchPendingTransactions();
          }
          if (wallet.fetchUserInvoices) {
            await wallet.fetchUserInvoices();
          }
        }
      }
    } else {
      for (const wallet of this.wallets) {
        await wallet.fetchTransactions();
        if (wallet.fetchPendingTransactions) {
          await wallet.fetchPendingTransactions();
        }
        if (wallet.fetchUserInvoices) {
          await wallet.fetchUserInvoices();
        }
      }
    }
  }

  /**
   *
   * @returns {Array.<AbstractWallet>}
   */
  getWallets() {
    return this.wallets;
  }

  /**
   * Getter for all transactions in all wallets.
   * But if index is provided - only for wallet with corresponding index
   *
   * @param index {Integer|null} Wallet index in this.wallets. Empty (or null) for all wallets.
   * @param limit {Integer} How many txs return, starting from the earliest. Default: all of them.
   * @return {Array}
   */
  getTransactions(index, limit = Infinity) {
    if (index || index === 0) {
      let txs = [];
      let c = 0;
      for (const wallet of this.wallets) {
        if (c++ === index) {
          txs = txs.concat(wallet.getTransactions());
        }
      }
      return txs;
    }

    let txs = [];
    for (const wallet of this.wallets) {
      const walletTransactions = wallet.getTransactions();
      for (const t of walletTransactions) {
        t.walletPreferredBalanceUnit = wallet.getPreferredBalanceUnit();
      }
      txs = txs.concat(walletTransactions);
    }

    for (const t of txs) {
      t.sort_ts = +new Date(t.received);
    }

    return txs
      .sort(function (a, b) {
        return b.sort_ts - a.sort_ts;
      })
      .slice(0, limit);
  }

  /**
   * Getter for a sum of all balances of all wallets
   *
   * @return {number}
   */
  getBalance() {
    let finalBalance = 0;
    for (const wal of this.wallets) {
      finalBalance += wal.getBalance();
      finalBalance += wal.getUnconfirmedBalance();
    }
    return finalBalance;
  }
}
