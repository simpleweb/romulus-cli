import React from "react";
import { render, fireEvent } from "test-utilities";
import Button from "./index";

it("renders the text passed as children", () => {
  const onPress = jest.fn();
  const { getByText } = render(<Button onPress={onPress}>Call us</Button>);
  expect(getByText("Call us")).toBeDefined();
});

it("calls the onPress function when pressed", () => {
  const onPress = jest.fn();
  const { getByTestId } = render(<Button onPress={onPress}>Call us</Button>);
  const touchable = getByTestId("touchable");
  fireEvent.press(touchable);
  expect(onPress).toHaveBeenCalled();
});
