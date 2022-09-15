import { EdgeInsets } from "react-native-safe-area-context";
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

export const Badge = styled.View<
  Props & {
    insets: EdgeInsets;
  }
>`
  width: 16px;
  height: 18px;
  background-color: ${(props) => envCheck({ env: props.env })};
  position: absolute;
  right: 8px;
  bottom: ${(props) => props.insets.bottom + 8}px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const EnvText = styled(Text)`
  font-size: 12px;
  font-family: "System";
  font-weight: bold;
  color: #fff;
`;
