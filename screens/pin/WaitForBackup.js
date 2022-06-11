import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';

import { Text } from '../../components/CustomText';

const WaitForBackupScreen = ({ route }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        }
    });

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
            <Text style={styles.message}>{route.params.message}</Text>
        </View>
    );
};

export default observer(WaitForBackupScreen);
