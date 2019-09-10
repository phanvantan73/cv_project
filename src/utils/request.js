import axios from 'axios';

import {
  getToken
} from './auth';

// const camelcaseKeys = require('camelcase-keys');

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000,
});

service.interceptors.request.use(
  config => {
    // const token = getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    // config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data;
    }

    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default service;
