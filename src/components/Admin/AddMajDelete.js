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

function TableHutDelete(props) {
  
  function Del() {
    console.log(config.url);
    axios.delete('/hutulbur/'+props.data.Id)
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
              <CardTitle tag="h5">Хөтөлбөр</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Хөтөлбөр ID</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.Id}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                  <Col className="px-1">
                    <FormGroup>
                      <label>Хөтөлбөр нэр</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.name}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Суралцах хугцаа</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.s_time}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                  <Col className="px-1">
                    <FormGroup>
                      <label>Босго оноо</label>
                      <blockquote className="blockquote">
                        <p className="mb-0">{props.data.bosgo_onoo}</p>
                      </blockquote>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Сургууль Id</label>
                      <blockquote className="blockquote">
                        <p
                          className="mb-0"
                          style={{ maxHeight: "300px", overflow: "auto" }}
                        >
                          {props.data.schoolId}
                        </p>
                      </blockquote>
                    </FormGroup>
                  </Col>
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
export default TableHutDelete;
