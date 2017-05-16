import { all, fork } from 'redux-saga';
import RequestExample from '<%= name %>/App/Sagas/RequestExample';

export default function* rootSaga() {
  yield all([
    fork(RequestExample),
  ]);
}
