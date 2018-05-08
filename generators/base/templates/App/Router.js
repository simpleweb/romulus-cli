// @flow
import React from 'react';
import { Linking } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import Scenes from '<%= name %>/App/Scenes';

const Root = createStackNavigator({
  Launch: {
    screen: Scenes.Launch,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: Scenes.Main,
  },
  Styleguide: {
    screen: Scenes.Styleguide,
  },
});

const RootNavigator = createSwitchNavigator(
  {
    Launch: Scenes.Launch,
    Main: Scenes.Main,
  },
  {
    initialRouteName: 'Launch',
  }
);

export default RootNavigator;
