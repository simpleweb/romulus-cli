import styled from "styled-components/native";
import Text from "<%= name %>/App/Components/Text";

export const Container = styled.View`
  padding: 12px;
  background-color: ${props => props.theme.button.DEFAULT.background};
  border-radius: 3px;
`;

export const ButtonText = styled(Text)`
  color: ${props => props.theme.button.DEFAULT.text};
  text-align: center;
`;
