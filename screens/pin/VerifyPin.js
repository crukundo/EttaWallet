import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';

import MainContent from '../../components/MainContent';
import { H3Text } from '../../components/CustomText';
import { Button2_Small } from '../../components/CustomButton';
import { PinSecret, PinPad } from '../../components/Pin';
import { dynamicStyle } from '../../constants/styles';
import { Back_Header } from '../../components/Header';
import { TextInput } from '../../components/TextInput';
import store from '../../store';
import * as backup from '../../actions/backup';

const color = store.theme.color;
const primary = store.theme.primary;

const VerifyPinScreen = () => {

  const dynamicStyles = dynamicStyle(color);
  const styles = StyleSheet.create({
    container1: {
      flex: 1,
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
        <H3Text style={dynamicStyles.boldtext}>Confirm your PIN</H3Text>

        <TextInput
          placeholder="Enter PIN again"
          keyboardType="number-pad"
          textContentType="newPassword"
          secureTextEntry
          autoFocus
          style={styles.input}
          value={store.backup.pinVerify}
          onChangeText={pin => backup.setPinVerify(pin)}
        />
      </View>
      <View style={styles.container2}>
        <Button2_Small style={styles.btn} onPress={() => backup.validatePinVerify()}>
          <H3Text style={dynamicStyles.btnText}>Create Wallet</H3Text>
        </Button2_Small>
      </View>

    </MainContent>
  );
};

export default observer(VerifyPinScreen);
