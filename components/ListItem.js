import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from './CustomButton';
import { CaretRightIcon } from '@bitcoin-design/bitcoin-icons-react/outline';

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row'
    },
    container1: {
        flex: 4,
        alignItems: 'flex-start',
        justifyContent: 'center'

    },
    container2: {
        flex: 1,
        alignItems: 'flex-end'
    }
});
const ListItem = ({ children, style, color, onPress }) => (
    <View style={[styles.flexContainer, style]}>
        <View style={styles.container1}>
            {children}
        </View>
        <View style={styles.container2}>
            <IconButton onPress={() => onPress()}>
                <CaretRightIcon color={color.stroke} />
            </IconButton>
        </View>
    </View>
)
export default ListItem;