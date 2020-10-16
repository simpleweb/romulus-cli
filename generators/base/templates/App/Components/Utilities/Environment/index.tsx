import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { Badge, EnvText } from "./styles";

export interface Props {
  env: string;
}

const Environment: React.FC<Props> = ({ env }) => {
  const insets = useSafeArea();

  if (env === "production") {
    return null;
  }

  return (
    <Badge env={env} insets={insets}>
      <EnvText>{env.charAt(0).toUpperCase()}</EnvText>
    </Badge>
  );
};

export default Environment;
