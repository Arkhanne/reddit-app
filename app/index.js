import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import PostsList from './components/PostsList/PostsList';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <PostsList></PostsList>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen
});

export default class App extends Component {
  render () {
    return (
      <RootStack />
    );
  }
}
