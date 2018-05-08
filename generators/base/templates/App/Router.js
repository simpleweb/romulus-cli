// @flow
import React from 'react';
import { createStackNavigator } from "react-navigation";
import Scenes from '<%= name %>/App/Scenes';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Scenes.Main,
  },
  Styleguide: {
    screen: Scenes.Styleguide,
  },
},{
  initialRouteName: 'Main',
});

export default RootNavigator;
