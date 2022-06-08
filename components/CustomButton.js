import React from 'react';
import { TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 60,
        minWidth: 60,
    },
});

export const Button = ({ onPress, disabled, children, style }) => (
    <TouchableOpacity
        style={[{ opacity: disabled ? 0.5 : 1 }, styles.touchable, style]}
        disabled={disabled}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
);

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    style: ViewPropTypes.style,
};

const styles2 = StyleSheet.create({
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        minHeight: 60,
        minWidth: 60,
        borderRadius: 5,
    },
    touchable_small: {
        alignItems: 'center',
        alignSelf: 'stretch',
        minHeight: 45,
        minWidth: 40,
        borderRadius: 5,
        padding: 10,
    },
});

export const Button2 = ({ onPress, disabled, children, style }) => (
    <TouchableOpacity
        style={[{ opacity: disabled ? 0.5 : 1 }, styles2.touchable, style]}
        disabled={disabled}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
);

Button2.propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export const Button2_Small = ({ onPress, disabled, children, style }) => (
    <TouchableOpacity
        style={[styles2.touchable_small, style]}
        disabled={disabled}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
);

Button2_Small.propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export const IconButton = ({ onPress, disabled, style, children }) => (
    <Button onPress={onPress} disabled={disabled} style={style}>
        {children}
    </Button>
);

IconButton.propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: ViewPropTypes.style,
    children: PropTypes.node,
};

export default Button;