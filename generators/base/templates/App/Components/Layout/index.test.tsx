import React from "react";
import { Text } from "react-native";
import { render } from "test-utilities";
import Layout from "./index";

describe("<Layout>", () => {
  it("renders the children passed to it", () => {
    const { getByText, debug } = render(
      <Layout>
        <Text>Layout</Text>
      </Layout>,
    );
    debug();
    expect(getByText("Layout")).toBeDefined();
  });
});

describe("<Layout.Full>", () => {
  it("renders the children passed to it", () => {
    const { getByText } = render(
      <Layout.Full>
        <Text>Layout</Text>
      </Layout.Full>,
    );
    expect(getByText("Layout")).toBeDefined();
  });
});

describe("<Layout.Center>", () => {
  it("renders the children passed to it", () => {
    const { getByText } = render(
      <Layout.Center>
        <Text>Layout</Text>
      </Layout.Center>,
    );
    expect(getByText("Layout")).toBeDefined();
  });
});

describe("<Layout.Scroll>", () => {
  it("renders the children passed to it", () => {
    const { getByText } = render(
      <Layout.Scroll>
        <Text>Layout</Text>
      </Layout.Scroll>,
    );
    expect(getByText("Layout")).toBeDefined();
  });
});

describe("<Layout.CenterVertically>", () => {
  it("renders the children passed to it", () => {
    const { getByText } = render(
      <Layout.CenterVertically>
        <Text>Layout</Text>
      </Layout.CenterVertically>,
    );
    expect(getByText("Layout")).toBeDefined();
  });
});
