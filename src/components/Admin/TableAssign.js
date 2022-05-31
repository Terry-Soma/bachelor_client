import React, { useEffect, useState } from "react";
import {
  InputGroup,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Row,
  FormGroup,
  Form,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import axios from "axios";
export default function TableAssign() {
  var config = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/users",
    headers: {}
  };
  var sAlba = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/s-alba",
    headers: {}
  };
  var aimag = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/aimag",
    headers: {}
  };

  const [isOpen, Open] = useState(false);
  function togg() {
    Open(!isOpen);
  }

  const [isOpen1, Open1] = useState(false);
  function togg1() {
    Open(!isOpen1);
  }

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    axios(config)
      .then(function ({ data }) {
        setData(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios(sAlba)
      .then(function ({ data }) {
        setData2(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios(aimag)
      .then(function ({ data }) {
        setData3(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [assign, setAssign] = useState(false);
  const [val, setVal] = useState();
  const [val2, setVal2] = useState();
  const [val3, setVal3] = useState();
  const [q, setQ] = useState("");
  const handleSearch = (event) => {
    setQ(event.target.value);
  };
  const [searchParam] = useState(["name"]);
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }
  function Assg() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let now = year + "-" + month + "-" + date;

    let dat = { userId: val.Id, s_alba_id: val2, aimag_id: val3, ognoo: now };
    console.log(dat);
  }
  var a = (
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
                    <label>ID</label>
                    <blockquote className="blockquote">
                      <p className="mb-0">{val.Id}</p>
                    </blockquote>
                  </FormGroup>
                </Col>
                <Col className="px-1">
                  <FormGroup>
                    <label>Нэр</label>
                    <blockquote className="blockquote">
                      <p className="mb-0">{val.name}</p>
                    </blockquote>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1">
                  <FormGroup>
                    <label>Утас</label>
                    <blockquote className="blockquote">
                      <p className="mb-0">{val.phone}</p>
                    </blockquote>
                  </FormGroup>
                </Col>
                <Col className="px-1">
                  <FormGroup>
                    <label>Майл хаяг</label>
                    <blockquote className="blockquote">
                      <p className="mb-0">{val.email}</p>
                    </blockquote>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1">
                  <Dropdown direction="right" isOpen={isOpen1} toggle={togg1}>
                    <DropdownToggle caret>Аймаг</DropdownToggle>
                    <DropdownMenu>
                      {data3.map((e) => {
                        return (
                          <DropdownItem
                            onClick={(e) => {
                              setVal3(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={e.id}
                          >
                            {e.ner}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                <Col>
                  <Dropdown direction="right" isOpen={isOpen} toggle={togg}>
                    <DropdownToggle caret>s_alba</DropdownToggle>
                    <DropdownMenu>
                      {data2.map((e) => {
                        return (
                          <DropdownItem
                            onClick={(e) => {
                              setVal2(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={e.SA_id}
                          >
                            {e.SA_id}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
              <Row>
                <Col className="pl-1">
                  <div className="update ml-auto mr-auto">
                    <Button
                      className="btn-round"
                      color="primary"
                      onClick={Assg}
                    >
                      Томилох
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
  );

  return (
    <>
      <div className="content">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Комис томилох</CardTitle>
            </CardHeader>
            <CardBody>
              <Table striped bordered hover responsive>
                <thead className="text-primary">
                  <tr>
                    <th>ID</th>
                    <th>Нэр</th>
                    <th>Майл хаяг</th>
                    <th>Хэлтэс</th>
                    <th className="text-right">
                      <form>
                        <InputGroup className="no-border">
                          <Input
                            onChange={handleSearch}
                            placeholder="Search..."
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="nc-icon nc-zoom-split" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </form>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {search(data).map((e) => {
                    return (
                      <tr>
                        <td> {e.Id} </td>
                        <td> {e.name} </td>
                        <td> {e.email} </td>
                        <td> {e.phone}</td>
                        <td> {e.heltes}</td>
                        <td>
                          <Button
                            onClick={() => {
                              setAssign(!assign);
                              setVal(e);
                            }}
                          >
                            Томилох
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        {assign ? a : ""}
      </div>
    </>
  );
}
