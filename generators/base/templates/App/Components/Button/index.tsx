import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, ButtonText } from "./styles";

interface Props {
  onPress: () => any;
}

const Button: React.FC<Props> = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  </TouchableOpacity>
);

export default Button;
