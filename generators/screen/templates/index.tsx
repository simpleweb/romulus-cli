import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import Layout from "<%= name %>/App/Components/Layout";
import Text from "<%= name %>/App/Components/Text";

type <%= screen %>ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "<%= screen %>"
>;

type Props = {
  navigation: <%= screen %>ScreenNavigationProp;
};

const <%= screen %>: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout.Center>
      <Text><%= screen %></Text>
    </Layout.Center>
  );
}

export default <%= screen %>;
