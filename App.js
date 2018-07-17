/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FbLogin from './component/facebook';
import Map from './component/googlemap';
import Camera from './component/Camera';
import Login from './component/login';
import Test from './component/test';



export default class App extends Component {
  render() {
    return (
      <View >
        <Test/>
       {/* <Login/>
       <FbLogin/>
       <Map/>
       <Camera/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
