// @flow
import styled from 'styled-components';
import variables from '<%= name %>/App/Styles/Variables';

import RNText from '<%= name %>/App/Components/Text';

export const Container = styled.View`
  padding: 12px;
  background-color: ${variables.colors.grey};
  border-radius: 3px;
`;

export const Text = styled(RNText)`
  color: ${variables.colors.white};
  text-align: center;
`;
