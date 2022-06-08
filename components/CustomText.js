import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { fontSize } from '../constants/styles';

// Base Text
const baseStyles = StyleSheet.create({
    text: {
        fontSize: fontSize.sizeBase,
        lineHeight: fontSize.lineHeightBase,
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
        fontSize: fontSize.sizeXXL,
        lineHeight: fontSize.lineHeightXXL,
    },
});

export const H1Text = ({ children = '', style }) => (
    <Text style={[h1Styles.text, style]}>{children}</Text>
);

// H2 Text
const h2Styles = StyleSheet.create({
    text: {
        fontSize: fontSize.sizeL,
        lineHeight: fontSize.lineHeightL,
    },
});

export const H2Text = ({ children = '', style }) => (
    <Text style={[h2Styles.text, style]}>{children}</Text>
);

// H3 Text
const h3Styles = StyleSheet.create({
    text: {
        fontSize: fontSize.sizeM,
        lineHeight: fontSize.lineHeightM,
    },
});

export const H3Text = ({ children = '', style }) => (
    <Text style={[h3Styles.text, style]}>{children}</Text>
);

// H4 Text
const h4Styles = StyleSheet.create({
    text: {
        fontSize: fontSize.sizeS,
        lineHeight: fontSize.lineHeightS,
    },
});

export const H4Text = ({ children, style }) => (
    <Text style={[h4Styles.text, style]}>{children}</Text>
);

//H5 Text
const h5Styles = StyleSheet.create({
    text: {
        fontSize: fontSize.sizeXXL,
        lineHeight: fontSize.lineHeightXXL,
    },
});

export const H5Text = ({ children, style }) => (
    <Text style={[h5Styles.text, style]}>{children}</Text>
);

//H6 Text
const h6Styles = StyleSheet.create({
    text: {
        fontSize: fontSize.sizeL,
        lineHeight: fontSize.lineHeightL,
    },
});

export const H6Text = ({ children, style }) => (
    <Text style={[h6Styles.text, style]}>{children}</Text>
);

export default Text;