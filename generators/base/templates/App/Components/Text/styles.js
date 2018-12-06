// @flow
import styled from "styled-components";

export const Text = styled.Text`
  font-weight: normal;
  font-family: ${props => props.theme.fonts.family};
  margin-bottom: ${props => (props.paragraph ? props.theme.spacing : 0)}px;
`;
