import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles.js';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase'

export class SplashScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Main',
    // }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={styles.mainContainer}>
            <Text>Demo</Text>
        </View>
      );
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged( user => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: user? 'MainContent' : 'Login'})],
            })
            this.props.navigation.dispatch(resetAction)
        })
    }
  }