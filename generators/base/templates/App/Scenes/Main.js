// @flow
import * as React from 'react';
import { Text } from 'react-native';
import { type NavigationState } from 'react-navigation';
<% if (i18nSupport) { -%>
import { t } from "<%= name %>/App/Helpers/Translations";
<% } -%>
import Layout from '<%= name %>/App/Components/Layout';
import Button from '<%= name %>/App/Components/Button';

type Props = {
  navigation: NavigationState,
};

const Main = ({ navigation }: Props): React.Node => (
  <Layout.Center>
    <% if (i18nSupport) { -%>
    <Text>{t("scenes.main.title")}</Text>
    <% } else { -%>
    <Text>Welcome to the React Native Generator!</Text>
    <% } -%>
    <Button onPress={() => navigation.navigate("Styleguide")}>
      <% if (i18nSupport) { -%>
      {t("scenes.main.styleguide_button")}
      <% } else { -%>
      View the Styleguide
      <% } -%>
    </Button>
  </Layout.Center>
);

export default Main;
