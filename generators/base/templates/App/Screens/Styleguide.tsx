import { Box } from "@mobily/stacks";
import React from "react";
import { Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
<% if (usingReactQuery) { -%>
import { useQuery } from "react-query";
import API from "<%= name %>/App/Services/API";
<% } -%>
import Button from "<%= name %>/App/Components/Button";
import Text from "<%= name %>/App/Components/Text";
import { RootStackParamList } from "<%= name %>/App/Router";

type StyleguideScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Styleguide"
>;

type Props = {
  navigation: StyleguideScreenNavigationProp;
};

const Styleguide: React.FC<Props> = () => {
  return (
    <ScrollView>
      <Box flex="fluid" padding={3}>
        <Text>Styleguide</Text>

        <Heading>Button</Heading>
        <Button onPress={() => Alert.alert("Button pressed")}>Button</Button>
        <% if (usingReactQuery) { -%>

        <Heading>React Query</Heading>
        <GetExample />
        <% } -%>
      </Box>
    </ScrollView>
  );
};

<% if (usingReactQuery) { -%>
function GetExample() {
  const { isLoading, isError, data, error } = useQuery<any, any>("todos", () =>
    API.get("https://jsonplaceholder.typicode.com/todos"),
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error?.message}</Text>;
  }
  return (
    <React.Fragment>
      {data?.data?.slice(0, 3).map((todo: any, index: number) => (
        <Text key={index}>{todo.title}</Text>
      ))}
    </React.Fragment>
  );
}
<% } -%>

const Heading = styled(Text)`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export default Styleguide;
