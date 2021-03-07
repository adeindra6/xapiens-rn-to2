/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ProfileScreen from './Screen/ProfileScreen';

class WelcomeScreen extends React.Component {
  render() {
    return(
      <View style={ styles.body }>
        <Image source={ require('./Image/xapiens.jpeg') } />
        <Text style={ styles.title }>{'\n'} Welcome to Xapiens Profile! Please {'\n'}</Text>
        <Button
          title="Login"
          color="#39ea09"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Text style={ styles.title }>or</Text>
        <Button
          title="Register"
          color="#aa0ed0"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Welcome',
  },
);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0025cb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;