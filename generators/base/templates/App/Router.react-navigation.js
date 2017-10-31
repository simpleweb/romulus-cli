// @flow
import React from 'react';
import { Linking } from 'react-native';
import { connect } from 'react-redux';
import {
  StackNavigator,
  NavigationActions,
  addNavigationHelpers
} from 'react-navigation';
import Scenes from '<%= name %>/App/Scenes';

const RootNavigator = StackNavigator({
  Launch: {
    screen: Scenes.Launch,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: Scenes.Main,
  },
  Styleguide: {
    screen: Scenes.Styleguide,
  },
});

const Router = ({ dispatch, nav: state }) =>
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state })}/>
;

const RouterWithRedux = connect(({ nav }) => ({ nav }))(Router);

const handleURL = ({ url }: { url: string }) => {
  console.log('handleURL', url)
};

const addDeepLinkListener = () => {
  Linking.addEventListener('url', handleURL);
};

const removeDeepLinkListener = () => {
  Linking.removeEventListener('url', handleURL);
};

const getInitialURL = async () => {
  return new Promise(resolve => {
    Linking.getInitialURL().then((url) => {
      if (url) {
        resolve(url);
      } else {
        resolve(null);
      }
    }).catch(err => resolve(null));
  });
};

const root = async (dispatch) => {
  const url : string|null = await getInitialURL();

  dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' }),
      ],
    })
  );

  if (url) {
    handleURL({ url });
  }
};

export default {
  addDeepLinkListener,
  removeDeepLinkListener,
  root,
};
export { RootNavigator, RouterWithRedux };
