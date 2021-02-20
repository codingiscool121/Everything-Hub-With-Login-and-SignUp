import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Login from './screens/login'
import Home from './screens/home'
import SignUp from './screens/signup'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  Login:{screen: Login},
  Home: {screen: Home},
  SignUp:{screen:SignUp}
})

const AppContainer =  createAppContainer(switchNavigator);
