import I18n from "react-native-i18n";

I18n.fallbacks = true;

I18n.translations = {
  en: require("<%= name %>/App/Config/Locales/en.json"),
};

export const t = (...args) => I18n.t(...args);

export default I18n;
