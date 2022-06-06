import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
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
import axios from "../../utils/axios.js";

function AddMaj2(props) {
  const [vis, setVis] = useState(false);
  const [isOpen, Open] = useState(false);
  const [isOpen1, Open1] = useState(false);
  const [isOpen2, Open2] = useState(false);
  const [isOpen3, Open3] = useState(false);
  const [isOpen4, Open4] = useState(false);
  const [Val, setVal] = useState();
  const [name, setname] = useState();
  const [job, setjob] = useState();
  const [description, setDesc] = useState();
  const [Class4, setClass4] = useState();
  let history = useHistory();
  const [Classes, setClasses] = useState([{}]);
  const {
    state: { want }
  } = useLocation();
  var MajPart;
  function togg() {
    Open(!isOpen);
  }
  function togg1() {
    Open1(!isOpen1);
  }
  function togg2() {
    Open2(!isOpen2);
  }
  function togg3() {
    Open3(!isOpen3);
  }
  function togg4() {
    Open4(!isOpen4);
  }

  function subn() {
    const Class = {
      name: name,
      mergeshil: job,
      description: description,
      hutulburId: parseInt(Val),
      suuri_shalgalt: Classes
    };
    axios.post('/mergejil',Class)
      .then((response)=> {
        console.log((response.data));
        history.push("/admin/Maj");
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  const dropdown = (
    <Dropdown isOpen={isOpen1} toggle={togg1}>
      <DropdownToggle caret>{"Шалгуур 1 - Id"}</DropdownToggle>
      <DropdownMenu>
        {props.class.map((e) => {
          return (
            <>
              <DropdownItem
                onClick={(e) => {
                  Classes[0] = {
                    ShalguurId: parseInt(
                      e.target.attributes.dropdownvalue.value
                    ),
                    Shalguuriin_turul: 1
                  };
                }}
                dropDownValue={e.Id}
              >
                {e.Id + ". " + e.name}
              </DropdownItem>
            </>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
  switch (want) {
    case "2":
      MajPart = (
        <>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen1} toggle={togg1}>
                <DropdownToggle caret>
                  {Classes[0].ShalguurId
                    ? Classes[0].ShalguurId
                    : "Шалгуур 1 - Id"}
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[0] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 1
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen2} toggle={togg2}>
                <DropdownToggle caret>"Шалгуур 2 - Id"</DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[1] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 2
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </>
      );
      break;
    case "3":
      MajPart = (
        <>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen1} toggle={togg1}>
                <DropdownToggle caret>
                  {
                    // Classes[0].ShalguurId ?  Classes[0].ShalguurId :
                    "Шалгуур 1 - Id"
                  }
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[0] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 1
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen2} toggle={togg2}>
                <DropdownToggle caret>
                  {
                    // Classes[1].ShalguurId ?  Classes[1].ShalguurId :
                    "Шалгуур 2 - Id"
                  }
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[1] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 2
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen3} toggle={togg3}>
                <DropdownToggle caret>
                  {
                    // Classes[2].ShalguurId ?  Classes[2].ShalguurId :
                    "Шалгуур 3 - Id"
                  }
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[2] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 3
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </>
      );
      break;
    case "4":
      MajPart = (
        <>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen1} toggle={togg1}>
                <DropdownToggle caret>
                  {
                    // Classes[0].ShalguurId ?  Classes[0].ShalguurId :
                    "Шалгуур 1 - Id"
                  }
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[0] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 1
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen2} toggle={togg2}>
                <DropdownToggle caret>
                  {
                    // Classes[1].ShalguurId ?  Classes[1].ShalguurId :
                    "Шалгуур 2 - Id"
                  }
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[1] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 2
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen3} toggle={togg3}>
                <DropdownToggle caret>
                  {
                    // Classes[2].ShalguurId ?  Classes[2].ShalguurId :
                    "Шалгуур 3 - Id"
                  }
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[2] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 3
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen4} toggle={togg4}>
                <DropdownToggle caret>
                  {
                    // Classes[3].ShalguurId ?  Classes[3].ShalguurId :
                    "Шалгуур 4 - Id"
                  }
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[3] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 4
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </>
      );
      break;
    default:
      MajPart = (
        <>
          <Row>
            <Col className="pr-1" md="6">
              <Dropdown isOpen={isOpen1} toggle={togg1}>
                <DropdownToggle caret>
                  {
                    // Classes[0].ShalguurId ?  Classes[0].ShalguurId :
                    "Шалгуур 1 - Id"
                  }
                </DropdownToggle>
                <DropdownMenu>
                  {props.class.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            Classes[0] = {
                              ShalguurId: parseInt(
                                e.target.attributes.dropdownvalue.value
                              ),
                              Shalguuriin_turul: 1
                            };
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </>
      );
      break;
  }

  if (vis === false) {
    return (
      <div className="content">
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Мэргэжил нэмэх</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Мэргэжлийн нэр</label>
                        <Input
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Мэргэшил</label>
                        <Input
                          onChange={(e) => {
                            setjob(e.target.value);
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Тайлбар</label>
                        <Input
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Dropdown direction="right" isOpen={isOpen} toggle={togg}>
                        <DropdownToggle caret>
                          {Val ? Val : "Хөтөлбөрийг сонгоно уу."}
                        </DropdownToggle>
                        <DropdownMenu>
                          {props.data.map((e) => {
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
                                  {e.Id + ". " + e.name}
                                </DropdownItem>
                              </>
                            );
                          })}
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                  {/* {MajPart} */}
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick={subn}
                      >
                        Үргэлжлүүлэх
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
  } else {
    return (
      <div className="content">
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Мэргэжил нэмэх</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="pr-1" md="6">
                    {dropdown}
                    <Button onClick={dropdown}>Add</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default AddMaj2;
