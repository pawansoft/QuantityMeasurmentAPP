import React, { Component } from 'react';
import {
    ScrollView,
    View,
} from 'react-native';

import { UnitOption } from './UnitOption';
import VolumeUnitForm from './VolumeUnitForm';

export default class VolumeUnitScreen extends Component {
    render() {
        return (
            <View>
                <View>
                    <UnitOption />
                </View>
                <ScrollView>
                    <View>
                        <VolumeUnitForm />
                    </View>
                </ScrollView>
            </View>
        )
    }
}