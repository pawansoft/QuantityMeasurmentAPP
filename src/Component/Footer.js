import React from 'react'
import {
    View,
    Text,
} from 'react-native';
import Styles from '../Style/Styles';

export const Footer = () => {
    return (
        <View style={Styles.footer}>
            <Text style = {Styles.footer_text}>
                CONTACT >
            </Text>
            <Text style = {Styles.footer_text}>
                pk.soft29@gmail.com
            </Text>
        </View>
    )
}
