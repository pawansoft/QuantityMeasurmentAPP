import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ButtonStyles from '../Style/ButtonStyles';

export default class UnitOPtion extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={ButtonStyles.button_container}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={
                            (this.props.type == 'Length')
                                ? [ButtonStyles.length_Style, ButtonStyles.normal_Style]
                                : ButtonStyles.button_Style
                        }
                        onPress={() => this.props.navigation.navigate('Length')}>
                        <Image
                            source={
                                (this.props.type == 'Length')
                                    ? require('../assets/scaleActive.png')
                                    : require('../assets/scale.png')
                            }
                            style={ButtonStyles.image_Style}
                        />
                        <Text style={
                            (this.props.type == 'Length') ? ButtonStyles.Length_Text_Style : null}>Length</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={
                            (this.props.type == 'Temperature')
                                ? [ButtonStyles.temperature_Style, ButtonStyles.normal_Style]
                                : ButtonStyles.button_Style
                        }
                        onPress={() => this.props.navigation.navigate('Temperature')}>
                        <Image
                            source={
                                (this.props.type == 'Temperature')
                                    ? require('../assets/tempActive.png')
                                    : require('../assets/temp.png')
                            }
                            style={ButtonStyles.image_Style}
                        />
                        <Text style={(this.props.type == 'Temperature') ? ButtonStyles.Temperature_Text_Style : null}>Temperature</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={
                            (this.props.type == 'Volume')
                                ? [ButtonStyles.volume_Style, ButtonStyles.normal_Style]
                                : ButtonStyles.button_Style
                        }
                        onPress={() => this.props.navigation.navigate('Volume')}>
                        <Image
                            source={
                                (this.props.type == 'Volume')
                                    ? require('../assets/volumeActive.png')
                                    : require('../assets/volume.png')
                            }
                            style={ButtonStyles.image_Style}
                        />
                        <Text style={(this.props.type == 'Volume') ? ButtonStyles.Volume_Text_Style : null}>Volume</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}