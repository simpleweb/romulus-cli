// @flow
import React from 'react';
import { Text } from 'react-native';
import Layout from '<%= name %>/App/Components/Layout';
import Button from '<%= name %>/App/Components/Button';

function Styleguide(): React$Element<any> {
  return (
    <Layout.Scroll header>
      <Layout.Padded>
        <Text>Styleguide</Text>
        <Button onPress={() => alert('Button pressed')}>Button</Button>
      </Layout.Padded>
    </Layout.Scroll>
  );
}

export default Styleguide;
