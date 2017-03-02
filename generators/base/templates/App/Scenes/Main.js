// @flow
import React from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Layout from '<%= name %>/App/Components/Layout';
import Button from '<%= name %>/App/Components/Button';

function Main(): React$Element<any> {
  return (
    <Layout.Center>
      <Text>Main</Text>
      <Button onPress={Actions.styleguide}>View Styleguide</Button>
    </Layout.Center>
  );
}

export default Main;
