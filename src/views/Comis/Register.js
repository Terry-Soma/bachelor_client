import React from "react";
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
import { Switch, Route, useHistory, Link } from "react-router-dom";
import Register2 from "./Register2";
import Register3 from "./Register3";

function Register() {
  let burtgels = require("../../Studs.json");
  console.log(burtgels);
  var Hello = "Hello";
  var Selected = {
    EB_Number: "No Entry",
    FirstName: "No Entry",
    LastName: "No Entry",
    Class: [{ ClassName: "No Entry", ClassScore: 0 }]
  };
  let history = useHistory();
  function second() {
    burtgels.map((e) => {
      if (e.EB_Number === Hello) {
        // console.log("OLDOO SHOOCHLOO");
        Selected = e;
        // console.log(Selected);
        history.push({
          pathname: "/comis/add/next",
          state: { detail: Selected }
        });
      } else {
        // console.log("baihku bn");
      }
    });
  }

  return (
    <>
      <div className="content">
      <Switch>
        <Route exact path="/comis/add/">
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Бүртгүүлэгчийн мэдээлэл</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Бүртгэлийн дугаар</label>
                        <Input
                          onChange={(e) => {
                            Hello = e.target.value;
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <div className="update ml-auto mr-auto">
                      <Button onClick={second}>Үргэлжлүүлэх</Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="2"></Col>
        </Row>
        </Route>
          <Route path="/comis/add/next">
            <Register2 />
            <Link to="/comis/add">Back</Link>
          </Route>
          <Route path="/comis/add/2">
            <Register3 />
            <Link to="/comis/add">Wot</Link>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Register;
