import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Button,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from '../Style/styles'

export default class UnitOption extends Component{
    render(){
        return(
            <View style = {styles.button_container}>
                    <View style = {styles.button}>
                        <TouchableOpacity>
                            <Image style = {styles.unit_option_image} source = {require('../assets/length.png')}/>
                            <Text style = {styles.unit_option_font}>Length</Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.button}>
                        <TouchableOpacity>
                            <Image style = {styles.unit_option_image} source = {require('../assets/Temp.png')}/>
                            <Text style = {styles.unit_option_font}>Temperature</Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.button}>
                        <TouchableOpacity>
                            <Image style = {styles.unit_option_image}  source = {require('../assets/Volume.jpg')}/>
                            <Text style = {styles.unit_option_font}>Volume</Text>
                        </TouchableOpacity>
                    </View>
              </View>         
        )
    }
}
