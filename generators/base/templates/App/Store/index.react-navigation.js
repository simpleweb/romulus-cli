// @flow
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Reducers from '<%= name %>/App/Reducers';
import Middleware from '<%= name %>/App/Store/Middleware';
import { runSagaMiddleware } from '<%= name %>/App/Store/Middleware/Saga';

const Store = createStore(
  Reducers,
  compose(
    Middleware,
    autoRehydrate()
  )
);

const restoreCachedStore = (callback: Function) => {
  persistStore(Store, {
    storage: AsyncStorage,
    blacklist: [
      NavigationActions.BACK,
      NavigationActions.INIT,
      NavigationActions.NAVIGATE,
      NavigationActions.RESET,
      NavigationActions.SET_PARAMS,
      NavigationActions.URI,
    ],
  }, () => {
    runSagaMiddleware();
    if (callback) {
      callback();
    }
  });
}

export default Store;
export { restoreCachedStore };
