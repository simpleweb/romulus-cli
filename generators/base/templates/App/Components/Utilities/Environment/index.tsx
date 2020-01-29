import React from "react";
import { Badge, EnvText } from "./styles";

type Props = {
  env: "development" | "staging" | "edge" | "production" | "live"
};

function Environment(props: Props): React.Node {
  const { env } = props;

  if (env === "production") {
    return null;
  }

  return (
    <Badge env={env}>
      <EnvText>{env.charAt(0).toUpperCase()}</EnvText>
    </Badge>
  );
}

export default Environment;
