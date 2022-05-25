import axios, { AxiosRequestConfig } from 'axios';

export function request(config: AxiosRequestConfig) {
  config.headers = {
    'Content-Type': 'application/json',
    ...config.headers,
  };

  config.baseURL = `${process.env.NEXT_PUBLIC_API_END_POINT}`;

  return axios.create().request(config);
}
