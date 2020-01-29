import * as React from "react";
import {
  View,
  CenterVerticallyView,
  FullView,
  CenterView,
  ScrollView,
  PaddedView,
} from "./styles";

type Props = {
  children: React.Node,
  style?: any,
};

type FullProps = Props & {
  align?: "top" | "bottom",
  header?: boolean,
  footer?: boolean,
};

type ScrollProps = Props & {
  header?: boolean,
  footer?: boolean,
};

type CenterProps = Props & {};

type CenterVerticallyProps = Props & {};

type PaddedProps = Props & {};

const Layout = ({ children, ...rest }: Props): React.Node => (
  <View {...rest}>{children}</View>
);

Layout.Full = ({ children, ...rest }: FullProps): React.Node => (
  <FullView {...rest}>{children}</FullView>
);
Layout.Full.displayName = "Layout.Full";

Layout.Center = ({ children, ...rest }: CenterProps): React.Node => (
  <CenterView {...rest}>{children}</CenterView>
);
Layout.Center.displayName = "Layout.Center";

Layout.Scroll = ({ children, ...rest }: ScrollProps): React.Node => (
  <ScrollView {...rest}>{children}</ScrollView>
);
Layout.Scroll.displayName = "Layout.Scroll";

Layout.Padded = ({ children, ...rest }: PaddedProps): React.Node => (
  <PaddedView {...rest}>{children}</PaddedView>
);
Layout.Padded.displayName = "Layout.Padded";

Layout.CenterVertically = ({
  children,
  ...rest
}: CenterVerticallyProps): React.Node => (
  <CenterVerticallyView {...rest}>{children}</CenterVerticallyView>
);
Layout.CenterVertically.displayName = "Layout.CenterVertically";

export default Layout;
