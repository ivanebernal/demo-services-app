import React from 'react';
import {TextInput, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {styles} from './styles.js';
import firebase from 'react-native-firebase';

export class LoginScreen extends React.Component {
    state = {email: '', password: '', errorMessage: null}
    static navigationOptions = {
        title: 'Log In',
    }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <ImageBackground style={styles.mainContainer} source={require('./assets/Plumbing.jpg')}>
            {this.state.errorMessage && <Text style={{color:'red'}}>
              {this.state.errorMessage}
            </Text>}
            <TextInput
              textContentType='emailAddress'
              autoCapitalize='none'
              style={styles.textInput} 
              placeholder="Email"
              onChangeText={email=>this.setState({email})}
              value={this.state.email}/>
            <TextInput 
              autoCapitalize='none'
              secureTextEntry
              style={styles.textInput} 
              placeholder="Password"
              onChangeText={password=>this.setState({password})}
              value={this.state.password}/>
            <TouchableOpacity style={styles.button} onPress={this.handleLogIn}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textButton} onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text>Register</Text>
            </TouchableOpacity>
        </ImageBackground>
      );
    }
    handleLogIn = () => {
      firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
          const resetAction = StackActions.reset(
            {
              index: 0,
              actions: [NavigationActions.navigate({routeName:'MainContent'})],
            });
          this.props.navigation.dispatch(resetAction);
        })
        .catch(error=>{this.setState({errorMessage: error.message})})
    }
  }