import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import Layout from "<%= name %>/App/Components/Layout";
import Text from "<%= name %>/App/Components/Text";

const <%= screen %>: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <Layout.Center>
      <Text><%= screen %></Text>
    </Layout.Center>
  );
}

export default <%= screen %>;
