import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';

import MainContent from '../../components/MainContent';
import { H3Text } from '../../components/CustomText';
import { PinSecret, PinPad } from '../../components/Pin';
import { dynamicStyle } from '../../constants/styles';
import Store from '../../store';

const VerifyPinScreen = () => {

  const store = new Store();

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
      <View style={[dynamicStyles.align, styles.container1]}>
        <H3Text style={dynamicStyles.text}>Verify your PIN</H3Text>
        <PinSecret
          pin={store.auth.newPin}
          stroke={color.stroke}
          border={color.stroke}
        />
      </View>
      <View style={styles.container2}>
        <PinPad
          onInput={(digit) => auth.pushPinDigit({ digit, param: 'newPin' })}
          onBackspace={() => auth.popPinDigit({ param: 'newPin' })}
          stroke={color.stroke}
          secondary={color.neutral7}
        />
      </View>
    </MainContent>
  );
};

export default observer(VerifyPinScreen);
