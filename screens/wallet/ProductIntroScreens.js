import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button, { Button2_Small } from '../../components/CustomButton';
import { Skip_Header } from '../../components/Header';
import { H3Text, H5Text, H2Text } from '../../components/CustomText';
import { CircularContainer } from '../../components/Container';
import WalletIcon from '../../assets/icons/filled/Wallet';
import CloudIcon from '../../assets/icons/filled/Cloud';
import SafeIcon from '../../assets/icons/filled/Safe';
import { dynamicStyle } from '../../constants/styles';
import { PinBubble } from '../../components/Pin';
import MainContent from '../../components/MainContent';
import { Store } from '../../store';

const ProductIntroScreens = ({ navigation }) => {

  const store = new Store()

  const color = store.theme.color;
  const primary = store.theme.primary;
  const [progress, setprogress] = useState(0);

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
      fontWeight: '500',
      paddingTop: 40,
      paddingBottom: 30,
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
      margin: 20,
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
      <Skip_Header color={color.stroke} />
      <View style={[dynamicStyles.align, { flex: 1 }]}>

        {progress === 0 ?
          <View style={cstyle.viewContainer}>
            <CircularContainer style={cstyle.iconContainer}>
              <WalletIcon color={color.fill} height={70} width={70} />
            </CircularContainer>
            <H2Text style={[dynamicStyles.text, cstyle.text]}>
              Manage your Bitcoin
            </H2Text>
            <H5Text style={[dynamicStyles.secText, cstyle.secText]}>
              Take full control with this completely self-custodied wallet.
            </H5Text>
            <H5Text style={[dynamicStyles.secText, cstyle.secText]}>
              Your keys, your coins.
            </H5Text>
          </View> : null
        }
        {progress === 1 ?
          <View style={cstyle.viewContainer}>
            <CircularContainer style={cstyle.iconContainer}>
              <CloudIcon color={color.fill} height={70} width={70} />
            </CircularContainer>
            <H2Text style={[dynamicStyles.text, cstyle.text]}>
              Convenient backups with cloud storage
            </H2Text>
            <H5Text style={[dynamicStyles.secText, cstyle.secText]}>
              Your recovery phrase will be encrypted and backed up to your cloud
              provider, only you will be able to access it.
            </H5Text>
          </View> : null
        }
        {progress === 2 ?
          <View style={cstyle.viewContainer}>
            <CircularContainer style={cstyle.iconContainer}>
              <SafeIcon color={color.fill} height={70} width={70} />
            </CircularContainer>
            <H2Text style={[dynamicStyles.text, cstyle.text]}>
              Keep your wallet and bitcoin secure
            </H2Text>
            <H5Text style={[dynamicStyles.secText, cstyle.secText]}>
              Enable face detection or set a pin for extra security.
            </H5Text>
          </View> : null
        }
      </View>

      <View>
        <View style={cstyle.pinContainer}>
          <PinBubble
            style={cstyle.pinView}
            stroke={primary.bitcoin_orange}
            secondary={color.neutral4}
            pin_num={progress === 0 ? '1' : null}
            border={color.fill}
          />
          <PinBubble
            style={cstyle.pinView}
            stroke={primary.bitcoin_orange}
            secondary={color.neutral4}
            pin_num={progress === 1 ? '1' : null}
            border={color.fill}
          />
          <PinBubble
            style={cstyle.pinView}
            stroke={primary.bitcoin_orange}
            secondary={color.neutral4}
            pin_num={progress === 2 ? '1' : null}
            border={color.fill}
          />
        </View>
        {progress === 2 ?
          <Button2_Small
            style={cstyle.btn}
            onPress={() => {
              navigation.navigate("BTCOwnershipCheck");
            }}
          >
            <H3Text style={dynamicStyles.btnText}>Continue</H3Text>
          </Button2_Small> :
          <Button2_Small
            style={cstyle.btn}
            onPress={() => {
              if (progress < 2) {
                setprogress(progress + 1);
              }
              else
                setprogress(0);
            }}
          >
            <H3Text style={dynamicStyles.btnText}>Next</H3Text>
          </Button2_Small>
        }
      </View>
    </MainContent>
  );
};

export default ProductIntroScreens;
