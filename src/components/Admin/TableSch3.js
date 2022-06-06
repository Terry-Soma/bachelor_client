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
import axios from "../../utils/axios.js";

function TableSch3(props) {
  const [namee, setName] = useState();
  const [desc, setDesc] = useState();
  const [addr, setAddr] = useState();

  function Ed() {
    axios.patch('/school/'+props.data.Id,
    { name: namee, address: addr, description: desc } )
      .then((response) => {
      })
      .catch((error) =>{
      });
  }
  return (
    <div className="content">
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Сургууль Засах</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1">
                    <FormGroup>
                      <label>Сургуулийн ID</label>
                      <Input value={props.data.Id} disabled required />
                    </FormGroup>
                  </Col>
                  <Col className="px-1">
                    <FormGroup>
                      <label>Сургуулийн Нэр</label>
                      <Input
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
                      <label>Тайлбар</label>
                      <Input
                        onChange={(e) => {
                          setDesc(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1">
                    <FormGroup>
                      <label>Хаяг</label>
                      <Input
                        onChange={(e) => {
                          setAddr(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button className="btn-round" color="primary" onClick={Ed}>
                      Засах
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
export default TableSch3;
