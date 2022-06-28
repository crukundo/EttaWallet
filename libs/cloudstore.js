/**
 * @fileOverview cloud storage for iOS and Android. On iOS the iCloud key/value
 * store is used. Storage on Android relies on system backups to GDrive.
 */

import { Platform } from 'react-native';
import RNICloudStorage from '@photon-sdk/react-native-icloudstore';
import * as GDriveCloudStorage from './GDriveCloudStorage';
import { isPhone, isEmail, isId, isBuffer } from './verify';

const Storage = Platform.OS === 'ios' ? RNICloudStorage : GDriveCloudStorage;

const VERSION = '1';
const KEY_ID = `${VERSION}_etta_key_id`;
const PHONE = `${VERSION}_etta_phone`;
const EMAIL = `${VERSION}_etta_email`;

export async function authenticate(options) {
  if (Storage.authenticate) {
    await Storage.authenticate(options);
  }
}

//
// Encrypted key storage
//

export async function putKey({ keyId, ciphertext }) {
  if (!isId(keyId) || !isBuffer(ciphertext)) {
    throw new Error('Invalid args');
  }
  if (await Storage.getItem(KEY_ID)) {
    throw new Error('Backup already present');
  }
  await Storage.setItem(KEY_ID, keyId);
  await Storage.setItem(shortKeyId(keyId), stringifyKey({ keyId, ciphertext }));
}

export async function getKey() {
  const keyId = await Storage.getItem(KEY_ID);
  if (!keyId) {
    return null;
  }
  const key = await Storage.getItem(shortKeyId(keyId));
  return key ? parseKey(key) : null;
}

export async function removeKeyId({ keyId }) {
  const item = await getKey();
  if (!item || item.keyId !== keyId) {
    throw new Error('Backup not found');
  }
  await Storage.removeItem(KEY_ID);
}

//
// Phone number storage
//

export async function putPhone({ userId }) {
  if (!isPhone(userId)) {
    throw new Error('Invalid args');
  }
  await Storage.setItem(PHONE, userId);
}

export async function getPhone() {
  return Storage.getItem(PHONE);
}

export async function removePhone() {
  await Storage.removeItem(PHONE);
}

//
// Email address storage
//

export async function putEmail({ userId }) {
  if (!isEmail(userId)) {
    throw new Error('Invalid args');
  }
  await Storage.setItem(EMAIL, userId);
}

export async function getEmail() {
  return Storage.getItem(EMAIL);
}

export async function removeEmail() {
  await Storage.removeItem(EMAIL);
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
