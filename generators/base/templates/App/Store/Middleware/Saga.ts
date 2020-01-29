import createSagaMiddleware from 'redux-saga';
import RootSaga from '<%= name %>/App/Sagas';

const sagaMiddleware = createSagaMiddleware();

const runSagaMiddleware = () => {
  sagaMiddleware.run(RootSaga);
};

export default sagaMiddleware;
export {
  runSagaMiddleware,
};
