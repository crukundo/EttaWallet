/**
 * @fileOverview this module wraps http requests to the 2FA keyserver
 */

import Frisbee from 'frisbee';

export let _api; // the frisbee client instance (for testing)

/**
 * Initiate the client by setting the keyserver's base url.
 * @param  {string} baseURI  The keyserver base url
 * @return {undefined}
 */
export function init({ baseURI }) {
  _api = new Frisbee({
    baseURI,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

/**
 * Set the user chosen PIN as a basic authentication http header.
 * @param {string} pin  A user chosen pin to authenticate to the keyserver
 */
export function setPin({ pin }) {
  _api.auth('', pin);
}

/**
 * Create a new encryption key in the photon-keyserver.
 * @param  {string} pin       A user chosen pin to authenticate to the keyserver
 * @return {Promise<string>}  The key id for the encryption key
 */
export async function createKey({ pin }) {
  const { status, body } = await _api.post(`/v2/key`, {
    body: { pin },
  });
  if (status !== 201) {
    throw new Error(`Keyserver error: ${body.message}`);
  }
  setPin({ pin });
  return body.id;
}

/**
 * Download the encryption key from the key server. The pin needs to be set in
 * the http auth headers before calling this method.
 * @param  {string} keyId     The key id for the encryption key
 * @return {Promise<Buffer>}  The encryption key buffer
 */
export async function fetchKey({ keyId }) {
  const { status, body } = await _api.get(`/v2/key/${keyId}`);
  if (status === 429) {
    throw new RateLimitError(`Keyserver error: ${body.message}`, body.delay);
  }
  if (status !== 200) {
    throw new Error(`Keyserver error: ${body.message}`);
  }
  return Buffer.from(body.encryptionKey, 'base64');
}

/**
 * Update the pin to a new one. The pin needs to be set in the http auth headers
 * before calling this method.
 * @param  {string} keyId   The key id for the encryption key
 * @param  {string} newPin  The new pin to replace the old on
 * @return {Promise<undefined>}
 */
export async function changePin({ keyId, newPin }) {
  const { status, body } = await _api.put(`/v2/key/${keyId}`, {
    body: { newPin },
  });
  if (status === 429) {
    throw new RateLimitError(`Keyserver error: ${body.message}`, body.delay);
  }
  if (status !== 200) {
    throw new Error(`Keyserver error: ${body.message}`);
  }
  setPin({ pin: newPin });
}

/**
 * Register a new user id for a given key id. The pin needs to be set in the
 * http auth headers before calling this method.
 * @param  {string} keyId   The key id for the encryption key
 * @param  {string} userId  The user's phone number or email address
 * @return {Promise<undefined>}
 */
export async function createUser({ keyId, userId }) {
  const { status, body } = await _api.post(`/v2/key/${keyId}/user`, {
    body: { userId },
  });
  if (status === 429) {
    throw new RateLimitError(`Keyserver error: ${body.message}`, body.delay);
  }
  if (status !== 201) {
    throw new Error(`Keyserver error: ${body.message}`);
  }
}

/**
 * Verify the registered user id for a given key id.
 * @param  {string} keyId   The key id for the encryption key
 * @param  {string} userId  The user's phone number or email address
 * @param  {string} code    The verification code sent via SMS or email
 * @return {Promise<undefined>}
 */
export async function verifyUser({ keyId, userId, code }) {
  userId = encodeURIComponent(userId);
  const { status, body } = await _api.put(`/v2/key/${keyId}/user/${userId}`, {
    body: { code, op: 'verify' },
  });
  if (status === 429) {
    throw new RateLimitError(`Keyserver error: ${body.message}`, body.delay);
  }
  if (status !== 200) {
    throw new Error(`Keyserver error: ${body.message}`);
  }
}

/**
 * Initiate a pin reset in case the user forgot their pin. A time lock will be set
 * in the keyserver.
 * @param  {string} keyId   The key id for the encryption key
 * @param  {string} userId  The user's phone number or email address
 * @return {Promise<undefined>}
 */
export async function initPinReset({ keyId, userId }) {
  userId = encodeURIComponent(userId);
  const { status, body } = await _api.get(`/v2/key/${keyId}/user/${userId}/reset`);
  if (status !== 200) {
    throw new Error(`Keyserver error: ${body.message}`);
  }
}

/**
 * Verify a pin reset. This api can be polled until the time lock delay is over and
 * the http response status code is no longer 423. After this call is successful the
 * new pin can be used to download the encryption key.
 * @param  {string} keyId          The key id for the encryption key
 * @param  {string} userId         The user's phone number or email address
 * @param  {string} code           The verification code sent via SMS or email
 * @param  {string} newPin         The new pin to replace the old on
 * @return {Promise<string|null>}  The time lock delay or null when it's over
 */
export async function verifyPinReset({ keyId, userId, code, newPin }) {
  userId = encodeURIComponent(userId);
  const { status, body } = await _api.put(`/v2/key/${keyId}/user/${userId}`, {
    body: { code, op: 'reset-pin', newPin },
  });
  if (status === 423) {
    return body.delay;
  }
  if (status !== 200) {
    throw new Error(`Keyserver error: ${body.message}`);
  }
  setPin({ pin: newPin });
  return null;
}

/**
 * Delete a user id from the key server. The pin needs to be set in the http auth
 * headers before calling this method.
 * @param  {string} keyId   The key id for the encryption key
 * @param  {string} userId  The user's phone number or email address
 * @return {Promise<undefined>}
 */
export async function removeUser({ keyId, userId }) {
  userId = encodeURIComponent(userId);
  const { status, body } = await _api.delete(`/v2/key/${keyId}/user/${userId}`);
  if (status === 429) {
    throw new RateLimitError(`Keyserver error: ${body.message}`, body.delay);
  }
  if (status !== 200) {
    throw new Error(`Keyserver error: ${body.message}`);
  }
}

//
// Helpers
//

export class RateLimitError extends Error {
  constructor(message, delay) {
    super(message);
    this.delay = delay;
  }
}
