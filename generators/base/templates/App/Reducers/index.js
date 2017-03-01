// @flow
import { combineReducers } from 'redux';
import App from '<%= name %>/App/Reducers/App';

const reducers = combineReducers({
  app: App,
});

export default reducers;
