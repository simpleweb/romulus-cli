// @flow
import styled from 'styled-components';
import variables from '<%= name %>/App/Styles/Variables';

import RNText from '<%= name %>/App/Components/Text';

export const Badge = styled.View`
  width: 16px;
  height: 18px;
  background-color: ${props => envCheck(props.env)};
  position: absolute;
  right: 5px;
  bottom: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 4;
`;

export const Text = styled(RNText)`
  font-size: 12;
  font-family: 'System';
  font-weight: bold;
  color: ${variables.colors.white};
`;

const envCheck = (env) => {
  switch(env) {
    case 'staging':
      return 'orange';
    case 'edge':
      return 'purple';
    case 'production':
      return 'red';
    default:
      return 'green';
  }
};
