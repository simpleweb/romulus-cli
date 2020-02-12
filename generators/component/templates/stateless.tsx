import React from "react";
import { View, Text } from "./styles";

interface Props {}

const <%= component %>: React.FC<Props> = () => {
  return (
    <View>
      <Text><%= component %></Text>
    </View>
  );
}

export default <%= component %>;
