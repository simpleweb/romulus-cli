// @flow
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ThemeProvider } from "styled-components";
import { NAVIGATION_PERSIST_KEY } from "<%= name %>/App/Config";
import Theme from "<%= name %>/App/Styles/Theme";
import Router from "<%= name %>/App/Router";
import { store, persistor } from "<%= name %>/App/Store";
import { runSagaMiddleware } from "<%= name %>/App/Store/Middleware/Saga";
import App from "<%= name %>/App/Components/App";

const navigationPersistenceKey =
  __DEV__ ? NAVIGATION_PERSIST_KEY : null;

class <%= name %> extends React.Component<{}> {
  render(): React.Node {
    return (
      <ThemeProvider theme={Theme}>
        <App>
          <Provider store={store}>
            <PersistGate
              loading={null}
              onBeforeLift={runSagaMiddleware}
              persistor={persistor}
            >
              <Router
                uriPrefix="<%= name %>://"
                persistenceKey={navigationPersistenceKey}
              />
            </PersistGate>
          </Provider>
        </App>
      </ThemeProvider>
    );
  }
}

export default <%= name %>;
