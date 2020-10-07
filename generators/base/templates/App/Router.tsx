import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "<%= name %>/App/Screens";

export type RootStackParamList = {
  Main: undefined;
  Styleguide: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Screens.Main} />
      <Stack.Screen name="Styleguide" component={Screens.Styleguide} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default Router;
