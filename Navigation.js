import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import createWallet from './screens/wallet/CreateWallet';
import WalletIntro from './screens/wallet/WalletIntro';

const WalletStack = createNativeStackNavigator();

const WalletRoot = () => {
    const theme = useTheme();

    return (
        <WalletStack.Navigator screenOptions={{ headerHideShadow: true }}>
            <WalletStack.Screen name="WalletTransactions" component={WalletTransactions} options={WalletTransactions.navigationOptions(theme)} />
            {/* <WalletStack.Screen name="WalletDetails" component={WalletDetails} options={WalletDetails.navigationOptions(theme)} />
            <WalletStack.Screen name="TransactionDetails" component={TransactionDetails} options={TransactionDetails.navigationOptions(theme)} />
            <WalletStack.Screen name="TransactionStatus" component={TransactionStatus} options={TransactionStatus.navigationOptions(theme)} /> */}
        </WalletStack.Navigator>
    );
};

const CreateWalletStack = createNativeStackNavigator();
const CreateWalletRoot = () => {
    const theme = useTheme();

    return (
        <CreateWalletStack.Navigator screenOptions={{ headerHideShadow: true }}>
            <CreateWalletStack.Screen name="CreateWallet" component={createWallet} />
        </CreateWalletStack.Navigator>
    );
};

const Drawer = createDrawerNavigator();
function DrawerRoot() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Navigation" component={Navigation} options={{ headerShown: false, gestureEnabled: false }} />
        </Drawer.Navigator>
    );
}

const InitStack = createNativeStackNavigator();
const InitRoot = () => (
    <InitStack.Navigator initialRouteName="WalletIntro">
        <InitStack.Screen name="WalletIntro" component={WalletIntro} options={{ headerShown: false }} />
    </InitStack.Navigator>
);

const RootStack = createNativeStackNavigator();
const Navigation = () => {

    return (
        <RootStack.Navigator initialRouteName="UnlockWithScreenRoot" screenOptions={{ headerHideShadow: true }}>
            <RootStack.Screen name="WalletRoot" component={WalletRoot} options={{ headerShown: false, translucent: false }} />
            <RootStack.Screen name="CreateWalletRoot" component={CreateWalletRoot} />
        </RootStack.Navigator>
    );
};

export default InitRoot;