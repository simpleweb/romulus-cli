import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Container, ButtonText } from "./styles";

type Props = {
  onPress: Function,
  children: React.Node,
};

const Button = ({ onPress, children }: Props): React.Node => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  </TouchableOpacity>
);

export default Button;
