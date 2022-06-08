import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button, { Button2 } from '../../components/CustomButton'
import { H4Text, H3Text, H6Text } from '../../components/CustomText';
import MainContent from '../../components/MainContent';
import { dynamicStyle } from '../../constants/styles';
import { Store } from '../../store';

const WalletIntro = () => {

    const store = new Store()

    const createWalletHandler = () => {
        return 0;
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
            <View style={[dynamicStyles.align, styles.container1]}>
                <H6Text style={[dynamicStyles.text, styles.text]}>Etta Wallet</H6Text>
                <H3Text style={[dynamicStyles.secText, styles.secText]}>
                    A simple bitcoin wallet for your enjoyment.
                </H3Text>
                <Button2 onPress={createWalletHandler} style={styles.btn}>
                    <H3Text style={dynamicStyles.btnText}>Create a new wallet</H3Text>
                </Button2>
                <Button onPress={createWalletHandler}>
                    <H4Text style={styles.restoreTxt}>Restore existing wallet</H4Text>
                </Button>
            </View>
            <View style={[dynamicStyles.align, styles.container2]}>
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

export default WalletIntro;