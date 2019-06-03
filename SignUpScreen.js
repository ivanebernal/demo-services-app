import React from 'react';
import {TextInput, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import {styles} from './styles.js';
import firebase from 'react-native-firebase';

export class SignUpScreen extends React.Component {
    state = {email: '', password: '', errorMessage: null}
    static navigationOptions = {
        title: 'Register',
    }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={styles.mainContainer}>
            {this.state.errorMessage && <Text style={{color: 'red'}}>
                {this.state.errorMessage}
            </Text>}
            <TextInput 
                autoCapitalize="none" 
                style={styles.signUpTextInput} 
                keyboardType="email-address"
                placeholder="Email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}/>
            <TextInput 
                autoCapitalize="none" 
                style={styles.signUpTextInput} 
                secureTextEntry
                placeholder="Password"
                onChangeText={password => this.setState({password})}
                value={this.state.password}/>
            <TouchableOpacity style={styles.signUpButton} onPress={this.handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
      );
    }
    handleRegister = () => {
        this.setState({errorMessage: null});
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=> this.props.navigation.navigate('MainContent'))
        .catch((error) => this.setState({errorMessage: error.message}))
    }
  }