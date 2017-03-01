// @flow
import React from 'react';
import { Linking } from 'react-native';
import { Scene, Actions, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scenes from '<%= name %>/App/Scenes';

const Routes = Actions.create(
  <Scene key="modal">
    <Scene key="root">
      <Scene key="launch" component={Scenes.Launch}/>
      <Scene key="main">
        <Scene key="main_index" component={Scenes.Main}/>
      </Scene>
    </Scene>
  </Scene>
);

const RouterWithRedux = connect()(Router);

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

const root = async () => {
  const url : string|null = await getInitialURL();

  Actions.main({ animation: 'fade' });

  if (url) {
    handleURL({ url });
  }
};

export default {
  addDeepLinkListener,
  removeDeepLinkListener,
  root,
};
export { Routes, RouterWithRedux };
