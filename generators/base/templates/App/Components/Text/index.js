// @flow
import React from 'react';
import { Text as StyledText } from './styles';

type Props = {
  children?: string,
};

function Text(props: Props): React$Element<any> {
  return <StyledText {...props}/>;
}

export default Text;
