import React from "react";
import { runSaga } from "redux-saga";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import Theme from "../App/Theme";

const Providers = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

async function recordSaga(saga, initialAction) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action),
    },
    saga,
    initialAction,
  ).done;

  return dispatched;
}

export * from "@testing-library/react-native";
export { customRender as render, recordSaga };
