import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://ikhzasag-backend.herokuapp.com/api/v1',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});
export default instance;
