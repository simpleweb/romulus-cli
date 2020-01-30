import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { Badge, EnvText } from "./styles";

export interface Props {
  env: "development" | "staging" | "edge" | "production" | "live";
}

const Environment: React.FC<Props> = ({ env }) => {
  if (env === "production") {
    return null;
  }

  const insets = useSafeArea();

  return (
    <Badge env={env} insets={insets}>
      <EnvText>{env.charAt(0).toUpperCase()}</EnvText>
    </Badge>
  );
};

export default Environment;
