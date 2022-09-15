import I18n from "react-native-i18n";

I18n.fallbacks = true;

I18n.translations = {
  en: require("<%= name %>/App/Config/Locales/en.json"),
};

export const t = (scope: I18n.Scope, options?: I18n.TranslateOptions) =>
  I18n.t(scope, options);

export default I18n;
