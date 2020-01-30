import styled from "styled-components/native";
import Text from "<%= name %>/App/Components/Text";
import { Props } from "./index";

const envCheck = ({ env }: Props) => {
  switch (env) {
    case "staging":
      return "orange";
    case "edge":
      return "purple";
    case "production":
      return "red";
    default:
      return "green";
  }
};

interface InsetProps {
  insets: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export const Badge = styled.View<Props & InsetProps>`
  width: 16px;
  height: 18px;
  background-color: ${props => envCheck({ env: props.env })};
  position: absolute;
  right: 8px;
  bottom: ${props => props.insets.bottom + 8}px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const EnvText = styled(Text)`
  font-size: 12px;
  font-family: "System";
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;
