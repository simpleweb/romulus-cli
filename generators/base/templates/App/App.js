// @flow
import * as React from "react";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Router from "<%= name %>/App/Router";
import { store, persistor } from "<%= name %>/App/Store";
import { runSagaMiddleware } from "<%= name %>/App/Store/Middleware/Saga";
import App from "<%= name %>/App/Components/App";

const prefix =
  Platform.OS === "android" ? "<%= name %>://<%= name %>/" : "<%= name %>://";

class <%= name %> extends React.Component<{}> {
  render(): React.Node {
    return (
      <App>
        <Provider store={store}>
          <PersistGate
            loading={null}
            onBeforeLift={runSagaMiddleware}
            persistor={persistor}
          >
            <Router uriPrefix={prefix} />
          </PersistGate>
        </Provider>
      </App>
    );
  }
}

export default <%= name %>;
