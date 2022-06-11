import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InitRoot from './Navigation';
import * as nav from './NavigationService';

export default function App() {

  return (
    <>
      <NavigationContainer ref={navRef => nav.setTopLevelNavigator(navRef)}>
        <InitRoot />
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
