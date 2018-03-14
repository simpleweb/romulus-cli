// @flow
import { createLogger } from 'redux-logger';
import { NavigationActions } from 'react-navigation';

const blacklist = [
  NavigationActions.BACK,
  NavigationActions.INIT,
  NavigationActions.NAVIGATE,
  NavigationActions.RESET,
  NavigationActions.SET_PARAMS,
  NavigationActions.URI,
];

const Logger = createLogger({
  predicate: (getState, action) => !blacklist.includes(action.type)
});

module.exports = Logger;
