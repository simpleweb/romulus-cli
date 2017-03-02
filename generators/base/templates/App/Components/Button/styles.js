// @flow
import { StyleSheet } from 'react-native';
import variables from '<%= name %>/App/Styles/Variables';

const Button = (props: Object): Object => {
  return {
    padding: 12,
    backgroundColor: variables.colors.grey,
    borderRadius: 3,
  };
};

const Text = (props: Object): Object => {
  return {
    color: variables.colors.white,
    textAlign: 'center',
  };
};

const styles = (props: Object): Object => ({
  Button: Button(props),
  Text: Text(props),
});

export default (props: Object): Object => {
  return StyleSheet.create(styles(props));
};
