import React from 'react'
import {
    View,
    Text,
} from 'react-native';
import Styles from '../Style/Styles';

export const Header = () => {
    return (
        <View style = {Styles.heading}>
            <Text style={Styles.headBar}>
                Welcome to Quantity Measurment
            </Text>
        </View>
    )
}
