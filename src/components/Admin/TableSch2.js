import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Row,
  FormGroup,
  Form
} from "reactstrap";
import axios from "../../utils/axios.js";

function TableSch2(props) {
 
  function Del() {
    axios.delete("/school/" + props.data.Id)
      .then((response)=> {
        console.log(JSON.stringify(response.data));
      })
      .catch((error)=> {
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
              <CardTitle tag="h5">Сургууль устгах</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Сургуулийн ID</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.Id}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                  <Col className="px-1">
                    <FormGroup>
                      <label>Сургуулийнй Нэр</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.name}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Тайлбар</label>
                      <blockquote className="blockquote">
                        <p
                          className="mb-0"
                          style={{ maxHeight: "300px", overflow: "auto" }}
                        >
                          {props.data.description}
                        </p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                  <Col className="pl-1">
                    <FormGroup>
                      <label>Хаяг</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.address}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button className="btn-round" color="primary" onClick={Del}>
                      Устгах
                    </Button>
                  </div>
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
export default TableSch2;
