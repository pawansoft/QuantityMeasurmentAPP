import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Header } from './src/Component/Header';
import HomeScree from './src/Component/HomeScreen';

import styles from './src/Style/styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.header_container}>
          <Header />
        </View>
        <View>
          <HomeScree />
        </View>
      </View>
    )
  }

};


