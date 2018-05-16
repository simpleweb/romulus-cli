import { NativeModules, Platform } from 'react-native'

import de from '<%= name %>/App/Language/De';
import en from '<%= name %>/App/Language/En';
import es from '<%= name %>/App/Language/Es';

let locale = 'en-US';

try {
  if (Platform.OS === 'ios') {
    locale = NativeModules.SettingsManager.settings.AppleLocale
  } else {
    locale = NativeModules.I18nManager.localeIdentifier
  }
} catch (e) {}

export const language = locale.slice(0, 2);
export const country = locale.slice(3, 5);

const languages = { de, en, es };

let exportLanguage = languages[locale];

if (exportLanguage === undefined) {
  exportLanguage = languages.en
}

export default exportLanguage
