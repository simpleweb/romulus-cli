import React from "react";
import { TextProps } from "react-native";
import { Text as StyledText } from "./styles";

export interface Props extends TextProps {
  paragraph?: boolean;
}

function Text(props: Props) {
  return <StyledText {...props} testID="styled-text" />;
}

export default Text;
