// @flow
import React from 'react';
import { View, ScrollView } from 'react-native';
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

function Scroll(props: Props): React$Element<any> {
  const { children, style } = props;
  const Styles = LayoutStyles(props);

  return (
    <ScrollView style={[Styles.Scroll, style]}>
      {children}
    </ScrollView>
  );
}

function Padded(props: Props): React$Element<any> {
  const { children, style } = props;
  const Styles = LayoutStyles(props);

  return (
    <View style={[Styles.Padded, style]}>
      {children}
    </View>
  );
}

const Layout: Object = {
  Center,
  Scroll,
  Padded,
};

export default Layout;
