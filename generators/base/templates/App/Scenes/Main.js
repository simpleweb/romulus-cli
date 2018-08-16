// @flow
import * as React from 'react';
import { Text } from 'react-native';
import { type NavigationState } from 'react-navigation';
import { t } from "<%= name %>/App/Helpers/Translations";
import Layout from '<%= name %>/App/Components/Layout';
import Button from '<%= name %>/App/Components/Button';

type Props = {
  navigation: NavigationState,
};

function Main({ navigation }: Props): React.Node {
  return (
    <Layout.Center>
      <Text>{t("scenes.main.title")}</Text>
      <Button onPress={() => navigation.navigate("Styleguide")}>
        {t("scenes.main.styleguide_button")}
      </Button>
    </Layout.Center>
  );
}

export default Main;
