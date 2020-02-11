import React from "react";
import { render } from "test-utilities";
import Text from "./index";

it("renders the text passed as children", () => {
  const { getByText } = render(<Text>React</Text>);
  expect(getByText("React")).toBeDefined();
});

it("adds margin to the bottom with a paragraph prop", () => {
  const { getByTestId } = render(<Text paragraph>React</Text>);
  // @ts-ignore: toHaveStyleRule is missing a type definition
  expect(getByTestId("styled-text")).toHaveStyleRule("margin-bottom", 16);
});
