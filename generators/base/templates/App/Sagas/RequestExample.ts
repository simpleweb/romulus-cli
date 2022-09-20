import { AxiosResponse, AxiosError } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import API from "<%= name %>/App/Services/API";

interface UsersResponse {
  page: number;
  per_page: number;
  total_pages: number;
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
}

export const RequestExample = function* () {
  try {
    const url = "https://reqres.in/api/users";
    const result: AxiosResponse<UsersResponse> = yield call(API.get, url);
    yield put({ type: "REQUEST_EXAMPLE_SUCCESS", result });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      yield put({ type: "REQUEST_EXAMPLE_ERROR", error });
    } else {
      yield put({ type: "REQUEST_EXAMPLE_ERROR", error: "Network error" });
    }
  }
};

const watchRequestExample = function* () {
  yield takeEvery("REQUEST_EXAMPLE", RequestExample);
};

export default watchRequestExample;
