import React from "react";
import { render } from "test-utilities";
import <%= component %> from "./index";

it("renders the text passed as children", () => {
  const { getByText } = render(<<%= component %> />);
  expect(getByText("<%= component %>")).toBeDefined();
});
