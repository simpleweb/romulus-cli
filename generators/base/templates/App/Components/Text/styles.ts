import styled from "styled-components/native";
import { Props } from "./index";

export const Text = styled.Text<Props>`
  font-weight: normal;
  font-family: ${props => props.theme.fonts.family};
  margin-bottom: ${props => (props.paragraph ? props.theme.spacing : 0)}px;
`;
