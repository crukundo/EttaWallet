/**
 * @fileOverview a module to wrap native secure key store apis
 */

import * as SecureStore from 'expo-secure-store';
import { isString } from './verify';

const VERSION = '1';
const USER = 'photon.user';

/**
 * Store an item in the keychain.
 * @param {string} key   The key by which to do a lookup
 * @param {string} value The value to be stored
 * @return {Promise<undefined>}
 */
export async function setItem(key, value) {
  if (!isString(key) || !key || !isString(value)) {
    throw new Error('Invalid args');
  }
  const options = {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  };
  const vKey = `${VERSION}_${key}`;
  await SecureStore.setItemAsync(vKey, USER, value, options);
}

/**
 * Read an item stored in the keychain.
 * @param  {string} key      The key by which to do a lookup.
 * @return {Promise<string>} The stored value
 */
export async function getItem(key) {
  if (!isString(key) || !key) {
    throw new Error('Invalid args');
  }
  const vKey = `${VERSION}_${key}`;
  const credentials = await SecureStore.getItemAsync(vKey);
  if (credentials) {
    return credentials.password;
  } else {
    return null;
  }
}
