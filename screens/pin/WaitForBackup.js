import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';

import { Text } from '../../components/CustomText';

const WaitForBackupScreen = ({ route }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.message}>{route.params.message}</Text>
        </View>
    );
};

export default observer(WaitForBackupScreen);
