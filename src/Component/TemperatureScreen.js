import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import Styles from '../Style/Styles';
import { Footer } from './Footer';
import { Header } from './Header';
import UnitConversionBlock from './UnitConversionComponent';
import UnitOPtion from './UnitOption';

export default class TemperatureScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Header/>
                <ScrollView style = {Styles.scroll_view}>
                    <UnitOPtion
                        navigation={this.props.navigation}
                        type='Temperature' />
                    <UnitConversionBlock type='Temperature' />
                </ScrollView>
            </View>
        )
    }
}