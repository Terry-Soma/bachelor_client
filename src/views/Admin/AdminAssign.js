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
import axios from "../../utils/axios.js";
export default function AdminAssign() {
  const [isOpen, Open] = useState(false);
  function togg() {
    Open(!isOpen);
  }

  const [isOpen1, Open1] = useState(false);
  function togg1() {
    Open1(!isOpen1);
  }

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(({ data })=> {
        setData(data.data);
      })
      .catch((error) =>{
        console.log(error);
      });
    axios.get('/s-alba')
      .then(({ data }) =>{
        setData2(data.data);
      })
      .catch((error) =>{
        console.log(error);
      });
    axios.get('/aimag')
      .then(({ data }) =>{
        setData3(data.data);
      })
      .catch((error) =>{
        console.log(error);
      });
  }, []);

  const [assign, setAssign] = useState(false);
  const [val, setVal] = useState({
    id: 0,
    name: "",
    mail: "",
    phone: "",
    helter: ""
  });
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
    setAssign(false);

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let now = year + "-" + month + "-" + date;

    let dat = { userId: val.Id, s_alba_id: val2, aimag_id: val3, ognoo: now };

    axios.post('/komis',dat)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
                    <DropdownToggle caret>
                      {val3 ? val3 : "Аймаг"}
                    </DropdownToggle>
                    <DropdownMenu
                      style={{ maxHeight: "300px", overflow: "auto" }}
                    >
                      {data3.map((e) => {
                        return (
                          <DropdownItem
                            onClick={(e) => {
                              setVal3(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={e.Id}
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
                    <DropdownToggle caret>
                      {val2 ? val2 : "s_alba"}
                    </DropdownToggle>
                    <DropdownMenu
                      style={{ maxHeight: "300px", overflow: "auto" }}
                    >
                      {data2.map((e) => {
                        return (
                          <DropdownItem
                            onClick={(e) => {
                              setVal2(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={e.SA_Id}
                          >
                            {e.SA_Id}
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
                      href="#Top"
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
      <section id="Top" />
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
                            href="#Assign"
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
        <section id="Assign">{assign ? a : ""}</section>
      </div>
    </>
  );
}
