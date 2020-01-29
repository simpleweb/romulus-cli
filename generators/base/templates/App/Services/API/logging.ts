import { AxiosResponse, AxiosRequestConfig } from "axios";
import { success, warn, error } from "<%= name %>/App/Helpers/Log";

const logRequest = (config: AxiosRequestConfig) => {
  warn(`${config.method?.toUpperCase()} ${config.url}`, config);
};

const logResponse = (response: AxiosResponse) => {
  success(`${response.status} ${response.config.url}`, response);
};

const logError = (response: AxiosResponse) => {
  error(`${response.status} ${response.config.url}`, response);
};

export { logRequest, logResponse, logError };
