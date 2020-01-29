import { success, warn, error } from "<%= name %>/App/Helpers/Log";

interface Request {
  method: string;
  url: string;
}

interface Response {
  status: number;
  config: Request;
}

const logRequest = (config: Request) => {
  warn(`${config.method.toUpperCase()} ${config.url}`, config);
};

const logResponse = (response: Response) => {
  success(`${response.status} ${response.config.url}`, response);
};

const logError = (response: Response) => {
  error(`${response.status} ${response.config.url}`, response);
};

export { logRequest, logResponse, logError };
