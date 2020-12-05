import React, { Component } from 'react';
import {
   StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { Header } from './src/Component/Header';
import UnitOption from './src/Component/UnitOption';
import styles from './src/Style/styles';

export default class App extends Component{
  render(){
    return (
      <View style = {styles.main_container}>
        <View style = {styles.header_container}>
          <Header/>
        </View>
        <View>
          <UnitOption/>
        </View>
      </View>  
    )
  }
  
};


