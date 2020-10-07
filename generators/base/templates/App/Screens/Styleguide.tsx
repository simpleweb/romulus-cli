import React from "react";
import { Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styled from "styled-components/native";
import Button from "<%= name %>/App/Components/Button";
import Layout from "<%= name %>/App/Components/Layout";
import Text from "<%= name %>/App/Components/Text";

type StyleguideScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Styleguide"
>;

type Props = {
  navigation: StyleguideScreenNavigationProp;
};

const Styleguide: React.FC<Props> = () => {
  return (
    <Layout.Scroll>
      <Layout.Padded>
        <Text>Styleguide</Text>

        <Heading>Button</Heading>
        <Button onPress={() => Alert.alert("Button pressed")}>Button</Button>
      </Layout.Padded>
    </Layout.Scroll>
  );
};

const Heading = styled(Text)`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export default Styleguide;
