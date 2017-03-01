// @flow
import { StyleSheet } from 'react-native';
import variables from '<%= name %>/App/Styles/Variables';

const <%= component %> = (props: Object): Object => {
  return {
  };
};

const styles = (props: Object): Object => ({
  <%= component %>: <%= component %>(props),
});

export default (props: Object): Object => {
  return StyleSheet.create(styles(props));
};
