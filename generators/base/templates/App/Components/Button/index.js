// @flow
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Text } from "./styles";

type Props = {
  onPress: Function,
  children: React.Node,
};

const Button = ({ onPress, children }: Props): React.Node => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <Text>{children}</Text>
    </Container>
  </TouchableOpacity>
);

export default Button;
