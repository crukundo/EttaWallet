/**
 * @fileOverview a high level backup module that provides apis for key backup
 * and restore. Encryption and key storage in the device keychain is handled
 * transparently and does not need to be done by th api consumer explicitly.
 */

import * as chacha from './chacha';
import * as KeyServer from './keyserver';
import * as CloudStore from './cloudstore';
import { isPhone, isEmail, isId, isCode, isPin, isObject } from './verify';

/**
 * Initialize the key backup module by specifying the key server which is
 * used to store the encryption key to the cloud backup.
 * @param  {string} keyServerURI  The base url of the key server
 * @return {undefined}
 */
export function init({ keyServerURI }) {
  KeyServer.init({ baseURI: keyServerURI });
}

/**
 * Authentication for Google login
 * @param {Object} options Configuration options for logging in to Google e.g clientId
 * @return {Promise<undefined>}
 */
export async function authenticate(options = {}) {
  await CloudStore.authenticate(options);
}

//
// Backup & Restore
//

/**
 * Check for an existing backup in cloud storage.
 * @return {Promise<boolean>}  If a backup exists
 */
export async function checkForExistingBackup() {
  const backup = await CloudStore.getKey();
  return !!backup;
}

/**
 * Create an encrypted backup in cloud storage. The backup is encrypted using a
 * random 256 bit encryption key that is stored on the photon-keyserver. A user
 * chosen PIN is used to authentication download of the encryption key.
 * @param  {Object} data  A serializable object to be backed up
 * @param  {string} pin   A user chosen pin to authenticate to the keyserver
 * @return {Promise<undefined>}
 */
export async function createBackup({ data, pin }) {
  if (!isObject(data)) {
    throw new Error('Invalid args');
  }
  setPin({ pin });
  const keyId = await KeyServer.createKey({ pin });
  const encryptionKey = await KeyServer.fetchKey({ keyId });
  const plaintext = Buffer.from(JSON.stringify(data), 'utf8');
  const ciphertext = await chacha.encrypt(plaintext, encryptionKey);
  await CloudStore.putKey({ keyId, ciphertext });
}

/**
 * Restore an encrypted backup from cloud storage. The encryption key is fetched from
 * the photon-keyserver by authenticating via a user chosen PIN.
 * @param  {string} pin       A user chosen pin to authenticate to the keyserver
 * @return {Promise<Object>}  The decrypted backup payload
 */
export async function restoreBackup({ pin }) {
  setPin({ pin });
  const keyId = await fetchKeyId();
  const encryptionKey = await KeyServer.fetchKey({ keyId });
  const backup = await CloudStore.getKey();
  if (!backup || backup.keyId !== keyId) {
    return null;
  }
  const { ciphertext } = backup;
  const plaintext = await chacha.decrypt(ciphertext, encryptionKey);
  return JSON.parse(plaintext.toString('utf8'));
}

//
// Change PIN
//

/**
 * Change the user chosen PIN on the photon-keyserver.
 * @param  {string} pin     A user chosen pin to authenticate to the keyserver
 * @param  {string} newPin  The new pin to replace the old one
 * @return {Promise<undefined>}
 */
export async function changePin({ pin, newPin }) {
  if (!isPin(newPin)) {
    throw new Error('Invalid args');
  }
  setPin({ pin });
  const keyId = await fetchKeyId();
  await KeyServer.changePin({ keyId, newPin });
}

//
// Register User ID
//

/**
 * Register a phone number that can be used to reset the pin later in case the user
 * forgets pin. this step is completely optional and may not be desirable by some users
 * e.g. if they have saved their pin in a password manager.
 * @param  {string} userId  The user's phone number
 * @param  {string} pin     A user chosen pin to authenticate to the keyserver
 * @return {Promise<undefined>}
 */
export async function registerPhone({ userId, pin }) {
  if (!isPhone(userId)) {
    throw new Error('Invalid args');
  }
  await _registerUser({ userId, pin });
}
/**
 * Verify the phone number with a code that was sent from the keyserver either via SMS.
 * @param  {string} userId  The user's phone number
 * @param  {string} code    The verification code sent via SMS or email
 * @return {Promise<undefined>}
 */
export async function verifyPhone({ userId, code }) {
  if (!isPhone(userId) || !isCode(code)) {
    throw new Error('Invalid args');
  }
  await _verifyUser({ userId, code });
  await CloudStore.putPhone({ userId });
}

/**
 * Get the phone number stored on the cloud storage which can be used to reset the pin.
 * @return {string}  The user's phone number
 */
export async function getPhone() {
  return CloudStore.getPhone();
}

/**
 * Delete the phone number from the key server and cloud storage. This should be called
 * e.g. before the user wants to change their user id to a new one.
 * @param  {string} userId  The user's phone number
 * @param  {string} pin     A user chosen pin to authenticate to the keyserver
 * @return {Promise<undefined>}
 */
export async function removePhone({ userId, pin }) {
  if (!isPhone(userId)) {
    throw new Error('Invalid args');
  }
  await _removeUser({ userId, pin });
  await CloudStore.removePhone();
}

/**
 * Register an email address that can be used to reset the pin later in case the user
 * forgets pin. This step is completely optional and may not be desirable by some users
 * e.g. if they have saved their pin in a password manager.
 * @param  {string} userId  The user's email address
 * @param  {string} pin     A user chosen pin to authenticate to the keyserver
 * @return {Promise<undefined>}
 */
export async function registerEmail({ userId, pin }) {
  if (!isEmail(userId)) {
    throw new Error('Invalid args');
  }
  await _registerUser({ userId, pin });
}

/**
 * Verify the email address with a code that was sent from the keyserver either via email.
 * @param  {string} userId  The user's email address
 * @param  {string} code    The verification code sent via SMS or email
 * @return {Promise<undefined>}
 */
export async function verifyEmail({ userId, code }) {
  if (!isEmail(userId) || !isCode(code)) {
    throw new Error('Invalid args');
  }
  await _verifyUser({ userId, code });
  await CloudStore.putEmail({ userId });
}

/**
 * Get the email address stored on the cloud storage which can be used to reset the pin.
 * @return {string}  The user's email address
 */
export async function getEmail() {
  return CloudStore.getEmail();
}

/**
 * Delete the email address from the key server and cloud storage. This should be called
 * e.g. before the user wants to change their user id to a new one.
 * @param  {string} userId  The user's email address
 * @param  {string} pin     A user chosen pin to authenticate to the keyserver
 * @return {Promise<undefined>}
 */
export async function removeEmail({ userId, pin }) {
  if (!isEmail(userId)) {
    throw new Error('Invalid args');
  }
  await _removeUser({ userId, pin });
  await CloudStore.removeEmail();
}

async function _registerUser({ userId, pin }) {
  setPin({ pin });
  const keyId = await fetchKeyId();
  await KeyServer.createUser({ keyId, userId });
}

async function _verifyUser({ userId, code }) {
  const keyId = await fetchKeyId();
  await KeyServer.verifyUser({ keyId, userId, code });
}

async function _removeUser({ userId, pin }) {
  setPin({ pin });
  const keyId = await fetchKeyId();
  await KeyServer.removeUser({ keyId, userId });
}

//
// Reset PIN
//

/**
 * In case the user has forgotten their pin and has verified a user id like an
 * emaill address or phone number, this can be used to initiate a pin reset with
 * a 30 day delay (to migidate SIM swap attacks). After calling this function,
 * calling verifyPinReset will start the 30 day time lock. After that time delay
 * finalizePinReset can be called with the new pin.
 * @param  {string} userId       The user's phone number or email address
 * @return {Promise<undefined>}
 */
export async function initPinReset({ userId }) {
  if (!isPhone(userId) && !isEmail(userId)) {
    throw new Error('Invalid args');
  }
  const keyId = await fetchKeyId();
  await KeyServer.initPinReset({ keyId, userId });
}

/**
 * Verify the user id with a code and check if the time lock delay is over.
 * This function returns an iso formatted date string which represents the
 * time lock delay. If this value is null it means the delay is over and the
 * user can recover their key using the new pin.
 * @param  {string} userId         The user's phone number or email address
 * @param  {string} code           The verification code sent via SMS or email
 * @param  {string} newPin      The new pin (at least 4 digits)
 * @return {Promise<string|null>}  The time lock delay or null if it's over
 */
export async function verifyPinReset({ userId, code, newPin }) {
  if ((!isPhone(userId) && !isEmail(userId)) || !isCode(code) || !isPin(newPin)) {
    throw new Error('Invalid args');
  }
  const keyId = await fetchKeyId();
  return KeyServer.verifyPinReset({ keyId, userId, code, newPin });
}

//
// Helper functions
//

function setPin({ pin }) {
  if (!isPin(pin)) {
    throw new Error('Invalid args');
  }
  KeyServer.setPin({ pin });
}

async function fetchKeyId() {
  const backup = await CloudStore.getKey();
  if (!backup || !isId(backup.keyId)) {
    throw new Error('No key id found. Call checkForExistingBackup() first.');
  }
  return backup.keyId;
}
