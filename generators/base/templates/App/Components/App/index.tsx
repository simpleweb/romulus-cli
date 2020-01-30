import React from "react";
import { ENV } from "<%= name %>/App/Config";
import Environment from "<%= name %>/App/Components/Utilities/Environment";

const App: React.FC = ({ children }) => (
  <React.Fragment>
    {children}
    <Environment env={ENV} />
  </React.Fragment>
);

export default App;
