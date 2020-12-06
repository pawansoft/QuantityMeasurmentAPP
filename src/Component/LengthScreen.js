import React, { Component } from 'react';
import {
    View
} from 'react-native';
import LengthUnitForm from './LengthUnitForm';
import { UnitOption } from './UnitOption';

export default class LengthScreen extends Component {
    render() {
        return (
            <View>
                <View>
                    <UnitOption />
                </View>
                <View>
                    <LengthUnitForm />
                </View>
            </View>
        )
    }
}