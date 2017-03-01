// @flow
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { ActionConst } from 'react-native-router-flux';
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
      ...Object.keys(ActionConst).map(key => ActionConst[key]),
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
