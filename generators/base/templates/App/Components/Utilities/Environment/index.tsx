import React from "react";
import { Badge, EnvText } from "./styles";

export interface Props {
  env: "development" | "staging" | "edge" | "production" | "live";
}

const Environment: React.FC<Props> = ({ env }) => {
  if (env === "production") {
    return null;
  }

  return (
    <Badge env={env}>
      <EnvText>{env.charAt(0).toUpperCase()}</EnvText>
    </Badge>
  );
};

export default Environment;
