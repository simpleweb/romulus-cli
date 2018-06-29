// @flow
import * as React from "react";
import { View, Text } from "./styles";

type State = {};

type Props = {};

class <%= component %> extends React.Component<Props, State> {
  state = {};

  render(): React.Node {
    return (
      <View>
        <Text><%= component %></Text>
      </View>
    );
  }
}

export default <%= component %>;
