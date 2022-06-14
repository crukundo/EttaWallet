import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../../components/MainContent';
import { H3Text, H5Text, H6Text } from '../../components/CustomText';
import { PinSecret, PinPad } from '../../components/Pin';
import { dynamicStyle } from '../../constants/styles';
// import * as backup from '../../actions/backup';
import store from '../../store';
import AuthAction from '../../auth';
import { Back_Header } from '../../components/Header';

const SetPinScreen = ({ navigation }) => {

  const color = store.theme.color;
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
  });

  return (

    <MainContent style={dynamicStyles.container}>
      <Back_Header color={color.stroke} />
      <View style={[dynamicStyles.align, styles.container1]}>
        <H3Text style={dynamicStyles.boldtext}>Choose a 4-digit PIN</H3Text>
        <H5Text style={[dynamicStyles.secText, styles.secText]}>
          Use a PIN you can remember.
        </H5Text>
        <PinSecret
          pin={store.backup.newPin}
          stroke={color.stroke}
          border={color.stroke}
        />
        <H6Text style={[dynamicStyles.secText, styles.secText]}>
          This is used to encrypt your wallet, which prevents your cloud service provider from accessing it.
        </H6Text>
      </View>
      <View style={styles.container2}>
        <PinPad
          onInput={(digit) => AuthAction.pushPinDigit({ digit, param: 'newPin' })}
          onBackspace={() => AuthAction.popPinDigit({ param: 'newPin' })}
          stroke={color.stroke}
          secondary={color.neutral7}
        />
      </View>
    </MainContent>
  );
};

export default observer(SetPinScreen);
