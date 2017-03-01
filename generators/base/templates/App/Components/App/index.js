// @flow
import React from 'react';
import { View } from 'react-native';
import { ENV } from '<%= name %>/App/Config';
import Environment from '<%= name %>/App/Components/Utilities/Environment';

type Props = {
  children?: React$Element<any>,
};

function App(props: Props): React$Element<any> {
  const { children } = props;

  return (
    <View style={{ flex: 1 }}>
      {children}
      <Environment env={ENV}/>
    </View>
  );
}

export default App;
