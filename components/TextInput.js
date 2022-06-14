import React, { Component } from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { sizes } from '../constants/styles';

const baseStyles = StyleSheet.create({
    input: {
        color: "#000000",
        fontSize: sizes.Heading4,
        height: sizes.lineHeightH4 + 2 * 12,
        padding: 0,
    },
});

export class TextInput extends Component {
    render() {
        const { style, ...props } = this.props;
        return (
            <RNTextInput
                style={[baseStyles.input, style]}
                autoCorrect={false}
                autoCapitalize="none"
                placeholderTextColor="#48484a"
                underlineColorAndroid="rgba(0,0,0,0)"
                {...props}
            />
        );
    }
}
