import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://165.22.106.66/api/v1',
});
instance.defaults.withCredentials = true;
export default instance;
