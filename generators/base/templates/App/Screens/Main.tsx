import { Box } from "@mobily/stacks";
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
<% if (i18nSupport) { -%>
import { t } from "<%= name %>/App/Helpers/Translations";
<% } -%>
import Button from '<%= name %>/App/Components/Button';
import Text from '<%= name %>/App/Components/Text';
import { RootStackParamList } from "<%= name %>/App/Components/Router";

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

type Props = {
  navigation: MainScreenNavigationProp;
};

function Main({ navigation }: Props) {
  return (
    <Box flex="fluid" alignY="center" alignX="center">
      <% if (i18nSupport) { -%>
      <Text paragraph>{t("screens.main.title")}</Text>
      <% } else { -%>
      <Text paragraph>Welcome to the React Native Generator! 👋</Text>
      <% } -%>
      <Button onPress={() => navigation.navigate("Styleguide")}>
        <% if (i18nSupport) { -%>
        {t("screens.main.styleguide_button")}
        <% } else { -%>
        View the Styleguide
        <% } -%>
      </Button>
    </Box>
  );
}

export default Main;
