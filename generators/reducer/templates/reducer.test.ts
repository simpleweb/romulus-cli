import reducer from "./<%= reducer %>";

it("should render an initial state", () => {
  const expectedState = {
    value: false,
  };

  expect(reducer(undefined, { type: "" })).toEqual(expectedState);
});

it("should handle <%= reducerConst %>_EXAMPLE", () => {
  const actionType = "<%= name %>/<%= reducerConst %>_EXAMPLE";
  const initialState = {
    value: false,
  };
  const action: { type: typeof actionType } = {
    type: actionType,
  };
  const expectedState = {
    value: true,
  };

  expect(reducer(initialState, action)).toEqual(expectedState);
});
