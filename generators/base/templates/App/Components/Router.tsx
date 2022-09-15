import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from "@react-navigation/stack";
import React from "react";
import { useColorScheme } from "react-native";
import * as Screens from "<%= name %>/App/Screens";
import { useAuthentication } from "<%= name %>/App/Components/Authentication";

function Router() {
  const { isLoading, isLoggedIn } = useAuthentication();

  const mode = useColorScheme();
  const baseTheme = mode === "dark" ? DarkTheme : DefaultTheme;
  const theme = {
    ...baseTheme,
  };

  return (
    <NavigationContainer theme={theme}>
      <Root.Navigator
        screenOptions={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
        }}>
        {isLoading ? (
          <Root.Screen
            name="Launch"
            component={Screens.Launch}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            {isLoggedIn ? (
              <>
                <Root.Screen name="Main" component={Screens.Main} />
                <Root.Screen name="Styleguide" component={Screens.Styleguide} />
              </>
            ) : (
              <>
                <Root.Screen name="Login" component={Screens.Login} />
              </>
            )}
          </>
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParamList = {
  Launch: undefined;
  Login: undefined;
  Main: undefined;
  Styleguide: undefined;
};

const Root = createStackNavigator<RootStackParamList>();

const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default Router;
