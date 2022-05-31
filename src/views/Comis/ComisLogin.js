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

  useEffect(() => {
    axios(config)
      .then(function ({ data }) {
        setData(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const responseGoogle = (response) => {
    if (!response.error) {
      data.map((e) => {
        if (e.User.email === response.profileObj.email) {
          cm.aimag = e.aimag_id;
          cm.st = true;
          history.push("/comis/home");
        }
      });
    }
  };
  const responseFacebook = (response) => {
    console.log(response);
    if (!response.status) {
      cm.st = true;
      history.push("/comis/home");
    }
    console.log(response);
  };
  function to_1() {
    // history.push("/comis");
  }

  return (
    <div className="mt-5 mt-5">
      <form onSubmit={to_1}>
        <Card className="mx-auto Card" bg="light">
          <Card.Title
            className="text-light text-center Puk PadTop"
            style={{ height: "5rem" }}
          >
            Login
          </Card.Title>
          <div
            style={{
              padding: "2rem"
            }}
          >
            <Row>
              <Col>
                <GoogleLogin
                  clientId="488115572939-v60kr5j3rfqribiiftoklbkls4mei24a.apps.googleusercontent.com"
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
              </Col>
            </Row>
          </div>
        </Card>
      </form>
    </div>
  );
}
export default ComisLogin;
