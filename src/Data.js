import axios from "axios";
import { useState, useEffect } from "react";

function Data() {
  var config = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/shalguur",
    headers: {}
  };
  const [Shalguur, setShalguur] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function ({ data }) {
        setShalguur(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  module.exports = {
    Shalguur
  };
}
