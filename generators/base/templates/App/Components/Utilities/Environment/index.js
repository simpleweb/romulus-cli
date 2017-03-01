// @flow
import React from 'react';
import { Text, View } from 'react-native';
import EnvironmentStyles from './styles';

type Props = {
  env: 'development' | 'staging' | 'edge' | 'production' | 'live',
};

function Environment(props: Props): React$Element<any>|null {
  const { env } = props;
  const Styles: Object = EnvironmentStyles(props);

  if (env === 'production') {
    return null;
  }

  return (
    <View style={Styles.Environment}>
      <Text style={Styles.Text}>{env.charAt(0).toUpperCase()}</Text>
    </View>
  );
}

export default Environment;
