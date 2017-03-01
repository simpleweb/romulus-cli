// @flow
import React from 'react';
import { View } from 'react-native';
import LayoutStyles from './styles';

type Props = {
  children: React$Element<any>,
  style?: any,
};

function Center(props: Props): React$Element<any> {
  const { children, style } = props;
  const Styles = LayoutStyles(props);

  return (
    <View style={[Styles.Center, style]}>
      {children}
    </View>
  );
}

const Layout: Object = {
  Center,
};

export default Layout;
