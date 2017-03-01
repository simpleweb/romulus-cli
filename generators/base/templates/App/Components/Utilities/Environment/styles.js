// @flow
import { StyleSheet } from 'react-native';
import variables from '<%= name %>/App/Styles/Variables';

const Environment = (props: Object): Object => {
  const backgroundColor = ((env) => {
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
  })(props.env);

  return {
    width: 16,
    height: 18,
    backgroundColor,
    position: 'absolute',
    right: 5,
    bottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  };
};

const Text = (props: Object): Object => {
  return {
    fontSize: 12,
    fontWeight: 'bold',
    color: variables.colors.white,
  };
};

const styles = (props: Object): Object => ({
  Environment: Environment(props),
  Text: Text(props),
});

export default (props: Object): Object => {
  return StyleSheet.create(styles(props));
};
