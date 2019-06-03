import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { LoginScreen } from './LoginScreen';
import { MainScreen } from './MainScreen';
import { SignUpScreen } from './SignUpScreen';
import { SplashScreen } from './SplashScreen';

const MainNavigator = createStackNavigator({
  Login: LoginScreen,
  MainContent: MainScreen,
  SignUp: SignUpScreen,
  Splash: SplashScreen,
},{
    initialRouteName:'Splash'
});

export const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>
  }
}
