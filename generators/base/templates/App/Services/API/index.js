// @flow
import axios from 'axios';
import { logRequest, logResponse, logError } from './logging';
import { API_URL } from '<%= name %>/App/Config';

const <%= name %>Axios = axios.create({
  baseURL: API_URL,
});

<%= name %>Axios.interceptors.request.use((config) => {
  logRequest(config);
  return config;
}, (error) => {
  console.log('request errr', error)
  return Promise.reject(error);
});

<%= name %>Axios.interceptors.response.use((response) => {
  logResponse(response);
  return response;
}, (error) => {
  if (error.response) {
    logError(error.response)
  }
  return Promise.reject(error);
});

export default <%= name %>Axios;
