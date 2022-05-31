import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Row,
  FormGroup,
  Form,
  Input
} from "reactstrap";
import axios from "axios";

function TableMajEdit(props) {
  const [namee, setName] = useState();
  const [mergeshil, setMergeshil] = useState();
  const [hutId, setHutId] = useState();

  function Ed() {
    var config = {
      method: "patch",
      url:
        "https://ikhzasag-backend.herokuapp.com/api/v1/mergejil/" +
        props.data.Id,
      headers: {},
      data: { name: namee, mergeshil: mergeshil, hutulburId: hutId }
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="content">
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Мэргэжил Засах</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Мэргэжил ID</label>
                      <Input value={props.data.Id} disabled required />
                    </FormGroup>
                  </Col>
                  <Col className="px-1">
                    <FormGroup>
                      <label>Мэргэжил Нэр</label>
                      <Input
                        values={props.data.name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Мэргэшил</label>
                      <Input
                        values={props.data.mergeshil}
                        onChange={(e) => {
                          setMergeshil(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1">
                    <FormGroup>
                      <label>Хөтөлбөрийн Id</label>
                      <Input
                        values={props.data.hutulburId}
                        onChange={(e) => {
                          setHutId(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1">
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick={Ed}
                      >
                        Засах
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col md="2"></Col>
      </Row>
    </div>
  );
}
export default TableMajEdit;
