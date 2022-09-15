import { StacksProvider } from "@mobily/stacks";
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
import { useColorScheme } from "react-native";
import theme from "<%= name %>/App/Theme";
import Router from "<%= name %>/App/Components/Router";
import App from "<%= name %>/App/Components/App";
import { AuthenticationProvider } from "<%= name %>/App/Components/Authentication";

<% if (usingReactQuery) { -%>
const queryClient = new QueryClient();
<% } -%>

function <%= name %>() {
  const mode = useColorScheme();
  const dynamicTheme = mode ? theme[mode] : theme.light;

  return (
    <ThemeProvider theme={dynamicTheme}>
      <StacksProvider spacing={6}>
        <SafeAreaProvider>
          <AuthenticationProvider>
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
          </AuthenticationProvider>
        </SafeAreaProvider>
      </StacksProvider>
    </ThemeProvider>
  );
}

export default <%= name %>;
