import React from 'react'
import {
    View,
    Text,
} from 'react-native';
import Styles from '../Style/Styles';

export const Footer = () => {
    return (
        <View style={Styles.footer}>
            <Text style={Styles.footBar}>
                Thank You For Using This App
            </Text>
        </View>
    )
}
