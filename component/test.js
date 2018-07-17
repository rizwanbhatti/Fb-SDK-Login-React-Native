import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import { SocialIcon } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';





export default class Test extends Component {
   

    render() {
        return (
           <View>
              <Icon name="facebook" size={30} color="#900" />
              <SocialIcon
                                        title='Countine with Facebook'
                                        button
                                        type='facebook'
                                    />
               <Text>
                   hello world</Text>
               </View>
        )
    }
}



const styles = StyleSheet.create({
   


})
