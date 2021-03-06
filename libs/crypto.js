/**
 * @fileOverview wraps a secure native random number generator.
 * This module mimics the node crypto api and is intended to work in RN environment.
 */


import * as Random from 'expo-random';

/**
 * Generate cryptographically secure random bytes using native api.
 * @param  {number}   size      The number of bytes of randomness
 * @param  {function} callback  The callback to return the bytes
 * @return {Buffer}             The random bytes
 */
exports.randomBytes = (size) => {
  Random.getRandomBytes(size);
};
