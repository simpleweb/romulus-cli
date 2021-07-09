import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useColorScheme } from "react-native";
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
  const mode = useColorScheme();
  const baseTheme = mode === "dark" ? DarkTheme : DefaultTheme;
  const theme = {
    ...baseTheme,
  };

  return (
    <NavigationContainer theme={theme}>
      <RootStack />
    </NavigationContainer>
  );
}

export default Router;
