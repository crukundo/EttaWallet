import {Alert} from 'react-native';

export function info(title, message) {
  Alert.alert(title, message);
}

export function error({title, message, err}) {
  Alert.alert(title, message || err.message);
  if (err) {
    console.error(err);
  }
}

export function confirm({title, message, onOk}) {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => onOk(),
      },
    ],
    {
      cancelable: true,
    },
  );
}
