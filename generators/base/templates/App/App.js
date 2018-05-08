// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import Router from '<%= name %>/App/Router';
import { configureStore } from '<%= name %>/App/Store';
import { runSagaMiddleware } from '<%= name %>/App/Store/Middleware/Saga';
import App from '<%= name %>/App/Components/App';

const { persistor, store } = configureStore();

export default class <%= name %> extends React.Component<{}> {

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

  render(): React.Node {
    return (
      <App>
        <Provider store={store}>
          <PersistGate
            loading={null}
            onBeforeLift={this._onBeforeLift}
            persistor={persistor}
          >
            <Router />
          </PersistGate>
        </Provider>
      </App>
    );
  }
}
