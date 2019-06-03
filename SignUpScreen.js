import React from 'react';
import {TextInput, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import {styles} from './styles.js';

export class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
    }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.signUpTextInput} placeholder="First Name"></TextInput>
            <TextInput style={styles.signUpTextInput} placeholder="Last Name"/>
            <TextInput 
            autoCapitalize="none" 
            style={styles.signUpTextInput} 
            keyboardType="email-address"
            placeholder="Email"/>
            <TextInput 
            autoCapitalize="none" 
            style={styles.signUpTextInput} 
            secureTextEntry={true}
            placeholder="Password"/>
            <TouchableOpacity style={styles.signUpButton} onPress={() => this.props.navigation.navigate('MainContent')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }