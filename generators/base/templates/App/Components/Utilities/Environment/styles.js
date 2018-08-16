// @flow
import styled, { css } from "styled-components";
import { isIphoneX } from "react-native-iphone-x-helper";
import variables from "<%= name %>/App/Styles/Variables";
import RNText from "<%= name %>/App/Components/Text";

const SAFE_AREA_BOTTOM = 34;

const envCheck = env => {
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

export const Badge = styled.View`
  width: 16px;
  height: 18px;
  background-color: ${props => envCheck(props.env)};
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

export const Text = styled(RNText)`
  font-size: 12;
  font-family: "System";
  font-weight: bold;
  color: ${variables.colors.white};
`;
