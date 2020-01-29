import * as React from "react";
import { Text as StyledText } from "./styles";

type Props = {
  children: React.Node,
  paragraph?: boolean,
};

const Text = (props: Props): React.Node => <StyledText {...props} />;

export default Text;
