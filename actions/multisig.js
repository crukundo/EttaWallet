import DocumentPicker from 'react-native-document-picker';
import RNShare from 'react-native-share';
import RNFS from 'react-native-fs';
import {MultisigHDWallet} from '@photon-sdk/photon-lib';

import store from '../store';
import * as alert from './alert';
import {getWallet, getMultisigWallet, walletStore} from './wallet';

export async function importColdCard() {
  try {
    await _importColdCardFile();
    await _createMultiSig();
    alert.info('Success', '2-of-2 MultiSig created!');
  } catch (err) {
    alert.error({err});
  }
}

async function _importColdCardFile() {
  const res = await DocumentPicker.pick({
    type: [DocumentPicker.types.allFiles],
  });
  const json = await RNFS.readFile(res.uri, 'utf8');
  const config = JSON.parse(json);
  if (!config.p2wsh || !config.xfp) {
    throw new Error('Invalid ColdCard json format!');
  }
  store.cosigners.push({
    xpub: config.p2wsh,
    fingerprint: config.xfp,
  });
}

async function _createMultiSig() {
  const multisig = getMultisigWallet();
  if (multisig) {
    throw new Error('Multisig wallet already exists!');
  }
  const mnemonic = await getWallet().getSecret();
  const msWallet = new MultisigHDWallet();
  msWallet.addCosigner(mnemonic);
  if (!store.cosigners.length) {
    throw new Error('Not enough cosigners!');
  }
  store.cosigners.forEach(cosigner => {
    msWallet.addCosigner(cosigner.xpub, cosigner.fingerprint);
  });
  msWallet.setDerivationPath("m/48'/0'/0'/2'");
  msWallet.setM(2);
  walletStore.wallets.push(msWallet);
  await walletStore.saveToDisk();
}

export async function exportTxtFile() {
  try {
    await _exportMultiSigTxt();
    alert.info('Success', 'Multisig.txt exported!');
  } catch (err) {
    alert.error({err});
  }
}

async function _exportMultiSigTxt() {
  const multisig = getMultisigWallet();
  if (!multisig) {
    throw new Error('No multisig wallet to export!');
  }
  const filePath = RNFS.DocumentDirectoryPath + '/Multisig.txt';
  await RNFS.writeFile(filePath, multisig.getXpub(), 'utf8');
  await RNShare.open({
    url: `file://${filePath}`,
    type: 'text/plain',
  });
  await RNFS.unlink(filePath);
}
