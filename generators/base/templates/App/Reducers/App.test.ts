import reducer, { install } from "./App";

it("should render an initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    installed: false,
  });
});

it("should handle install()", () => {
  expect(
    reducer(
      {
        installed: false,
      },
      install(),
    ),
  ).toEqual({
    installed: true,
  });
});
