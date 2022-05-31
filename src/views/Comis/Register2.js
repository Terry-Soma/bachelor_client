import { Button, Card, Row, Col, Input, FormGroup, Form } from "reactstrap";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function Register2() {
  let history = useHistory();
  const {
    state: { detail }
  } = useLocation();
  function Choose() {
    history.push({
      pathname: "/comis/add/2",
      state: { detail: detail }
    });
  }
  const Information = (
    <>
      <Col className="mx-auto" md="8">
        <Card className="card-user">
          <Form>
            <Row className="pl-3">
              <Col className="mx-auto" md="4">
                <FormGroup>
                  <label>Ерөнхий боловсролын дугаар</label>
                  <Input defaultValue={detail.EB_Number} disabled type="text" />
                </FormGroup>
              </Col>
              <Col className="mx-auto" md="4">
                <FormGroup>
                  <label>Регистэрийн дугаар</label>
                  <Input
                    defaultValue={detail.RegistryNumber}
                    disabled
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto" md="4">
                <FormGroup>
                  <label>Овог</label>
                  <Input defaultValue={detail.FirstName} disabled type="text" />
                </FormGroup>
              </Col>
              <Col className="mx-auto" md="4">
                <FormGroup>
                  <label>Нэр</label>
                  <Input defaultValue={detail.LastName} disabled type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mx-auto">
              <h4>ЭЕШ дүн</h4>
              <Col>
                {detail.Class.map((e) => {
                  return (
                    <>
                      <Row>{e.ClassName}</Row>
                      <Row>{e.ClassScore}</Row>
                    </>
                  );
                })}
              </Col>
            </Row>
          </Form>
          <Col md="2" />
        </Card>
      </Col>
    </>
  );
  return (
    <>
      {Information}
      <div>
        <Button onClick={Choose}>Мэргэжил сонгох</Button>
      </div>
    </>
  );
}
export default Register2;
