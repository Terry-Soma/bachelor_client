import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Input,
  Button,
  Form,
  FormGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Contex from "../../context.js";
import { useHistory } from "react-router-dom";

export default function Med2() {
  let history = useHistory();
  const [RegD, setRegD] = useState();
  const [fName, setFname] = useState();
  const [lName, setLname] = useState();
  const [gerD, setGerd] = useState();
  const [status, setStatus] = useState();
  const [Cell, setCell] = useState();
  const [Email, setEmail] = useState();
  const [But, setBut] = useState();
  const [pict, setPict] = useState();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [val, setVal] = useState(22);
  const [isOpen, Open] = useState(false);
  function togg() {
    Open(!isOpen);
  }

  var load;
  var config4 = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/aimag",
    headers: {
      "Content-Type": "application/json"
    }
  };
  useEffect(() => {
    var config3 = {
      method: "get",
      url: `https://ikhzasag-backend.herokuapp.com/api/v1/elsegch/${Contex.bt}/mergejil`,
      headers: {
        "Content-Type": "application/json"
      }
    };

    axios(config3)
      .then(function (response) {
        setData3(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    var config2 = {
      method: "get",
      url: "https://ikhzasag-backend.herokuapp.com/api/v1/elsegch",
      headers: {
        "Content-Type": "application/json"
      }
    };

    axios(config4)
      .then(function (response) {
        setData2(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios(config2)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  var lol = true;
  const pattern =
    "[фцужэнгшүзещкъпдлорхаөбыйячёсмитьвюФЦУЖЭНГШҮЗКЪПДЛОРХАӨБЫЙЯЧЁСМИТЬВЮ]+";
  function send() {
    let dat = {
      burtgel_Id: Contex.bt,
      lname: lName,
      fname: fName,
      img: "img.jps",
      rd: RegD,
      gerchilgee_dugaar: gerD,
      bichig_barimt: 1,
      utas: Cell,
      email: Email,
      aimag_id: parseInt(val)
    };
    var config = {
      method: "post",
      url: "https://ikhzasag-backend.herokuapp.com/api/v1/elsegch",
      headers: {
        "Content-Type": "application/json"
      },
      data: dat
    };
    load = true;
    axios(config)
      .then(function (response) {
        Contex.succ = true;
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (load === true) {
    return <>Loading</>;
  }

  if (Contex.succ === true) {
    const wot = (
      <>
        <Card className="Majors-card mx-auto">
          <CardHeader>
            <CardTitle className="Majors-head">
              Таны сонгосон мэргэжилүүд
            </CardTitle>
          </CardHeader>
          <CardBody
            className="mx-auto"
            style={{ backgroundColor: "rgb(75, 214, 202)" }}
          >
            {data3.map((e) => {
              return (
                <>
                  {" "}
                  <hr />
                  <Row className="Majors-unit" style={{ borderRadius: "1rem" }}>
                    {e.Mergejil.name}
                  </Row>
                </>
              );
            })}
          </CardBody>
        </Card>
      </>
    );
    return (
      <>
        {!data[1] ? "Loading" : ""}
        <div>
          <Card className="Med_Card mx-auto">
            <CardHeader>
              <CardTitle style={{ color: "white" }}>
                Оруулсан хувийн мэдээлэл
              </CardTitle>
            </CardHeader>
            <CardBody>
              <hr />
              {data.map((e) => {
                if (parseInt(Contex.bt) === e.burtgel_Id) {
                  return (
                    <>
                      <Row>
                        <Col>
                          <Col className="Med_Col_1">Овог</Col>
                        </Col>
                        <Col>
                          <Input className="Med_Col_2" value={e.lname} />
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col>
                          <Col className="Med_Col_1">Нэр</Col>
                        </Col>
                        <Col>
                          <Input className="Med_Col_2" value={e.fname} />
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col>
                          <Col className="Med_Col_1">Регистерийн дугаар</Col>
                        </Col>
                        <Col>
                          <Input className="Med_Col_2" value={e.rd} />
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col>
                          <Col className="Med_Col_1">БҮТ дугаар</Col>
                        </Col>
                        <Col>
                          <Input className="Med_Col_2" value={e.burtgel_Id} />
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col>
                          <Col className="Med_Col_1">Гэрчилгээний дугаар</Col>
                        </Col>
                        <Col>
                          <Input
                            className="Med_Col_2"
                            value={e.gerchilgee_dugaar}
                          />
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col>
                          <Col className="Med_Col_1">Утасны дугаар</Col>
                        </Col>
                        <Col>
                          <Input className="Med_Col_2" value={e.utas} />
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col>
                          <Col className="Med_Col_1">Цахим шуудан</Col>
                        </Col>
                        <Col>
                          <Input className="Med_Col_2" value={e.email} />
                        </Col>
                      </Row>
                    </>
                  );
                }
              })}
            </CardBody>
          </Card>
          {!data3[0] ? "" : wot}
        </div>
      </>
    );
  }

  return (
    <>
      <Card className="Med_Card mx-auto">
        <CardHeader>
          <CardTitle style={{ color: "white" }}>
            Хувийн мэдээлэлээ оруулна уу
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="Med_Col_1">Овог</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                className="Med_Col_2"
                required
                type="text"
                pattern={pattern}
                title="Монгол үсгээр оруулна уу"
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="Med_Col_1">Нэр</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                className="Med_Col_2"
                required
                type="text"
                pattern={pattern}
                title="Монгол үсгээр оруулна уу"
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="Med_Col_1">Регистерийн дугаар</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setRegD(e.target.value);
                }}
                className="Med_Col_2"
                required
                type="text"
                pattern="[А-ЯӨҮ]{2}[0-9]{8}"
                title="Жишээ : УК01252051"
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="Med_Col_1">Гэрчилгээний дугаар</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setGerd(e.target.value);
                }}
                className="Med_Col_2"
                required
                type="number"
                pattern="[0-9]"
                title="Зөвхөн дугаар оруулна уу."
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="Med_Col_1">Утасны дугаар</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setCell(e.target.value);
                }}
                className="Med_Col_2"
                required
                type="number"
                pattern="[0-9]{8}"
                title="Зөвхөн дугаар оруулна уу."
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="Med_Col_1">Цахим шуудан</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="Med_Col_2"
                required
                type="email"
                title="Жишээ : darky@gmail.com"
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="Med_Col_1">БҮТ дугаар</Col>
            <Col>
              <Input
                value={Contex.bt}
                className="Med_Col_2"
                required
                type="number"
                pattern="[0-9]"
                title="Зөвхөн дугаар оруулна уу."
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="Med_Col_1">{val}</Col>
            <Col>
              <Form>
                <Dropdown isOpen={isOpen} toggle={togg}>
                  <DropdownToggle caret>{val}</DropdownToggle>
                  <DropdownMenu
                    style={{ maxHeight: "276px", overflow: "scroll" }}
                  >
                    {data2.map((e) => {
                      return (
                        <>
                          <DropdownItem
                            onClick={(e) => {
                              setVal(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={e.Id}
                          >
                            {e.Id + ". " + e.ner}
                          </DropdownItem>
                        </>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={send} className="Med_Col_Button ">
                Мэдээлэлээ оруулах
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
