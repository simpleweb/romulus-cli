// @flow
import {
  ENV as ENV_ENV,
  API_URL as ENV_API_URL,
} from 'react-native-dotenv';

export const ENV = ENV_ENV;
export const API_URL = ENV_API_URL;

export default {
  ENV,
  API_URL,
};
