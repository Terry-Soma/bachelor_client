import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody,
  Input,
  Row,
  Col,
  Progress
} from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Contex from "../../context";
function Med() {
  let history = useHistory();
  // if (!Contex.bt) {
  //   history.push("/");
  // }

  const [data, setData] = useState([]);
  function phase2() {
    setDat(2);
  }
  function phase3() {
    setDat(3);
  }
  function phase4() {
    setDat(4);
  }
  function phase1() {
    setDat(1);
  }

  function send() {
    let dat = {
      burtgel_Id: Contex.bt,
      lname: lastName,
      fname: firstName,
      img: img,
      rd: reg,
      gerchilgee_dugaar: ger,
      bichig_barimt: 1,
      utas: cell,
      email: mail
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
        Contex.succ = true;
        history.push("/");
        ges();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function ges() {
    var config1 = {
      method: "get",
      url: `https://ikhzasag-backend.herokuapp.com/api/v1/elsegch/${Contex.bt}`,
      headers: {}
    };
    axios(config1)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const [dat, setDat] = useState();

  const [cell, setCell] = useState();
  const [lastName, setlastName] = useState();
  const [firstName, setfirstName] = useState();
  const [img, setImg] = useState();
  const [reg, setReg] = useState();
  const [ger, setGer] = useState();
  const [bich, setBich] = useState();
  const [mail, setMail] = useState();
  var This;
  switch (dat) {
    case 2: {
      This = (
        <>
          <div className="p_info mx-auto">
            <Progress className="p_info_prog" multi>
              <Progress
                bar
                animated
                stripes
                color="prime"
                value="50"
              ></Progress>
              <Progress bar stripes color="prime" value="50"></Progress>
            </Progress>
            <Row className="p_info_row">
              <Col>
                <div className="p_info_label">Овог</div>
              </Col>
              <Col className="my-auto">
                <Input
                  className="p_info_field mx-auto"
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                  required
                  type="text"
                  defaultValue=""
                />
              </Col>
            </Row>
            <Row className="p_info_row">
              <Col>
                <div className="p_info_label">Нэр</div>
              </Col>
              <Col className="my-auto">
                <Input
                  className="p_info_field mx-auto"
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                  required
                  defaultValue=""
                  type="text"
                />
              </Col>
            </Row>
            <Row className="p_info_row">
              <Col>
                <div className="p_info_label">Зураг</div>
              </Col>
              <Col className="my-auto">
                <Input
                  className="p_info_field mx-auto"
                  onChange={(e) => {
                    setImg(e.target.value);
                  }}
                  required
                  defaultValue=""
                  type="file"
                />
              </Col>
            </Row>
            <Button onClick={phase1}>Буцах</Button>
            <Button onClick={phase3}>Үргэлжлүүлэх</Button>
          </div>
        </>
      );
      break;
    }
    case 3: {
      This = (
        <>
          <div className="p_info mx-auto">
            <Progress className="p_info_prog" multi>
              <Progress
                bar
                animated
                stripes
                color="prime"
                value="75"
              ></Progress>
              <Progress bar stripes color="prime" value="25"></Progress>
            </Progress>
            <Row className="p_info_row">
              <Col>
                <div className="p_info_label">Регистерийн дугаар</div>
              </Col>
              <Col className="my-auto">
                <Input
                  className="p_info_field mx-auto"
                  onChange={(e) => {
                    setReg(e.target.value);
                  }}
                  required
                  type="text"
                  defaultValue=""
                />
              </Col>
            </Row>
            <Row className="p_info_row">
              <Col>
                <div className="p_info_label">Гэрчилгээний дугаар</div>
              </Col>
              <Col className="my-auto">
                <Input
                  className="p_info_field mx-auto"
                  onChange={(e) => {
                    setGer(e.target.value);
                  }}
                  required
                  type="number"
                  defaultValue=""
                />
              </Col>
            </Row>
            <Button onClick={phase2}>Буцах</Button>
            <Button onClick={phase4}>Үргэлжлүүлэх</Button>
          </div>
        </>
      );
      break;
    }
    case 4: {
      This = (
        <>
          <div className="p_info mx-auto">
            <Progress className="p_info_prog" multi>
              <Progress
                bar
                animated
                stripes
                color="prime"
                value="100"
              ></Progress>
            </Progress>
            <Row className="p_info_row">
              <Col>
                {" "}
                <div className="p_info_label">Утасны дугаараа</div>
              </Col>
              <Col className="my-auto">
                <Input
                  className="p_info_field mx-auto"
                  onChange={(e) => {
                    setCell(e.target.value);
                  }}
                  required
                  type="number"
                  defaultValue=""
                />
              </Col>
            </Row>
            <Row className="p_info_row">
              <Col>
                {" "}
                <div className="p_info_label">Цахим шуудан</div>
              </Col>
              <Col className="my-auto">
                <Input
                  className="p_info_field mx-auto"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  required
                  type="email"
                  defaultValue=""
                />
              </Col>
            </Row>
            <Button onClick={phase3}>Буцах</Button>
            <Button onClick={send}>БҮртгүүлэх</Button>
          </div>
        </>
      );
      break;
    }
    default: {
      This = (
        <>
          <div className="p_info mx-auto">
            <Progress className="p_info_prog" multi>
              <Progress
                bar
                animated
                stripes
                color="prime"
                value="25"
              ></Progress>
              <Progress bar stripes color="prime" value="75"></Progress>
            </Progress>
            <Row className="p_info_row">
              <Col className="">
                <div className="p_info_label">БҮТ - н дугаар </div>
              </Col>
              <Col className="my-auto">
                <Input
                  className="p_info_field mx-auto"
                  disabled
                  defaultValue={Contex.bt}
                  required
                  type="text"
                />
              </Col>
            </Row>
            <Button onClick={phase2}>Үргэлжлүүлэх</Button>
          </div>
        </>
      );
      break;
    }
  }

  const That = (
    <>
      <Card className="info_card">
        <CardTitle tag="h5">
          <Button color="info" onClick={ges}>
            Таны хувийн мэдээлэл
          </Button>
        </CardTitle>
        <CardText className="mx-auto">
          <Row className="info_row">
            <Col className="info_col_1">Бүртгэлийн Дугаар </Col>
            <Col className="info_col_2">{Contex.bt}</Col>
          </Row>
          <Row className="info_row">
            <Col className="info_col_1">Овог </Col>
            <Col className="info_col_2">{data.lname}</Col>
          </Row>
          <Row className="info_row">
            <Col className="info_col_1">Нэр </Col>
            <Col className="info_col_2">{data.fname}</Col>
          </Row>
          <Row className="info_row">
            <Col className="info_col_1">Регистерийн дугаар </Col>
            <Col className="info_col_2">{data.rd}</Col>
          </Row>
          <Row className="info_row">
            <Col className="info_col_1">Гэрчилгээний дугаар </Col>
            <Col className="info_col_2">{data.gerchilgee_dugaar}</Col>
          </Row>
          <Row className="info_row">
            <Col className="info_col_1">Утасны дугаар </Col>
            <Col className="info_col_2">{data.utas}</Col>
          </Row>
          <Row className="info_row">
            <Col className="info_col_1">Цахим шуудан</Col>
            <Col className="info_col_2">{data.email}</Col>
          </Row>
        </CardText>
      </Card>
    </>
  );

  return (
    <>
      <div className="pt-5">
        <Card>
          <CardBody>{Contex.succ === true ? That : This}</CardBody>
        </Card>
      </div>
    </>
  );
}
export default Med;
