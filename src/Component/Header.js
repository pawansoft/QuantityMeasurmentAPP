import React from 'react'
import {
    View,
    Text,
} from 'react-native';
import styles from '../Style/styles';

export const Header = () => {
    return (
        <View>
            <Text style={styles.header_font}>
                Welcome to Quantity Measurment
            </Text>
        </View>
    )
}
