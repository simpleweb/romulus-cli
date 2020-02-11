import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import Theme from "../App/Theme";

const Providers = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";
export { customRender as render };
