import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://elselt.ikhzasag.edu.mn/api/v1',
});
// const instance = axios.create({
//   baseURL: 'http://localhost:1234/api/v1',
// });
instance.defaults.withCredentials = true;
export default instance;
