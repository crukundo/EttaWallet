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

export const fontSize = {
    sizeXS: 10,
    sizeS: 12,
    sizeSub: 14,
    sizeBase: 16,
    sizeM: 18,
    sizeL: 21,
    sizeXXL: 40,
    sizeXXXL: 80,
    lineHeightXS: 14,
    lineHeightS: 16,
    lineHeightSub: 18,
    lineHeightBase: 22,
    lineHeightM: 22,
    lineHeightL: 24,
    lineHeightXXL: 60,
    lineHeightXXXL: 100,
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