import React from "react";
import { render } from "test-utilities";
import Environment from "./index";

it("renders a development badge", () => {
  const { getByText } = render(<Environment env="development" />);
  expect(getByText("D")).toBeDefined();
});

it("renders a edge badge", () => {
  const { getByText } = render(<Environment env="edge" />);
  expect(getByText("E")).toBeDefined();
});

it("renders a staging", () => {
  const { getByText } = render(<Environment env="staging" />);
  expect(getByText("S")).toBeDefined();
});

it("doesn’t render in production", () => {
  const { queryByText } = render(<Environment env="production" />);
  expect(queryByText("P")).toBeNull();
});
