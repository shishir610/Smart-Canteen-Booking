import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SignUp from './components/SignUp';

const instructions = Platform.select({
  android: '',
});

export default class App extends Component {
  getSignUpHandler = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>'Welcome to Smart Canteen Booking!'</Text>
        <Text style={styles.instructions}>'To get started, click on Get Started'</Text>
        <Text> </Text>
        <SignUp onSignUp={this.getSignUpHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
