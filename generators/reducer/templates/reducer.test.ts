import reducer, { example } from "./<%= reducer %>";

it("should render an initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    value: false,
  });
});

it("should handle example()", () => {
  expect(
    reducer(
      {
        value: false,
      },
      example()
    )
  ).toEqual({
    value: true,
  });
});
