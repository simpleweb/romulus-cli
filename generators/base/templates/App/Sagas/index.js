import RequestExample from '<%= name %>/App/Sagas/RequestExample';

export default function* rootSaga() {
  yield [
    RequestExample(),
  ];
}
