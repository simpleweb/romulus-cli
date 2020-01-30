import styled, { css } from "styled-components/native";
import { Full } from "./index";

const getAlign = (alignment: string): string => {
  switch (alignment) {
    case "bottom":
      return "flex-end";
    default:
      return "flex-start";
  }
};

export const View = styled.View``;

export const FullView = styled.View<Full>`
  flex: 1;
  ${props =>
    props.align &&
    css`
      justify-content: ${getAlign(props.align)};
    `};
`;

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CenterVerticallyView = styled(FullView)`
  justify-content: center;
`;

export const ScrollView = styled.ScrollView``;

export const PaddedView = styled.View`
  padding: ${props => props.theme.spacing}px;
`;
