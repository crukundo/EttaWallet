import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../../components/MainContent';
import { H3Text, H5Text, H6Text } from '../../components/CustomText';
import { Button2_Small } from '../../components/CustomButton';
import { PinSecret, PinPad } from '../../components/Pin';
import { dynamicStyle } from '../../constants/styles';
import * as backup from '../../actions/backup';
import store from '../../store';
import { Back_Header } from '../../components/Header';
import { TextInput } from '../../components/TextInput';

const color = store.theme.color;
const primary = store.theme.primary;

const SetPinScreen = ({ navigation }) => {

  const dynamicStyles = dynamicStyle(color);
  const styles = StyleSheet.create({
    container1: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    container2: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    secText: {
      paddingVertical: 20,
    },
    btn: {
      backgroundColor: primary.bitcoin_orange,
      margin: 20,
    },
  });

  return (

    <MainContent style={dynamicStyles.container}>
      <Back_Header color={color.stroke} />
      <View style={[dynamicStyles.align, styles.container1]}>
        <H3Text style={dynamicStyles.boldtext}>Choose a 4-digit PIN</H3Text>
        <H5Text style={[dynamicStyles.secText, styles.secText]}>
          Use a PIN you can remember.
        </H5Text>
        <TextInput
          placeholder="PIN (at least 4 digits)"
          keyboardType="number-pad"
          textContentType="newPassword"
          secureTextEntry
          autoFocus
          style={styles.input}
          value={store.backup.pin}
          onChangeText={pin => backup.setPin(pin)}
        />
        <H6Text style={[dynamicStyles.secText, styles.secText]}>
          This is used to encrypt your wallet, which prevents your cloud service provider from accessing it.
        </H6Text>
      </View>
      <View style={styles.container2}>
        <Button2_Small style={styles.btn} onPress={() => backup.validateNewPin()}>
          <H3Text style={dynamicStyles.btnText}>Next</H3Text>
        </Button2_Small>
      </View>

    </MainContent>
  );
};

export default observer(SetPinScreen);
