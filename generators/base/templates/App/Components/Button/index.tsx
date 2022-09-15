import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, ButtonText } from "./styles";

interface Props {
  children: string;
  onPress: () => any;
}

function Button({ children, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} testID="touchable">
      <Container>
        <ButtonText>{children}</ButtonText>
      </Container>
    </TouchableOpacity>
  );
}
export default Button;
