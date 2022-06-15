import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button, { Button2 } from '../../components/CustomButton'
import { H4Text, H3Text, H6Text, H5Text } from '../../components/CustomText';
import BitcoinCircleLogo from '../../assets/icons/filled/BitcoinCircle';
import MainContent from '../../components/MainContent';
import { dynamicStyle } from '../../constants/styles';
import store from '../../store';
import { Back_Header } from '../../components/Header';

const LoginArea = ({ navigation }) => {

    const goToEnterPIN = () => {
        navigation.navigate("");
    }

    const goToResetWallet = () => {
        navigation.navigate("");
    }

    const color = store.theme.color;
    const dynamicStyles = dynamicStyle(color);
    const styles = StyleSheet.create({
        container1: {
            flex: 6,
        },
        container2: {
            flex: 1,
        },
        btn: {
            backgroundColor: store.theme.primary.bitcoin_orange,
            marginVertical: 30,
        },
        text: {
            fontSize: 40,
            paddingTop: 40,
            lineHeight: 40,
        },
        secText: {
            paddingVertical: 30,
            fontSize: 24,
        },
        restoreTxt: {
            color: store.theme.primary.bitcoin_orange,
            lineHeight: 30,
            fontSize: 21,
        },
        footerTxt: {
            lineHeight: 24,
            fontSize: 16,
        },
    })
    return (
        <MainContent style={dynamicStyles.container}>
            <Back_Header color={color.stroke} />
            <View style={[dynamicStyles.align, styles.container1]}>
                <BitcoinCircleLogo
                    color={store.theme.primary.bitcoin_orange}
                    height={120}
                    width={120}
                />
                <H6Text style={[dynamicStyles.text, styles.text]}>Etta Wallet</H6Text>
                <H5Text style={[dynamicStyles.secText, styles.secText]}>
                    Welcome back.
                </H5Text>
                <Button2 onPress={goToEnterPIN} style={styles.btn}>
                    <H4Text style={dynamicStyles.btnText}>Log in</H4Text>
                </Button2>

            </View>
            <View style={[dynamicStyles.align, styles.container2]}>
                <Button onPress={goToResetWallet}>
                    <H5Text style={styles.restoreTxt}>Reset wallet</H5Text>
                </Button>
                <H4Text style={[dynamicStyles.secText, styles.footerTxt]}>
                    Your wallet, your coins
                </H4Text>
                <H4Text style={[dynamicStyles.secText, styles.footerTxt]}>
                    100% open-source & open-design
                </H4Text>
            </View>
        </MainContent>
    );
}

export default LoginArea;