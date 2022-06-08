import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { BitcoinIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { H3Text, H4Text } from './CustomText';
import { primaryColors } from '../constants/styles';

const Transaction = ({ type, btc, time, amt, style, colors }) => {
    const styles = StyleSheet.create({
        container: {
            borderTopColor: colors.neutral3,
            borderTopWidth: 1,
            flexDirection: 'row',
            paddingVertical: 26,
            width: '100%',
        },
        text: {
            textAlign: 'right',
            color: colors.stroke,
        },
        secText: {
            color: colors.neutral7,
            lineHeight: 35,
            fontSize: 15,
            textAlign: 'left',
        },
        recText: {
            textAlign: 'right',
            color: primaryColors.green,
        },
        flexContainer1: {
            flex: 4,
            alignItems: 'flex-start',
            minWidth: 100,
        },
        flexContainer2: {
            flex: 4,
            alignItems: 'flex-end',
            minWidth: 100,
        },
        picContainer: {
            paddingRight: 4,
        },
    });

    return (
        <View style={[styles.container, style]}>
            <View style={styles.picContainer}>
                <Image
                    source={require('../assets/img/profile.png')}
                    style={{ width: 35, height: 35 }}
                />
            </View>
            <View style={styles.flexContainer1}>
                <H3Text style={styles.text}>{type}</H3Text>
                <H4Text style={styles.secText}>{time}</H4Text>
            </View>
            <View style={styles.flexContainer2}>
                <H3Text
                    style={
                        type === 'Received' || type === 'Receiving...'
                            ? styles.recText
                            : styles.text
                    }
                >
                    <BitcoinIcon color={colors.stroke} height={20} width={20} />
                    {btc}
                </H3Text>
                <H4Text style={styles.secText}>{amt}</H4Text>
            </View>
        </View>
    );
};

export default Transaction;
