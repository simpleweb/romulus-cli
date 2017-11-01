// @flow
import React from 'react';

import { FullView, CenterView, ScrollView, PaddedView } from './styles';

type Props = {
  children: React$Element<any>,
  style?: any,
};

function Full(props: Props): React$Element<any> {
  const { children, style } = props;

  return (
    <FullView style={ style }>
      {children}
    </FullView>
  );
}

function Center(props: Props): React$Element<any> {
  const { children, style } = props;

  return (
    <CenterView style={ style }>
      {children}
    </CenterView>
  );
}

function Scroll(props: Props): React$Element<any> {
  const { children, style } = props;

  return (
    <ScrollView style={ style }>
      {children}
    </ScrollView>
  );
}

function Padded(props: Props): React$Element<any> {
  const { children, style } = props;

  return (
    <PaddedView style={ style }>
      {children}
    </PaddedView>
  );
}

const Layout: Object = {
  Full,
  Center,
  Scroll,
  Padded,
};

export default Layout;
