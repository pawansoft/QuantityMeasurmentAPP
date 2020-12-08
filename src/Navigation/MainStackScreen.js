import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LengthScreen from '../Component/LengthScreen';
import TemperatureScreen from '../Component/TemperatureScreen';
import VolumeScreen from '../Component/VolumeUnitScreen';

const Stack = createStackNavigator();

function MainStackScreen() {
    return (
        <NavigationContainer>
             <Stack.Navigator initialRouteName = "Length" screenOptions = {{headerShown : false}}>
                <Stack.Screen name = "Length" component = {LengthScreen}/>
                <Stack.Screen name = "Temperature" component = {TemperatureScreen}/>
                <Stack.Screen name = "Volume" component = {VolumeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackScreen;