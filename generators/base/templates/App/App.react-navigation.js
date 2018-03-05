// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import Router, { RouterWithRedux } from '<%= name %>/App/Router';
import { configureStore } from '<%= name %>/App/Store';
import { runSagaMiddleware } from '<%= name %>/App/Store/Middleware/Saga';
import App from '<%= name %>/App/Components/App';

const { persistor, store } = configureStore()

export default class <%= name %> extends Component<{}> {

  componentDidMount() {
    Router.addDeepLinkListener();
  }

  componentWillUnmount() {
    Router.removeDeepLinkListener();
  }

  _onBeforeLift = () => {
    runSagaMiddleware();
    Router.root(store);
  }

  render(): React$Element<any> {
    return (
      <App>
        <Provider store={store}>
          <PersistGate
            loading={null}
            onBeforeLift={this._onBeforeLift}
            persistor={persistor}
          >
            <RouterWithRedux />
          </PersistGate>
        </Provider>
      </App>
    );
  }
}
