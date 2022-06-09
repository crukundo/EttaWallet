import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { H3Text } from './CustomText';
import PropTypes from 'prop-types';
import SettingsIcon from '../assets/icons/outline/Gear';
import CaretLeft from '../assets/icons/filled/CaretLeft';
import Button from './CustomButton';

// Header
const styles = StyleSheet.create({
    settingHeader: {
        alignItems: 'flex-end',
    },
    backHeader: {
        alignItems: 'flex-start',
    },
    toolbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
});

export const Header = ({ style, children }) => (
    <View style={[styles.header, style]}>{children}</View>
);

Header.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
};

export const Setting_Header = ({ color, style }) => (
    <Header style={[styles.settingHeader, style]}>
        <Button>
            <SettingsIcon height={30} width={30} color={color} />
        </Button>
    </Header>
);

export const Back_Header = ({ color, style }) => (
    <Header style={[styles.backHeader, style]}>
        <Button>
            <H3Text style={{ color: color }}>
                <CaretLeft height={20} width={30} viewBox="0 0 20 20" color={color} />
                Back
            </H3Text>
        </Button>
    </Header>
);

export const Skip_Header = ({ color, style }) => (
    <Header style={[styles.settingHeader, style]}>
        <Button onPress={() => {
            return 0;
        }}>
            <H3Text style={{ color: color }}>
                Skip
            </H3Text>
        </Button>
    </Header>
);

export const Back_Skip_Toolbar = ({ color, style }) => (
    <Header style={[styles.toolbarContainer, style]}>
        <Button onPress={() => {
            return 0;
        }}>
            <H3Text style={{ color: color }}>
                <CaretLeft height={20} width={30} viewBox="0 0 20 20" color={color} />
                Back
            </H3Text>
        </Button>
        <Button onPress={() => {
            return 0;
        }}>
            <H3Text style={{ color: color }}>
                Skip
            </H3Text>
        </Button>
    </Header>
);

export default Header;