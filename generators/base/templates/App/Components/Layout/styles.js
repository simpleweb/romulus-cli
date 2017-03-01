// @flow
import { StyleSheet } from 'react-native';

const Center = (props: Object): Object => {
  return {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
};

const styles = (props: Object): Object => ({
  Center: Center(props),
});

export default (props: Object): Object => {
  return StyleSheet.create(styles(props));
};
