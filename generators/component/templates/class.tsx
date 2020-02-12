import React from "react";
import { View, Text } from "./styles";

interface Props {}

class <%= component %> extends React.Component<Props, {}> {
  render() {
    return (
      <View>
        <Text><%= component %></Text>
      </View>
    );
  }
}

export default <%= component %>;
