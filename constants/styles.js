/**
 * @fileOverview General Styles
 * Taken According to Bitcoin Wallet Design Kit
 */
import { StyleSheet } from 'react-native';

//Primary Colors
export const primary = {
    bitcoin_orange: '#F7931A',
    bitcoin_blue: '#1C376B',
    red: '#EB5757',
    green: '#27AE60',
    blue: '#2D9CDB',
    purple: '#BB6BD9'
}

//Light Theme Colors
export const light = {
    fill: '#FFFFFF',
    neutral1: '#F8F8F8',
    neutral2: '#F4F4F4',
    neutral3: '#EDEDED',
    neutral4: '#DEDEDE',
    neutral5: '#BBBBBB',
    neutral6: '#999999',
    neutral7: '#777777',
    neutral8: '#404040',
    stroke: '#000000'
}

//Dark Theme Colors
export const dark = {
    fill: '#000000',
    neutral1: '#1A1A1A',
    neutral2: '#2D2D2D',
    neutral3: '#444444',
    neutral4: '#5C5C5C',
    neutral5: '#787878',
    neutral6: '#949494',
    neutral7: '#B0B0B0',
    neutral8: '#CCCCCC',
    stroke: '#FFFFFF'
}

export const sizes = {
    Heading1: 36,
    Heading2: 28,
    Heading3: 24,
    Heading4: 21,
    Heading5: 18,
    Heading6: 16,
    lineHeightH1: 50,
    lineHeightH2: 40,
    lineHeightH3: 32,
    lineHeightH4: 28,
    lineHeightH5: 24,
    lineHeightH6: 22,
    lineHeightBase: 22,
    lineHeightSub: 20,
    sizeBase: 16,
    sizeSub: 14,


};

export const dynamicStyle = (color) => {
    const style = StyleSheet.create({
        container: {
            backgroundColor: color.fill,
            padding: 20,
        },
        text: {
            color: color.stroke,
        },
        boldtext: {
            color: color.stroke,
            fontWeight: "700"
        },
        secText: {
            color: color.neutral7,
        },
        btnText: {
            color: color.fill,
        },
        align: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return style;
};

export default dynamicStyle;