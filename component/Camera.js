import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity,StatusBar,Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';


export default class Camera extends Component {
    constructor(props) {
        super()
        this.state = {
           
        }
    }

    Image(){
        console.log('image')
    
        var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    
    ImagePicker.launchCamera(options, (response)  => {
      console.log('Response = ', response);
    });
        // ImagePicker.launchImageLibrary(options, (response)  => {
        //     console.log('Response = ', response);
        // });
    }
    Images(){
        console.log('image')
    
        var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    
        ImagePicker.launchImageLibrary(options, (response)  => {
            console.log('Response = ', response);
        });
    }



    render() {
        return (
            <View>
               

              
                <Text>Image Picker</Text>
                <TouchableOpacity
                
                onPress = {this.Image.bind(this)}
                >
                   <Text>Cameraz</Text> 
                   
                </TouchableOpacity>
                 <TouchableOpacity
                
                onPress = {this.Images.bind(this)}
                >
                   <Text>Gallery</Text> 
                   
                </TouchableOpacity>
            </View>
           
                  
        )
    }
}