import reducer from "./App";

it("should render an initial state", () => {
  const expectedState = {
    installed: false,
  };

  expect(reducer(undefined, { type: "MyApp/APP_INSTALLED" })).toEqual(
    expectedState,
  );
});

it("should handle APP_INSTALLED", () => {
  const actionType = "<%= name %>/APP_INSTALLED";
  const initialState = {
    installed: false,
  };
  const action: { type: typeof actionType } = {
    type: actionType,
  };
  const expectedState = {
    installed: true,
  };

  expect(reducer(initialState, action)).toEqual(expectedState);
});
