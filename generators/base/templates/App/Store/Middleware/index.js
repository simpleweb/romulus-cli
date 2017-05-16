// @flow
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { ActionConst } from 'react-native-router-flux';
import Buffer from '<%= name %>/App/Store/Middleware/Buffer';
import Saga from '<%= name %>/App/Store/Middleware/Saga';

const middlewares = [Buffer, Saga];

if (process.env['NODE_ENV'] = 'development') {
  const Logger = require('./Logger.js');
  middlewares.push(Logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
