// @flow
import * as React from 'react';
import { Text } from 'react-native';
import { type NavigationState } from 'react-navigation';
import Layout from '<%= name %>/App/Components/Layout';
import Button from '<%= name %>/App/Components/Button';

import language from '<%= name %>/App/Language';

type Props = {
  navigation: NavigationState,
};

function Main({ navigation }: Props): React.Node {
  return (
    <Layout.Center>
      <Text>{ language.main }</Text>
      <Button onPress={() => navigation.navigate("Styleguide")}>
        { language.styleguide }
      </Button>
    </Layout.Center>
  );
}

export default Main;
