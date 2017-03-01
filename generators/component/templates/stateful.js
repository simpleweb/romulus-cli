// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import <%= component %>Styles from './styles';

type State = {
};

type Props = {
};

class <%= component %> extends Component {
  state: State;
  props: Props;

  constructor(props: Object) {
    super(props);

    this.state = {};
  }

  render(): React$Element<any> {
    const Styles = <%= component %>Styles(this.props);

    return (
      <View>
        <Text><%= component %></Text>
      </View>
    );
  }
}

export default <%= component %>;
