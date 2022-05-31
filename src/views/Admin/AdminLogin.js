import { Button, Card, Row, Col } from "react-bootstrap";
// import Pass_I from "componenet/ui/inputs/Pass_I";
// import Email_I from "./component/ui/inputs/Email_I";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import ad from "../../ad";

function AdminLogin() {
  let history = useHistory();

  function to_1() {}

  const responseFacebook = (response) => {
    if (!response.status) {
      ad.st = true;
      history.push("/admin/home");
    }
  };

  const responseGoogle = (response) => {
    if (!response.error) {
      ad.st = true;
      history.push("/admin/home");
    }
  };

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
                  style={{ height: "300px" }}
                  clientId="488115572939-v60kr5j3rfqribiiftoklbkls4mei24a.apps.googleusercontent.com"
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  //   onClick={}
                />
              </Col>
            </Row>
          </div>
        </Card>
      </form>
    </div>
  );
}
export default AdminLogin;
