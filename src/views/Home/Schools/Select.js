import { Button } from "reactstrap";
import { useState, useEffect } from "react";
import Contex from "../../../context.js";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Select(props) {
  let history = useHistory();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  let time = year + "-" + month + "-" + date;
  const [info, setInfo] = useState([]);
  const [st, setSt] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://ikhzasag-backend.herokuapp.com/api/v1/elsegch/${Contex.bt}/mergejil`
      )
      .then(
        ({ data }) => setInfo(data.data),
        info.map((e) => {
          // console.log(e.mergejilId);
          if (e.mergejilId === props.dat) {
            console.log(e.mergejilId);
            setSt(true);
          }
        })
      )
      .catch((err) => console.log(err));
  }, []);

  if (props.state === false) {
    return <></>;
  }
  function send() {
    var data = {
      burtgel_Id: Contex.bt,
      mergejils: [props.dat],
      ognoo: time
      // tulburId: true
    };
    var config = {
      method: "post",
      url: "https://ikhzasag-backend.herokuapp.com/api/v1/elsegch/mergejil",
      headers: {},
      data: data
    };
    console.log(data);
    axios(config)
      .then(function (response) {
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  var yes = (
    <div className="Select-1 my-auto" onClick={send}>
      Сонгох
    </div>
  );
  return <>{st == true ? "" : yes}</>;
}
