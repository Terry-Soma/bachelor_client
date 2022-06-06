import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://elselt.ikhzasag.edu.mn/api/v1',
});
instance.defaults.withCredentials = true;
export default instance;
