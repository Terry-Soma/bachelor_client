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
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddHut() {
  let history = useHistory();
  const [val, setVal] = useState();
  const [Open, setOpen] = useState("false");
  const [name, setname] = useState();
  const [time, settime] = useState();
  const [score, setscore] = useState();
  const [desc, setdesc] = useState();
  function togg() {
    setOpen(!Open);
  }
  var config = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/school",
    headers: {}
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function ({ data }) {
        console.log(data.data);
        setData(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  function cons() {
    console.log(name, time, score, desc, val);
    const data = {
      name: name,
      s_time: time,
      shalguur: "",
      description: desc,
      bosgo_onoo: score,
      schoolId: val
    };
    var config = {
      method: "post",
      url: "https://ikhzasag-backend.herokuapp.com/api/v1/hutulbur",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push("/admin/Hut");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="3"></Col>
          <Col md="5">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Хөтөлбөр нэмэх</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row className="mx-auto">
                    <FormGroup>
                      <label>name</label>
                      <Input
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                        required
                        type="text"
                      />
                    </FormGroup>
                  </Row>
                  <Row className="mx-auto">
                    <FormGroup>
                      <label>s_time</label>
                      <Input
                        onChange={(e) => {
                          settime(e.target.value);
                        }}
                        required
                        type="text"
                      />
                    </FormGroup>
                  </Row>
                  <Row className="mx-auto">
                    <FormGroup>
                      <label>description</label>
                      <Input
                        onChange={(e) => {
                          setdesc(e.target.value);
                        }}
                        required
                        type="text"
                      />
                    </FormGroup>
                  </Row>
                  <Row className="mx-auto">
                    <FormGroup>
                      <label>Босго оноо</label>
                      <Input
                        onChange={(e) => {
                          setscore(e.target.value);
                        }}
                        required
                        type="number"
                      />
                    </FormGroup>
                  </Row>
                  <Row>
                    <Dropdown isOpen={Open} toggle={togg}>
                      <DropdownToggle caret>
                        {" "}
                        Сургууль сонгоно уу{" "}
                      </DropdownToggle>
                      <DropdownMenu>
                        {data.map((e) => {
                          return (
                            <>
                              <DropdownItem
                                onClick={(e) => {
                                  setVal(
                                    e.target.attributes.dropdownvalue.value
                                  );
                                }}
                                dropDownValue={e.Id}
                              >
                                {e.name}
                              </DropdownItem>
                            </>
                          );
                        })}
                      </DropdownMenu>
                    </Dropdown>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick={cons}
                      >
                        Бүртгэх
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
    </>
  );
}
export default AddHut;
