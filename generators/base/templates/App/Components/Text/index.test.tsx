import React from "react";
import { render } from "test-utilities";
import Text from "./index";

it("renders the text passed as children", () => {
  const { getByText } = render(<Text>React</Text>);
  expect(getByText("React")).toBeDefined();
});
