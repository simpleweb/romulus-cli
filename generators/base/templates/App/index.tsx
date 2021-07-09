import React from "react";
<% if (usingReduxSaga) { -%>
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "<%= name %>/App/Store";
import { runSagaMiddleware } from "<%= name %>/App/Store/Middleware/Saga";
<% } -%>
<% if (usingReactQuery) { -%>
import { QueryClient, QueryClientProvider } from "react-query";
<% } -%>
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Theme from "<%= name %>/App/Theme";
import Router from "<%= name %>/App/Router";
import App from "<%= name %>/App/Components/App";

<% if (usingReactQuery) { -%>
const queryClient = new QueryClient();
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
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
          <% } -%>
        </App>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default <%= name %>;
