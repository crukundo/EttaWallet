/**
 * @fileOverview a module to wrap symmetric encryption in a simple api. The used cipher
 * is ChaCha20-Poly1305 (IETF version) with a 256 bit key a 96 bit iv.
 */

import { createCipher, createDecipher } from 'chacha/browser';
import { randomBytes } from './wallet/rng';
import { isBuffer } from './verify';

export const KEY_LEN = 32; // size of the key in bytes
export const IV_LEN = 12; // size of the iv in bytes
export const TAG_LEN = 16; // size of the tag in bytes

/**
 * Generate a cryptographically secure random symmetric encryption
 * key using native apis.
 * @return {Promise<Buffer>}  The symmetric encryption key
 */
export async function generateKey() {
  return randomBytes(KEY_LEN);
}

/**
 * Encrypt a plaintext using ChaCha20-Poly1305 (authenticated encryption). A random iv is
 * generated for every plaintext. The resulting buffer includes the iv and then the
 * encrypted ciphertext.
 * @param  {Buffer} plaintext  The plaintext bytes
 * @param  {Buffer} key        The symmetric encryption key
 * @return {Promise<Buffer>}   The iv + encrypted ciphertext
 */
export async function encrypt(plaintext, key) {
  if (!isBuffer(plaintext) || !isBuffer(key) || key.length !== KEY_LEN) {
    throw new Error('Invalid args');
  }
  const iv = await randomBytes(IV_LEN);
  const en = createCipher(key, iv);
  en.setAAD(Buffer.alloc(0));
  return Buffer.concat([iv, en.update(plaintext), en.final(), en.getAuthTag()]);
}

/**
 * Decrypt a ciphertext using ChaCha20-Poly1305 (authenticated encryption). The iv is expected
 * in the first 12 bytes of the ciphertext input.
 * @param  {Buffer} ciphertext  The iv + ciphertext bytes
 * @param  {Buffer} key         The symmetric encryption key
 * @return {Promise<Buffer>}    The decrypted plaintext
 */
export async function decrypt(ciphertext, key) {
  if (!isBuffer(ciphertext) || !isBuffer(key) || key.length !== KEY_LEN) {
    throw new Error('Invalid args');
  }
  const iv = ciphertext.slice(0, IV_LEN);
  const ct = ciphertext.slice(IV_LEN, ciphertext.length - TAG_LEN);
  const tag = ciphertext.slice(ciphertext.length - TAG_LEN, ciphertext.length);
  const de = createDecipher(key, iv);
  de.setAAD(Buffer.alloc(0));
  de.setAuthTag(tag);
  return Buffer.concat([de.update(ct), de.final()]);
}
