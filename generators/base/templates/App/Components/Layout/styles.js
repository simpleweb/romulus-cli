// @flow
import styled, { css } from "styled-components";
import variables from "<%= name %>/App/Styles/Variables";

const getAlign = (alignment: string): string => {
  switch (alignment) {
    case "bottom":
      return "flex-end";
    default:
      return "flex-start";
  }
};

export const View = styled.View``;

export const FullView = styled.View`
  flex: 1;
  margin-top: ${props => (props.header ? variables.headerHeight : 0)};
  margin-bottom: ${props => (props.footer ? variables.footerHeight : 0)};
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

export const ScrollView = styled.ScrollView`
  margin-top: ${props => (props.header ? variables.headerHeight : 0)};
  margin-bottom: ${props => (props.footer ? variables.footerHeight : 0)};
`;

export const PaddedView = styled.View`
  padding: ${variables.spacing}px;
`;
