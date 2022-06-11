import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';

import { H1Text } from '../component/text';
import { TextInput } from '../component/input';
import { PillButton } from '../component/button';
import { MainContent, Spacer } from '../component/layout';
import { Background } from '../component/background';

import store from '../store';
import * as backup from '../action/backup';

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
  },
  btnWrapper: {
    marginTop: 30,
    height: 150,
  },
});

const ChangeVerifyPinScreen = ({ route }) => (
  <Background>
    <MainContent>
      <H1Text>Verify your new PIN</H1Text>
      <TextInput
        placeholder="PIN"
        keyboardType="number-pad"
        textContentType="password"
        secureTextEntry
        autoFocus
        style={styles.input}
        value={store.backup.pinVerify}
        onChangeText={pin => backup.setPinVerify(pin)}
      />
      <Spacer />
      <View style={styles.btnWrapper}>
        <PillButton onPress={() => route.params.onNext()}>Next</PillButton>
      </View>
    </MainContent>
  </Background>
);

export default observer(ChangeVerifyPinScreen);
