import React from 'react';
import {
    View
} from 'react-native'
import TempForm from './TempForm';
import { UnitOption } from './UnitOption';

const TempScreen = () => {
    return (
        <View>
            <View>
                <UnitOption />
            </View>
            <View>
                <TempForm />
            </View>
        </View>

    )
}

export default TempScreen;