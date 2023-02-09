import axios from 'axios';

const baseURL: string = 'https://jsonplaceholder.typicode.com/';
export const api = axios.create({
  baseURL,
});
