import React from "react";
import { ENV } from "<%= name %>/App/Config";
import Environment from "<%= name %>/App/Components/Utilities/Environment";

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props) {
  return (
    <React.Fragment>
      {children}
      <Environment env={ENV} />
    </React.Fragment>
  );
}

export default App;
