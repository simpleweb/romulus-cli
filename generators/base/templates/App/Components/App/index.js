// @flow
import * as React from 'react';
import { ENV } from '<%= name %>/App/Config';
import Layout from '<%= name %>/App/Components/Layout';
import Environment from '<%= name %>/App/Components/Utilities/Environment';

type Props = {
  children: React.Node,
};

const App = ({ children }: Props): React.Node => (
  <Layout.Full>
    {children}
    <Environment env={ENV}/>
  </Layout.Full>
);

export default App;
