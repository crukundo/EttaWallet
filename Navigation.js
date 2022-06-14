import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalletFirstUse from './screens/wallet/WalletFirstUse';
import ProductIntroScreens from './screens/wallet/ProductIntroScreens';
import BTCOwnershipCheck from './screens/wallet/BTCOwnershipCheck';
import NoBTC from './screens/wallet/NoBTC';
import LoginArea from './screens/wallet/LoginArea';
// Backup Wallet Screens
import SetPin from './screens/pin/SetPin';
import VerifyPin from './screens/pin/VerifyPin';
import WaitForBackup from './screens/pin/WaitForBackup';

const BackupStack = createNativeStackNavigator();

const BackupWalletStack = () => (
    <BackupStack.Navigator>
        <BackupStack.Screen
            name="SetPinScreen"
            component={SetPin}
            options={{ headerShown: false }}
        />
        <BackupStack.Screen
            name="VerifyPinScreen"
            component={VerifyPin}
            options={{ headerShown: false }}
        />
        <BackupStack.Screen
            name="WaitForBackupScreen"
            component={WaitForBackup}
            options={{ headerShown: false }}
        />
    </BackupStack.Navigator>
);

const InitStack = createNativeStackNavigator();
const InitRoot = () => (
    <InitStack.Navigator initialRouteName="ProductIntroScreens">
        <InitStack.Screen name="ProductIntroScreens" component={ProductIntroScreens} options={{
            headerShown: false
        }} />
        <InitStack.Screen name="WalletFirstUse" component={WalletFirstUse} options={{ headerShown: false }} />
        <InitStack.Screen name="BackupWallet" component={BackupWalletStack} options={{ headerShown: false }} />
        <InitStack.Screen name="LoginArea" component={LoginArea} options={{ headerShown: false }} />
        <InitStack.Screen name="BTCOwnershipCheck" component={BTCOwnershipCheck} options={{ headerShown: false }} />
        <InitStack.Screen name="NoBTC" component={NoBTC} options={{ headerShown: false }} />
    </InitStack.Navigator>
);

export default InitRoot;