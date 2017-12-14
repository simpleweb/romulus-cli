// @flow
import {
  ENV as ENV_ENV,
  API_URL as ENV_API_URL,
  STORAGE_PREFIX as ENV_STORAGE_PREFIX,
} from 'react-native-dotenv';

export const ENV = ENV_ENV;
export const API_URL = ENV_API_URL;
export const STORAGE_PREFIX = ENV_STORAGE_PREFIX;

export default {
  ENV,
  API_URL,
  STORAGE_PREFIX,
};
