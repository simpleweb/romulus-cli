// @flow
import { applyMiddleware } from 'redux';
import Buffer from '<%= name %>/App/Store/Middleware/Buffer';
import Saga from '<%= name %>/App/Store/Middleware/Saga';
import { RouterMiddleware } from '<%= name %>/App/Router';

const middlewares = [Buffer, Saga, RouterMiddleware];

if (process.env['NODE_ENV'] = 'development') {
  const Logger = require('./Logger.js');
  middlewares.push(Logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
