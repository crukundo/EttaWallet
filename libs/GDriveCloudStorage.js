import { GDrive, MimeTypes } from '@robinbobin/react-native-google-drive-api-wrapper';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import * as GoogleSignin from 'expo-auth-session/providers/google';

export async function authenticate(options = {}) {
  GoogleSignin.useAuthRequest({
    scopes: ['https://www.googleapis.com/auth/drive.appdata'],
    ...options,
  });
  // await GoogleSignin.hasPlayServices({
  //   showPlayServicesUpdateDialog: true,
  // });
  try {
    await GoogleSignin.signInSilently();
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      await GoogleSignin.signIn();
    }
  }
  const gDrive = await initDrive();
  if (!gDrive.accessToken) {
    throw new Error('Unable to use GDrive');
  }
}

export async function setItem(keyId, value) {
  const content = Buffer.from(value).toString('base64');
  const gDrive = await initDrive();
  await gDrive.files
    .newMultipartUploader()
    .setData(content, MimeTypes.TEXT)
    .setRequestBody({
      name: keyId,
      parents: ['appDataFolder'],
    })
    .setIsBase64(true)
    .execute();
}

async function initDrive() {
  const gDrive = new GDrive();
  gDrive.accessToken = (await GoogleSignin.getTokens()).accessToken;
  return gDrive;
}

export async function _getFileId(keyId) {
  const gDrive = await initDrive();
  const json = await gDrive.files.list({
    spaces: 'appDataFolder',
    fields: 'nextPageToken, files(id, name)',
  });
  if (json.files.length === 0) {
    return null;
  }
  const file = json.files.find(file => file.name === keyId);
  return file ? file.id : null;
}

export async function getItem(keyId) {
  const fileId = await _getFileId(keyId);
  if (!fileId) {
    return null;
  }
  const gDrive = await initDrive();
  const response = await gDrive.files.get(fileId, { alt: 'media' });
  const key = await response.text();
  return key;
}

export async function removeItem(keyId) {
  const fileId = await _getFileId(keyId);
  if (!fileId) {
    return null;
  }
  const gDrive = await initDrive();
  await gDrive.files.delete(fileId);
}
