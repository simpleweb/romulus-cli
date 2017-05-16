import { all, fork } from 'redux-saga/effects';
import RequestExample from '<%= name %>/App/Sagas/RequestExample';

export default function* rootSaga() {
  yield all([
    fork(RequestExample),
  ]);
}
