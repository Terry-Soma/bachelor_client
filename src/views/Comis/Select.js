import { Button } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Select(props) {
  let history = useHistory();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  let time = year + "-" + month + "-" + date;
  function send() {
    var data = {
      burtgel_Id: props.data,
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
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Button onClick={send}>Сонгох</Button>
    </>
  );
}
