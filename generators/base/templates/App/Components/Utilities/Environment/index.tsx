import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Badge, EnvText } from "./styles";

export interface Props {
  env: string;
}

function Environment({ env }: Props) {
  const insets = useSafeAreaInsets();

  if (env === "production") {
    return null;
  }
  return (
    <Badge env={env} insets={insets}>
      <EnvText>{env.charAt(0).toUpperCase()}</EnvText>
    </Badge>
  );
}

export default Environment;
