// @flow
import * as React from "react";
import Layout from "<%= name %>/App/Components/Layout";
import Text from "<%= name %>/App/Components/Text";

type Props = {};

const <%= screen %> = (props: Props): React.Node => (
  <Layout.Center>
    <Text><%= screen %></Text>
  </Layout.Center>
);

export default <%= screen %>;
