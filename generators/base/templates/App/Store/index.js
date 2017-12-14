// @flow
import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import Reducers from '<%= name %>/App/Reducers';
import Middleware from '<%= name %>/App/Store/Middleware';

const store = createStore(
  Reducers,
  compose(Middleware)
);

const configureStore = () => {
  let persistor = persistStore(store);
  return { persistor, store };
}

export default store;
export { configureStore };
