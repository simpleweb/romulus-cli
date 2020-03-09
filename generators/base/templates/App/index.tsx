import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Theme from "<%= name %>/App/Theme";
import Router from "<%= name %>/App/Router";
import { store, persistor } from "<%= name %>/App/Store";
import { runSagaMiddleware } from "<%= name %>/App/Store/Middleware/Saga";
import App from "<%= name %>/App/Components/App";

function <%= name %>() {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <App>
          <Provider store={store}>
            <PersistGate
              loading={null}
              onBeforeLift={runSagaMiddleware}
              persistor={persistor}
            >
              <Router />
            </PersistGate>
          </Provider>
        </App>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default <%= name %>;
