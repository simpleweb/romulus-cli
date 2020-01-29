import * as React from 'react';
import { NavigationScreenProps } from "react-navigation";
<% if (i18nSupport) { -%>
import { t } from "<%= name %>/App/Helpers/Translations";
<% } -%>
import Layout from '<%= name %>/App/Components/Layout';
import Button from '<%= name %>/App/Components/Button';
import Text from '<%= name %>/App/Components/Text';

type Props = NavigationScreenProps & {};

const Main = ({ navigation }: Props): React.Node => (
  <Layout.Center>
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
  </Layout.Center>
);

export default Main;
