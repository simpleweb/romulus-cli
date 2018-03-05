// @flow
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Text } from './styles';

type Props = {
  onPress: Function,
  children: React.Node,
};

function Button(props: Props): React$Element<any> {
  const { onPress, children } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Text>{children}</Text>
      </Container>
    </TouchableOpacity>
  );
}

export default Button;
