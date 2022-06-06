import { Card, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import ad from "../../ad";

const AdminLogin = () => {
  let history = useHistory();


  // const responseFacebook = (response) => {
  //   if (!response.status) {
  //     ad.st = true;
  //     history.push("/admin/home");
  //   }
  // };

  const responseGoogle = (response) => {

    ad.st = true;
    console.log("first")
    history.push("/admin/home");
    if (!response.error) {
     
    }
  };

  return (
    <div className="container my-5 w-50">
        <Card className="mx-auto p-5 d-flex justify-content-center align-items-center" bg="light">
        <Card.Title as="p"
            className="text-center lead fs-4"
          >
            Админ | Сургалтын алба 
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
export default AdminLogin;
