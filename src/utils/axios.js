import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:1234/api/v1',
});
instance.defaults.withCredentials = true;
export default instance;
