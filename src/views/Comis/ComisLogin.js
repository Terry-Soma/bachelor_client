import { Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import cm from "../../cm.js";
import axios from "axios";
function ComisLogin() {
  let history = useHistory();

  const [data, setData] = useState([]);

  var config = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/komis",
    headers: {
      "Content-Type": "application/json"
    }
  };

  // useEffect(() => {
  //   axios(config)
  //     .then(function ({ data }) {
  //       setData(data.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const responseGoogle = (response) => {
    cm.st = true;
        history.push("/comis/home");
    if (!response.error) {
      // data.map((e) => {
      //   if (e.User.email === response.profileObj.email) {
      //     cm.aimag = e.aimag_id;
      //   
      //   }
      // });
    }
  };
  // const responseFacebook = (response) => {
  //   console.log(response);
  //   if (!response.status) {
  //     cm.st = true;
  //     history.push("/comis/home");
  //   }
  //   console.log(response);
  // };
  // function to_1() {
  //   // history.push("/comis");
  // }

  return (
    <div className="container my-5 w-50">
        <Card className="mx-auto p-5 d-flex justify-content-center align-items-center" bg="light" >
          <Card.Title as="p"
            className="text-center lead fs-4"
          >
            Комисс 
          </Card.Title>
         
            <Row>
              <Col>
                <GoogleLogin
                className="py-2"
                   clientId="488115572939-v60kr5j3rfqribiiftoklbkls4mei24a.apps.googleusercontent.com"
                   buttonText="Google Account-аар нэвтрэх"
                   onSuccess={responseGoogle}
                   onFailure={responseGoogle}
                />
              </Col>
            </Row>
        </Card>
    </div>
  );
}
export default ComisLogin;
