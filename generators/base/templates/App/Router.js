// @flow
import { StackNavigator as createStackNavigator } from "react-navigation";
import Scenes from '<%= name %>/App/Scenes';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Scenes.Main,
    path: 'main',
  },
  Styleguide: {
    screen: Scenes.Styleguide,
    path: 'styleguide',
  },
},{
  initialRouteName: 'Main',
});

export default RootNavigator;
