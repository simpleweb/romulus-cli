// @flow
import * as React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import RootNavigator from '<%= name %>/App/Router';
import { configureStore } from '<%= name %>/App/Store';
import { runSagaMiddleware } from '<%= name %>/App/Store/Middleware/Saga';
import App from '<%= name %>/App/Components/App';

const { persistor, store } = configureStore();

const prefix = Platform.OS == 'android' ? '<%= name %>://<%= name %>/' : '<%= name %>://';

export default class <%= name %> extends React.Component<{}> {

  _onBeforeLift = () => {
    runSagaMiddleware();
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
            <RootNavigator uriPrefix={prefix} />
          </PersistGate>
        </Provider>
      </App>
    );
  }
}
