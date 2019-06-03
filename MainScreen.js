import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.js';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';

export class MainScreen extends React.Component {
  state={currentUser: null}
    static navigationOptions = {
        title: 'Main',
    }
    componentDidMount() {
      const {currentUser} = firebase.auth()
      this.setState({currentUser})
    }
    render() {
        const {currentUser} = this.state
      return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>You are logged in as {currentUser && currentUser.email} </Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={()=>this.handleLogOut()}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
      );
    }
    handleLogOut= ()=> {
      firebase.auth().signOut()
      .then(()=>this.goToLogin())
      .catch(error=>{this.goToLogin()})
    }
    goToLogin = () => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Login'})],
      })
      this.props.navigation.dispatch(resetAction)
    }
  }