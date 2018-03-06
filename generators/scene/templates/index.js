// @flow
import * as React from "react";
import Layout from "<%= name %>/App/Components/Layout";
import Text from "<%= name %>/App/Components/Text";

const <%= scene %> = (): React.Node => (
  <Layout.Center>
    <Text><%= scene %></Text>
  </Layout.Center>
);

export default <%= scene %>;
