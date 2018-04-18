// @flow
import { success, warn, error } from '<%= name %>/App/Helpers/Log';

const logRequest = (config: Object) => {
  warn(
    `${config.method.toUpperCase()} ${config.url}`,
    config
  );
};

const logResponse = (response: Object) => {
  success(
    `${response.status} ${response.config.url}`,
    response
  );
};

const logError = (response: Object) => {
  error(
    `${response.status} ${response.config.url}`,
    response
  );
};

export {
  logRequest,
  logResponse,
  logError,
};
