import React from "react";
import {
  View,
  CenterVerticallyView,
  FullView,
  CenterView,
  ScrollView,
  PaddedView,
} from "./styles";

export interface Full {
  align?: "top" | "bottom";
}

interface LayoutComposition {
  Full: React.FC<Full>;
  Center: React.FC;
  Scroll: React.FC;
  Padded: React.FC;
  CenterVertically: React.FC;
}

const Layout: React.FC & LayoutComposition = ({ children, ...rest }) => (
  <View {...rest}>{children}</View>
);

Layout.Full = ({ children, ...rest }) => (
  <FullView {...rest}>{children}</FullView>
);
Layout.Full.displayName = "Layout.Full";

Layout.Center = ({ children, ...rest }) => (
  <CenterView {...rest}>{children}</CenterView>
);
Layout.Center.displayName = "Layout.Center";

Layout.Scroll = ({ children, ...rest }) => (
  <ScrollView {...rest}>{children}</ScrollView>
);
Layout.Scroll.displayName = "Layout.Scroll";

Layout.Padded = ({ children, ...rest }) => (
  <PaddedView {...rest}>{children}</PaddedView>
);
Layout.Padded.displayName = "Layout.Padded";

Layout.CenterVertically = ({ children, ...rest }) => (
  <CenterVerticallyView {...rest}>{children}</CenterVerticallyView>
);
Layout.CenterVertically.displayName = "Layout.CenterVertically";

export default Layout;
