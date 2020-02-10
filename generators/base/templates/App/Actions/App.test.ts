import { appInstalled } from "./App";

it("appInstalled() should return correct action", () => {
  const action = {
    type: "TestingApp/APP_INSTALLED",
  };

  expect(appInstalled()).toEqual(action);
});
