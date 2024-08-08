import StorageService from '@services/StorageService';
import axios from 'axios';

const url =
  process.env.baseURL ?? 'https://deadly-coherent-dove.ngrok-free.app/api/v1/';

export const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use(async function (config: any) {
  const token = await StorageService.getItem('token');
  if (token) {
    config.headers['Authorization'] = 'Token ' + token;
  }

  return config;
});

api.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async function (error: any) {
    if (error?.response?.status === 401) {
    }
    return Promise.reject(error);
  },
);
