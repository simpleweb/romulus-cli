import React from "react";
import { Text as StyledText } from "./styles";

export interface Props {
  paragraph?: boolean;
}

const Text: React.FC<Props> = props => <StyledText {...props} />;

export default Text;
