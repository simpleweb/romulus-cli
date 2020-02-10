import { appInstalled } from "./App";

it("appInstalled() should return correct action", () => {
  const action = {
    type: "<%= name %>/APP_INSTALLED",
  };

  expect(appInstalled()).toEqual(action);
});
