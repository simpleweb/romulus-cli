// @flow
import createLogger from 'redux-logger';
import { ActionConst } from 'react-native-router-flux';

const blacklist = [
  ...Object.keys(ActionConst).map(key => ActionConst[key]),
];

const Logger = createLogger({
  predicate: (getState, action) => !blacklist.includes(action.type)
});

module.exports = Logger;
