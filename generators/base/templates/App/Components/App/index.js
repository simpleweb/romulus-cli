// @flow
import * as React from "react";
import { ENV } from "<%= name %>/App/Config";
import Environment from "<%= name %>/App/Components/Utilities/Environment";

type Props = {
  children: React.Node,
};

const App = ({ children }: Props): React.Node => (
  <React.Fragment>
    {children}
    <Environment env={ENV} />
  </React.Fragment>
);

export default App;
