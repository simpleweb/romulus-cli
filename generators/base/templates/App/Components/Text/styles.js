// @flow
import { StyleSheet } from 'react-native';
import variables from '<%= name %>/App/Styles/Variables';

const Default = (props: Object): Object => {
  return {
    fontWeight: 'normal',
    fontFamily: variables.fonts.family
  };
};

const styles = (props: Object): Object => ({
  Default: Default(props),
});

export default (props: Object): Object => {
  return StyleSheet.create(styles(props));
};
