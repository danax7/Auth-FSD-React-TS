import axios from 'axios';
import { BASE_URL } from './constants';

export const appInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '1'
  }
});
