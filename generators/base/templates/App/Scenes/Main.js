// @flow
import * as React from 'react';
import { Text } from 'react-native';
import { type NavigationState } from 'react-navigation';
import Layout from '<%= name %>/App/Components/Layout';
import Button from '<%= name %>/App/Components/Button';

type Props = {
  navigation: NavigationState,
};

function Main({ navigation }: Props): React.Node {
  return (
    <Layout.Center>
      <Text>Main</Text>
      <Button onPress={() => navigation.navigate("Styleguide")}>
        Styleguide
      </Button>
    </Layout.Center>
  );
}

export default Main;
