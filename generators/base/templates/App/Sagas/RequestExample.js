import { call, put, takeEvery } from 'redux-saga/effects';
import API from '<%= name %>/App/Services/API';

export function* RequestExample() {
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

export default function* watchRequestExample() {
  yield takeEvery('REQUEST_EXAMPLE', RequestExample);
}
