import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Styles from '../Style/Styles';
import { Footer } from './Footer';
import { Header } from './Header';
import UnitConversionBlock from './UnitConversionComponent';
import UnitOPtion from './UnitOption';


export default class VolumeScreen extends Component {
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
                        type='Volume'
                    />
                    <UnitConversionBlock type='Volume' />
                </ScrollView>
                
            </View>
        )
    }
}