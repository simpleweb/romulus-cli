// @flow
import * as React from 'react';
import { Text as StyledText } from './styles';

type Props = {
  children: React.Node,
};

function Text(props: Props): React.Node {
  return <StyledText {...props}/>;
}

export default Text;
