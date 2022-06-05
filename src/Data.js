import axios from './utils/axios.js';
import { useState, useEffect } from 'react';

function Data() {
  // var config = {
  //   method: 'get',
  //   url: 'https://ikhzasag-backend.herokuapp.com/api/v1/shalguur',
  //   headers: {},
  // };
  const [Shalguur, setShalguur] = useState([]);
  useEffect(() => {
    axios
      .get('/shalguur')
      .then(({ data }) => {
        setShalguur(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  module.exports = {
    Shalguur,
  };
}
