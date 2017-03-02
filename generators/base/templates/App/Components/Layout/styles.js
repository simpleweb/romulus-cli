// @flow
import { StyleSheet } from 'react-native';
import variables from '<%= name %>/App/Styles/Variables';

const Center = (props: Object): Object => {
  return {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
};

const Scroll = (props: Object): Object => {
  const marginTop = props.header ? variables.headerHeight : 0;
  const marginBottom = props.footer ? variables.footerHeight : 0;

  return {
    marginTop,
    marginBottom,
  };
};

const Padded = (props: Object): Object => {
  return {
    padding: variables.spacing,
  };
};

const styles = (props: Object): Object => ({
  Center: Center(props),
  Scroll: Scroll(props),
  Padded: Padded(props),
});

export default (props: Object): Object => {
  return StyleSheet.create(styles(props));
};
