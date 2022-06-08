import React from 'react';
import { View, Text as RNText, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Text from './CustomText';
import { fontSize } from '../constants/styles';

// Balance Label
const balanceStyles = StyleSheet.create({
    label: {
        flexDirection: 'row',
    },
    numeral: {
        fontFamily: 'Inter Regular',
        fontSize: fontSize.sizeL,
        lineHeight: null,
        letterSpacing: 1,
    },
});

export const BalanceLabel = ({ children, style }) => (
    <View style={[balanceStyles.label, style]}>{children}</View>
);

BalanceLabel.propTypes = {
    children: PropTypes.node.isRequired,
    style: ViewPropTypes.style,
};

// Balance Label Numeral
export const BalanceLabelNumeral = ({ children, style }) => (
    <Text
        style={[balanceStyles.numeral, style]}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
    >
        {children}
    </Text>
);

BalanceLabelNumeral.propTypes = {
    children: PropTypes.node.isRequired,
    style: RNText.propTypes.style,
};

// Small Balance Label
const smallBalanceStyles = StyleSheet.create({
    label: {
        flexDirection: 'row',
    },
    numeral: {
        fontFamily: 'Inter Regular',
        fontSize: fontSize.sizeBase,
        lineHeight: fontSize.lineHeightBase,
        letterSpacing: 1,
    },
});

export const SmallBalanceLabel = ({ children, style }) => (
    <View style={smallBalanceStyles.label}>
        <Text style={[smallBalanceStyles.numeral, style]}>{children}</Text>
    </View>
);

SmallBalanceLabel.propTypes = {
    children: PropTypes.string.isRequired,
    style: RNText.propTypes.style,
};
