import { call, put, takeEvery } from 'redux-saga/effects';
import API from '<%= name %>/App/Services/API';

const RequestExample = function*() {
  try {

    const url = 'https://reqres.in/api/users';
    const result = yield call(API.get, url);
    yield put({ type: 'REQUEST_EXAMPLE_SUCCESS', result });

  } catch(error) {

    if (error.response) {
      yield put({ type: 'REQUEST_EXAMPLE_ERROR', error });
    } else {
      yield put({ type: 'REQUEST_EXAMPLE_ERROR', error: 'Network error' });
    }

  }
}

const watchRequestExample = function*() {
  yield takeEvery('REQUEST_EXAMPLE', RequestExample);
}

export default watchRequestExample;
