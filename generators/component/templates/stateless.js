// @flow
import React from 'react';
import { View, Text } from 'react-native';
import <%= component %>Styles from './styles';

type Props = {
};

function <%= component %>(props: Props): React$Element<any> {
  const Styles: Object = <%= component %>Styles(props);

  return (
    <View>
      <Text><%= component %></Text>
    </View>
  );
}

export default <%= component %>;
