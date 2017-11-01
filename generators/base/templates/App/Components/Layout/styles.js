// @flow
import styled, { css } from 'styled-components/native';
import variables from '<%= name %>/App/Styles/Variables';

export const FullView = styled.View`
  flex: 1;
  margin-top: ${props => props.header ? variables.headerHeight : 0};
  margin-bottom: ${props => props.footer ? variables.footerHeight : 0};
`;

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScrollView = styled.ScrollView`
  margin-top: ${props => props.header ? variables.headerHeight : 0};
  margin-bottom: ${props => props.footer ? variables.footerHeight : 0};
`;

export const PaddedView = styled.View`
  padding: ${variables.spacing};
`;
