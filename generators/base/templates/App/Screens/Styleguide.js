// @flow
import * as React from "react";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "<%= name %>/App/Components/Button";
import Layout from "<%= name %>/App/Components/Layout";
import Text from "<%= name %>/App/Components/Text";

function Styleguide() {
  const dispatch = useDispatch();
  const installed = useSelector(state => state.app.installed);
  const requestExample = React.useCallback(
    () => dispatch({ type: "REQUEST_EXAMPLE" }),
    [dispatch],
  );

  return (
    <Layout.Scroll>
      <Layout.Padded>
        <Text>Styleguide</Text>

        <Heading>Button</Heading>
        <Button onPress={() => Alert.alert("Button pressed")}>Button</Button>

        <Heading>Request Example (check console)</Heading>
        <Button onPress={requestExample}>Request Example</Button>

        <Heading>Map props example</Heading>
        <Text>Is app installed? {installed ? "Yes" : "No"}</Text>
      </Layout.Padded>
    </Layout.Scroll>
  );
}

const Heading = styled(Text)`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export default Styleguide;
