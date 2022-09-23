import { Box } from "@mobily/stacks";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import Text from "<%= name %>/App/Components/Text";
import { RootStackParamList } from "<%= name %>/App/Components/Router";

type <%= screen %>ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "<%= screen %>"
>;

type Props = {
  navigation: <%= screen %>ScreenNavigationProp;
};

function <%= screen %>({ navigation }: Props) {
  return (
    <Box flex="fluid" alignX="center" alignY="center">
      <Text><%= screen %></Text>
    </Box>
  );
}

export default <%= screen %>;
