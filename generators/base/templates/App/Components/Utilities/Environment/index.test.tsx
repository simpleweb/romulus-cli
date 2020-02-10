import React from "react";
import { render } from "test-utilities";
import Environment from "./index";

it("renders a badge specific to the environment", () => {
  const { getByText } = render(<Environment env="development" />);
  expect(getByText("D")).toBeDefined();
});

it("doesn’t render in production", () => {
  const { queryByText } = render(<Environment env="production" />);
  expect(queryByText("P")).toBeNull();
});
