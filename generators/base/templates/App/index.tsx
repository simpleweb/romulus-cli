import React from "react";
<% if (usingReduxSaga) { -%>
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "<%= name %>/App/Store";
import { runSagaMiddleware } from "<%= name %>/App/Store/Middleware/Saga";
<% } -%>
<% if (usingReactQuery) { -%>
import { QueryCache, ReactQueryCacheProvider } from "react-query";
<% } -%>
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Theme from "<%= name %>/App/Theme";
import Router from "<%= name %>/App/Router";
import App from "<%= name %>/App/Components/App";

<% if (usingReactQuery) { -%>
const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      retry: 0,
    },
  },
});
<% } -%>

function <%= name %>() {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <App>
          <% if (usingReduxSaga) { -%>
          <Provider store={store}>
            <PersistGate
              loading={null}
              onBeforeLift={runSagaMiddleware}
              persistor={persistor}
            >
              <Router />
            </PersistGate>
          </Provider>
          <% } -%>
          <% if (usingReactQuery) { -%>
          <ReactQueryCacheProvider queryCache={queryCache}>
            <Router />
          </ReactQueryCacheProvider>
          <% } -%>
        </App>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default <%= name %>;
