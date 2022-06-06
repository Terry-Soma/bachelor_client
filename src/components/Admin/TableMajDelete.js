import React from "react";
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

function TableMajDelete(props) {
 
  function Del() {
    axios.delete("/mergejil/" + props.data.Id)
      .then((response)=> {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) =>{
        console.log(error);
      });
  }
  //hutulburId, mergeshil, name, Id
  return (
    <div className="content">
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Мэргэжил</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Мэргэжлийн Id</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.Id}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                  <Col className="px-1">
                    <FormGroup>
                      <label>Мэргэжлийн нэр</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.name}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Мэргэшил</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.mergeshil}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                  <Col className="px-1">
                    <FormGroup>
                      <label>Хөтөлбөрийн Id</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.hutulburId}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1">
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick={Del}
                      >
                        Устгах
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
export default TableMajDelete;
