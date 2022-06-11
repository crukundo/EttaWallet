/**
 * @fileOverview action to handle mobile specific authentication using PINs
 */

import { PIN_LENGTH } from './config';

class AuthAction {
  constructor(store) {
    this._store = store;
  }

  // PIN actions

  /**
   * Append a digit input to the pin parameter.
   * @param  {string} options.digit The digit to append to the pin
   * @param  {string} options.param The pin parameter name
   * @return {undefined}
   */
  pushPinDigit({ digit, param }) {
    const { auth } = this._store;
    if (auth[param].length < PIN_LENGTH) {
      auth[param] += digit;
    }
  }

  /**
   * Remove the last digit from the pin parameter.
   * @param  {string} options.param The pin parameter name
   * @return {undefined}
   */
  popPinDigit({ param }) {
    const { auth } = this._store;
    if (auth[param]) {
      auth[param] = auth[param].slice(0, -1);
    }
  }
}
export default AuthAction;
