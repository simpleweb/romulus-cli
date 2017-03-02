// @flow
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import ButtonStyles from './styles';

type Props = {
  onPress: Function,
  children?: React$Element<any>,
};

function Button(props: Props): React$Element<any> {
  const { onPress, children } = props;
  const Styles = ButtonStyles(props);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.Button}>
        <Text style={Styles.Text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
