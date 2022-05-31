import React, { useState } from "react";
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

function AdminBASC() {
  const [val, setVal] = useState(410);

  var ch;

  function change() {
    setVal(ch);
    console.log();
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Оноо солих</CardTitle>
              </CardHeader>
              <Col className="mx-auto" md="4">
                <FormGroup>
                  <label>Хуучих Оноо</label>
                  <Input disabled Value={val} type="number" />
                </FormGroup>
              </Col>
              <Col className="mx-auto" md="4">
                <FormGroup>
                  <label>Солих Оноо</label>
                  <Input
                    onChange={(e) => {
                      ch = e.target.value;
                    }}
                    required
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Button onClick={change}>Солих</Button>
            </Card>
          </Col>
          <Col md="2"></Col>
        </Row>
      </div>
    </>
  );
}
export default AdminBASC;
