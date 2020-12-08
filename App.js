import React, { Component } from 'react';
import { View } from 'react-native';
import { Footer } from './src/Component/Footer';
import { Header } from './src/Component/Header';
import LengthScreen from './src/Component/LengthScreen';
import MainStackScreen from './src/Navigation/MainStackScreen';

export default class App extends Component {
  render() {
    return (
      <>
          <MainStackScreen/>
          <View>
            <Footer/>
          </View>
      </>
        
          
    )
  }

};


