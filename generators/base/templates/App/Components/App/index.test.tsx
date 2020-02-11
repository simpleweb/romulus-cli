import React from "react";
import { Text } from "react-native";
import { render } from "test-utilities";
import App from "./index";

it("renders the component passed as children", () => {
  const { getByText } = render(
    <App>
      <Text>React</Text>
    </App>,
  );
  expect(getByText("React")).toBeDefined();
});
