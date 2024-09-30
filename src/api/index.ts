import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.changenow.io/v1',
});
