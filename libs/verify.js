/**
 * @fileOverview verification helpers to help sanitize input
 */

export function isPhone(o) {
  return /^\+[1-9]\d{1,14}$/.test(o);
}

export function isEmail(o) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(o);
}

export function isCode(o) {
  return /^\d{6}$/.test(o);
}

export function isId(o) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(o);
}

export function isPin(o) {
  return o ? /^.{4,256}$/.test(o) : false;
}

export function isObject(o) {
  return typeof o === 'object' && o !== null;
}

export function isString(o) {
  return typeof o === 'string' || o instanceof String;
}

export function isBuffer(o) {
  return Buffer.isBuffer(o);
}
