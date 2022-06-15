import { View, StyleSheet } from 'react-native';
import { Button2_Small } from '../../components/CustomButton';
import { Back_Skip_Toolbar } from '../../components/Header';
import { H2Text, H5Text } from '../../components/CustomText';
import BitcoinCircleLogo from '../../assets/icons/filled/BitcoinCircle';
import { dynamicStyle } from '../../constants/styles';
import MainContent from '../../components/MainContent';
import store from '../../store';

const BTCOwnershipCheck = ({ navigation }) => {

    const color = store.theme.color;
    const primary = store.theme.primary;

    const dynamicStyles = dynamicStyle(color);
    const cstyle = StyleSheet.create({
        iconContainer: {
            backgroundColor: primary.green,
            alignItems: 'center',
            justifyContent: 'center',
            height: 90,
            width: 90,
        },
        header: {
            alignItems: 'flex-end',
            height: 30,
        },
        text: {
            textAlign: 'center',
            paddingTop: 40,
            paddingBottom: 10,
            fontWeight: '500'
        },
        secText: {
            textAlign: 'center',
            paddingBottom: 20,
        },
        viewContainer: {
            alignItems: 'center'
        },
        btn: {
            backgroundColor: primary.bitcoin_orange,
            marginBottom: 20
        },
        btnOutline: {
            borderWidth: 1,
            borderColor: primary.bitcoin_orange,
            marginBottom: 20,
            color: primary.bitcoin_orange,

        },
        pinContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        pinView: {
            height: 15,
            width: 15,
        },
    });

    return (
        <MainContent style={dynamicStyles.container}>
            <Back_Skip_Toolbar color={color.stroke} />
            <View style={[dynamicStyles.align, { flex: 1 }]}>
                <View style={cstyle.viewContainer}>
                    <BitcoinCircleLogo
                        color={store.theme.primary.bitcoin_orange}
                        height={120}
                        width={120}
                    />
                    <H2Text style={[dynamicStyles.text, cstyle.text]}>
                        Do you own bitcoin?
                    </H2Text>
                    <H5Text style={[dynamicStyles.secText, cstyle.secText]}>
                        To start using your wallet, you will need to fund it with some bitcoin.
                    </H5Text>
                </View>
            </View>

            <View>
                <Button2_Small
                    style={cstyle.btnOutline}
                    onPress={() => {
                        navigation.navigate("NoBTC");
                    }}
                >
                    <H5Text style={dynamicStyles.btnOutlineText}>No I don't</H5Text>
                </Button2_Small>
                <Button2_Small
                    style={cstyle.btn}
                    onPress={() => {
                        return 0;
                    }}
                >
                    <H5Text style={cstyle.btnText}>Yes I do</H5Text>
                </Button2_Small>
            </View>
        </MainContent>
    );
};

export default BTCOwnershipCheck;
