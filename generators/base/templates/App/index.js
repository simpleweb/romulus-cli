import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ThemeProvider } from "styled-components";
import Theme from "<%= name %>/App/Theme";
import Router from "<%= name %>/App/Router";
import { store, persistor } from "<%= name %>/App/Store";
import { runSagaMiddleware } from "<%= name %>/App/Store/Middleware/Saga";
import App from "<%= name %>/App/Components/App";

function <%= name %>() {
  return (
    <ThemeProvider theme={Theme}>
      <App>
        <Provider store={store}>
          <PersistGate
            loading={null}
            onBeforeLift={runSagaMiddleware}
            persistor={persistor}
          >
            <Router uriPrefix="<%= name %>://" />
          </PersistGate>
        </Provider>
      </App>
    </ThemeProvider>
  );
}

export default <%= name %>;
