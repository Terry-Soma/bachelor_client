import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import { useHistory } from "react-router-dom";

function AddComis() {
  var axios = require("axios");
  let history = useHistory();
  var Name, Mail, Phone, Part;

  function add() {
    console.log(Name, Phone, Mail);
    const data = { name: Name, email: Mail, phone: Phone, heltes: Part };
    var config = {
      method: "post",
      url: "https://ikhzasag-backend.herokuapp.com/api/v1/users/",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push("/admin/comis");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Комисс нэмэх</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1 mx-auto" md="6">
                      <FormGroup>
                        <label>Нэр</label>
                        <Input
                          onChange={(e) => {
                            Name = e.target.value;
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1 mx-auto" md="6">
                      <FormGroup>
                        <label>Майл хаяг</label>
                        <Input
                          onChange={(e) => {
                            Mail = e.target.value;
                          }}
                          required
                          type="mail"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1 mx-auto" md="6">
                      <FormGroup>
                        <label>Утасны дугаар</label>
                        <Input
                          onChange={(e) => {
                            Phone = e.target.value;
                          }}
                          required
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1 mx-auto" md="6">
                      <FormGroup>
                        <label>Хэлтэс</label>
                        <Input
                          onChange={(e) => {
                            Part = e.target.value;
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="update mx-auto">
                    <Button
                      className="btn-round mx-auto"
                      color="primary"
                      onClick={add}
                    >
                      Бүртгэх
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="2"></Col>
        </Row>
      </div>
    </>
  );
}
export default AddComis;
