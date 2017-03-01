// @flow
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Router, { Routes, RouterWithRedux } from '<%= name %>/App/Router';
import Store, { restoreCachedStore } from '<%= name %>/App/Store';
import App from '<%= name %>/App/Components/App';

export default class <%= name %> extends Component {
  componentDidMount() {
    Router.addDeepLinkListener();
    restoreCachedStore(Router.root);
  }

  componentWillUnmount() {
    Router.removeDeepLinkListener();
  }

  render(): React$Element<any> {
    return (
      <App>
        <Provider store={Store}>
          <RouterWithRedux scenes={Routes}/>
        </Provider>
      </App>
    );
  }
}
