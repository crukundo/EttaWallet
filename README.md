## EttaWallet - A Thin Bitcoin & Lightning Wallet

This is a Bitcoin & Lightning wallet modeled on the daily spending wallet from the design community at [bitcoin.design](https://bitcoin.design). The goal is for this to be a quick model app for anyone looking to build a bitcoin and lightning wallet. 

Built on React Native (expo).

### Current Features

* HD Segwit Bech 32 wallet by default (more flexibility in the future)
* Encrypted wallet with PIN
* Private keys never leave your device.
* Cloud backups on iCloud and GDrive for encrypted keys


### BUILD & RUN 

It is preferred that you use an even-numbered version of Node as these are LTS versions.

* In your console:

```
git clone https://github.com/crukundo/EttaWallet.git
cd EttaWallet
yarn install
yarn start
```

This project uses expo to manage uniformity across platforms. Run the following to start the metro bundler. From there, you view the app with Expo go or use one of your installed simulators for Android or IOS

### LICENSE

MIT

### CREDIT

This project uses code from [Bitcoin UI Kit](https://www.bitcoinuikit.com), and [photonlib](https://github.com/photon-sdk/photon-lib). Also shout out to [Aman](https://github.com/Aman035) who designed some of the components.