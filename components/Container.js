import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        width: '100vw',
        position: 'absolute'
    },
});

const Container = ({ children, style }) => (
    <View style={[styles.container, style]}>{children}</View>
);

Container.propTypes = {
    children: PropTypes.node,
    style: ViewPropTypes.style,
};

const Circularstyles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        borderRadius: '100%',
    },
});

export const CircularContainer = ({ style, children }) => (
    <View style={[Circularstyles.container, style]}>{children}</View>
);

CircularContainer.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
};

const Flexstyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90vw',
    },
});

export const FlexContainer = ({ style, children }) => (
    <View style={[Flexstyles.container, style]}>{children}</View>
);

FlexContainer.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
};

export default Container;