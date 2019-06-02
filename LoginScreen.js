import React from 'react';
import {TextInput, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation'
import {styles} from './styles.js';

export class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'login',
    }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <ImageBackground style={styles.mainContainer} source={require('./assets/Plumbing.jpg')}>
            <TextInput style={styles.textInput} placeholder="Username"></TextInput>
            <TextInput style={styles.textInput} placeholder="Password"/>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('MainContent')}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </ImageBackground>
      );
    }
  }