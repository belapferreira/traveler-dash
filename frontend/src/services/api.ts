import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fileApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FILE_API_URL,
});
