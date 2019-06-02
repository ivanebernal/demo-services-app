import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.js';

export class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Main',
    }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>You are logged in</Text>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }