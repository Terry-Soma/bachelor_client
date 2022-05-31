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

function TableHutEdit(props) {
  const [namee, setName] = useState();
  const [time, setTime] = useState();
  const [bosgo, setBosgo] = useState();
  const [surId, setSurId] = useState();

  function Ed() {
    var config = {
      method: "patch",
      url:
        "https://ikhzasag-backend.herokuapp.com/api/v1/hutulbur/" +
        props.data.Id,
      headers: {},
      data: { name: namee, s_time: time, bosgo_onoo: bosgo, schoolId: surId }
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
              <CardTitle tag="h5">Хөтөлбөр Засах</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Хөтөлбөр ID</label>
                      <Input value={props.data.Id} disabled required />
                    </FormGroup>
                  </Col>
                  <Col className="px-1">
                    <FormGroup>
                      <label>Хөтөлбөр Нэр</label>
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
                      <label>Суралцах хугцаа</label>
                      <Input
                        values={props.data.s_time}
                        onChange={(e) => {
                          setTime(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1">
                    <FormGroup>
                      <label>Босго оноо</label>
                      <Input
                        values={props.data.bosgo_onoo}
                        onChange={(e) => {
                          setBosgo(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Сургууль Id</label>
                      <Input
                        values={props.data.schoolId}
                        onChange={(e) => {
                          setSurId(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
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
export default TableHutEdit;
