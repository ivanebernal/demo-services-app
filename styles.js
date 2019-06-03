import {StyleSheet, Dimensions} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      // width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
    },
    textInput: {
      margin: 10,
      marginEnd: 20,
      marginStart: 20,
      padding: 10,
      height:45,
      width: '60%',
      borderWidth: .5,
      backgroundColor: '#F5FCFF',
    },
    signUpTextInput: {
      margin: 10,
      marginEnd: 20,
      marginStart: 20,
      padding: 10,
      height:45,
      width: '80%',
      borderWidth: .5,
      backgroundColor: '#F5FCFF',
    },
    title: {
        color: '#222222',
        fontSize: 16,
    },
    button: {
      width: '60%',
      height:45,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      marginEnd: 20,
      marginStart: 20,
      backgroundColor: '#2b6aff',
    },
    textButton: {
      width: '60%',
      height:45,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      marginEnd: 20,
      marginStart: 20,
    },
    signUpButton: {
      width: '80%',
      height:45,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      marginEnd: 20,
      marginStart: 20,
      backgroundColor: '#2b6aff',
    },
    buttonText: {
      color: '#FFFFFF',
    }
  });