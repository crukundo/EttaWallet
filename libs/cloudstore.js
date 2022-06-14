/**
 * @fileOverview cloud storage for iOS and Android. On iOS the iCloud key/value
 * store is used. Storage on Android relies on system backups to GDrive.
 */

import { Platform } from 'react-native';
import RNiCloudStorage from '@photon-sdk/react-native-icloudstore';
import * as GDriveCloudStorage from './GDriveCloudStorage';
import { isPhone, isEmail, isId, isBuffer } from './verify';

const Store = Platform.OS === 'ios' ? RNiCloudStorage : GDriveCloudStorage;

const VERSION = '1';
const KEY_ID = `${VERSION}_photon_key_id`;
const PHONE = `${VERSION}_photon_phone`;
const EMAIL = `${VERSION}_photon_email`;

export async function authenticate(options) {
  if (Store.authenticate) {
    await Store.authenticate(options);
  }
}

//
// Encrypted key storage
//

export async function putKey({ keyId, ciphertext }) {
  if (!isId(keyId) || !isBuffer(ciphertext)) {
    throw new Error('Invalid args');
  }
  if (await Store.getItem(KEY_ID)) {
    throw new Error('Backup already present');
  }
  await Store.setItem(KEY_ID, keyId);
  await Store.setItem(shortKeyId(keyId), stringifyKey({ keyId, ciphertext }));
}

export async function getKey() {
  const keyId = await Store.getItem(KEY_ID);
  if (!keyId) {
    return null;
  }
  const key = await Store.getItem(shortKeyId(keyId));
  return key ? parseKey(key) : null;
}

export async function removeKeyId({ keyId }) {
  const item = await getKey();
  if (!item || item.keyId !== keyId) {
    throw new Error('Backup not found');
  }
  await Store.removeItem(KEY_ID);
}

//
// Phone number storage
//

export async function putPhone({ userId }) {
  if (!isPhone(userId)) {
    throw new Error('Invalid args');
  }
  await Store.setItem(PHONE, userId);
}

export async function getPhone() {
  return Store.getItem(PHONE);
}

export async function removePhone() {
  await Store.removeItem(PHONE);
}

//
// Email address storage
//

export async function putEmail({ userId }) {
  if (!isEmail(userId)) {
    throw new Error('Invalid args');
  }
  await Store.setItem(EMAIL, userId);
}

export async function getEmail() {
  return Store.getItem(EMAIL);
}

export async function removeEmail() {
  await Store.removeItem(EMAIL);
}

//
// Helper functions
//

function shortKeyId(keyId) {
  const shortId = keyId.replace(/-/g, '').slice(0, 8);
  return `${VERSION}_${shortId}`;
}

function stringifyKey({ keyId, ciphertext }) {
  return JSON.stringify({
    keyId,
    ciphertext: ciphertext.toString('base64'),
    time: new Date().toISOString(),
  });
}

function parseKey(item) {
  const { keyId, ciphertext, time } = JSON.parse(item);
  return {
    keyId,
    ciphertext: Buffer.from(ciphertext, 'base64'),
    time: new Date(time),
  };
}
