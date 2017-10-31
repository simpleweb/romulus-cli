// @flow
import React from 'react';
import { Text as RNText } from 'react-native';
import TextStyles from './styles';

type Props = {
  children: React$Element<any>,
  style?: any,
};

function Text(props: Props): React$Element<any> {
  const { children, style, ...other } = props;
  const Styles = TextStyles(props);

  return (
    <RNText style={[ Styles.Default, style ]} {...other}>
      { children }
    </RNText>
  );
}

export default Text;
