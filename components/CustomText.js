import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { sizes } from '../constants/styles';

// Base Text
const baseStyles = StyleSheet.create({
    text: {
        fontSize: sizes.sizeBase,
        lineHeight: sizes.lineHeightBase,
        zIndex: 1,
        textAlign: 'center'
    },
});

export const Text = ({ children, style, ...props }) => (
    <RNText style={[baseStyles.text, style]} {...props}>
        {children}
    </RNText>
);

// H1 Text
const h1Styles = StyleSheet.create({
    text: {
        fontSize: sizes.Heading1,
        lineHeight: sizes.lineHeightH1,
    },
});

export const H1Text = ({ children = '', style }) => (
    <Text style={[h1Styles.text, style]}>{children}</Text>
);

// H2 Text
const h2Styles = StyleSheet.create({
    text: {
        fontSize: sizes.Heading2,
        lineHeight: sizes.lineHeightH2,
    },
});

export const H2Text = ({ children = '', style }) => (
    <Text style={[h2Styles.text, style]}>{children}</Text>
);

// H3 Text
const h3Styles = StyleSheet.create({
    text: {
        fontSize: sizes.Heading3,
        lineHeight: sizes.lineHeightH3,
    },
});

export const H3Text = ({ children = '', style }) => (
    <Text style={[h3Styles.text, style]}>{children}</Text>
);

// H4 Text
const h4Styles = StyleSheet.create({
    text: {
        fontSize: sizes.Heading4,
        lineHeight: sizes.lineHeightH4,
    },
});

export const H4Text = ({ children, style }) => (
    <Text style={[h4Styles.text, style]}>{children}</Text>
);

//H5 Text
const h5Styles = StyleSheet.create({
    text: {
        fontSize: sizes.Heading5,
        lineHeight: sizes.lineHeightH5,
    },
});

export const H5Text = ({ children, style }) => (
    <Text style={[h5Styles.text, style]}>{children}</Text>
);

//H6 Text
const h6Styles = StyleSheet.create({
    text: {
        fontSize: sizes.Heading6,
        lineHeight: sizes.lineHeightH6,
    },
});

export const H6Text = ({ children, style }) => (
    <Text style={[h6Styles.text, style]}>{children}</Text>
);

export default Text;