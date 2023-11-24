import axios from 'axios';

export const api = axios.create({
  baseURL:'https://pw1-nodejs-client-transaction-api.onrender.com'
})