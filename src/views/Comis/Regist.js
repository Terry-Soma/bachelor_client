import {
  Card,
  Row,
  Col,
  Input,
  Button,
  Form,
  FormGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Contex from "../../context.js";
import { useHistory } from "react-router-dom";
import cm from "../../cm";

export default function Regist() {
  const [data, setData] = useState([]);
  var shalguur = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/shalguur",
    headers: {
      "Content-Type": "application/json"
    }
  };

  useEffect(() => {
    axios(shalguur)
      .then(function ({ data }) {
        setData(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [Val, setVal] = useState("");
  const [isOpen, Open] = useState(false);
  function togg() {
    Open(!isOpen);
  }

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
  const [count, addCount] = useState(2);
  const [arr, setArr] = useState([{ id: 1, name: "ЭЕШ", numb: "0" }]);

  function addN() {
    addCount(count + 1);
    setArr([...arr, { id: count, name: "ЭЕШ", numb: "0" }]);
  }

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
      aimag_id: cm.aimag
    };
    var config = {
      method: "post",
      url: "https://ikhzasag-backend.herokuapp.com/api/v1/elsegch",
      headers: {
        "Content-Type": "application/json"
      },
      data: dat
    };
    console.log(dat);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        Contex.succ = true;
        history.push("/comis/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div className="content">
        <Card className="Regist_Card mx-auto">
          <Row>
            <Col className="Regist_Col_1">Овог</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                className="Regist_Col_2"
                required
                type="text"
                pattern={pattern}
                title="Монгол үсгээр оруулна уу"
              />
            </Col>
          </Row>
          <Row>
            <Col className="Regist_Col_1">Нэр</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                className="Regist_Col_2"
                required
                type="text"
                pattern={pattern}
                title="Монгол үсгээр оруулна уу"
              />
            </Col>
          </Row>
          <Row>
            <Col className="Regist_Col_1">Регистерийн дугаар</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setRegD(e.target.value);
                }}
                className="Regist_Col_2"
                required
                type="text"
                pattern="[А-Я]{2}[0-9]{8}"
                title="Жишээ : УК01252051"
              />
            </Col>
          </Row>
          <Row>
            <Col className="Regist_Col_1">Гэрчилгээний дугаар</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setGerd(e.target.value);
                }}
                className="Regist_Col_2"
                required
                type="number"
                pattern="[0-9]"
                title="Зөвхөн дугаар оруулна уу."
              />
            </Col>
          </Row>
          <Row>
            <Col className="Regist_Col_1">Төлбөр төлөлт</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                className="Regist_Col_2"
                required
                type="number"
                pattern="[0-9]"
                title="Зөвхөн дугаар оруулна уу."
              />
            </Col>
          </Row>
          <Row>
            <Col className="Regist_Col_1">Утасны дугаар</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setCell(e.target.value);
                }}
                className="Regist_Col_2"
                required
                type="number"
                pattern="[0-9]{8}"
                title="Зөвхөн дугаар оруулна уу."
              />
            </Col>
          </Row>
          <Row>
            <Col className="Regist_Col_1">Цахим шуудан</Col>
            <Col>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="Regist_Col_2"
                required
                type="email"
                title="Жишээ : darky@gmail.com"
              />
            </Col>
          </Row>
          <Row>
            <Col className="Regist_Col_1">БҮТ дугаар</Col>
            <Col>
              <Input
                onChange={(e) => {
                  Contex.bt = e.target.value;
                }}
                className="Regist_Col_2"
                required
                type="number"
                pattern="[0-9]"
                title="Зөвхөн дугаар оруулна уу."
              />
            </Col>
          </Row>
          {arr.map((e) => {
            return (
              <Row>
                <Col className="Regist_Col_1">
                  {e.name}.{e.id}
                </Col>
                <Col>
                  <Dropdown direction="right" isOpen={isOpen} toggle={togg}>
                    <DropdownToggle caret>
                      Шалгуурын нэрийг сонгоно уу.
                    </DropdownToggle>
                    <DropdownMenu>
                      {data.map((b) => {
                        return (
                          <DropdownItem
                            onClick={(c) => {
                              e.id = c.target.attributes.dropdownvalue.value;
                            }}
                            dropDownValue={b.Id}
                          >
                            {b.name}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                <Col>
                  <Input
                    onChange={(a) => {
                      e.number = a.target.value;
                    }}
                    className="Regist_Col_2"
                    required
                    type="number"
                  />
                </Col>
              </Row>
            );
          })}
          <Button onClick={addN}>Add</Button>
          <Button onClick={send}>БҮртгэх</Button>
        </Card>
      </div>
    </>
  );
}
