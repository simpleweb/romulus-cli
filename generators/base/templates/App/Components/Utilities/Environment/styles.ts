import styled, { css } from "styled-components/native";
import { isIphoneX } from "react-native-iphone-x-helper";
import Text from "<%= name %>/App/Components/Text";
import { Props } from "./index";

const SAFE_AREA_BOTTOM = 34;

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

export const Badge = styled.View<Props>`
  width: 16px;
  height: 18px;
  background-color: ${props => envCheck({ env: props.env })};
  position: absolute;
  right: 8px;
  bottom: 8px;
  ${isIphoneX() &&
    css`
      bottom: ${SAFE_AREA_BOTTOM + 8}px;
    `};
  justify-content: center;
  align-items: center;
  border-radius: 4;
`;

export const EnvText = styled(Text)`
  font-size: 12;
  font-family: "System";
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;
