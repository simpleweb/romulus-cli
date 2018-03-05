// @flow
import * as React from 'react';
import { Badge, Text } from './styles';

type Props = {
  env: 'development' | 'staging' | 'edge' | 'production' | 'live',
};

function Environment(props: Props): React.Node {
  const { env } = props;

  if (env === 'production') {
    return null;
  }

  return (
    <Badge>
      <Text>{env.charAt(0).toUpperCase()}</Text>
    </Badge>
  );
}

export default Environment;
