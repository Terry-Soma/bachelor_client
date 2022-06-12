import React,{ useContext, useEffect, useState} from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table,
  Input,
  Button
} from "reactstrap";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "./variables/charts.js";

import axios from "../../utils/axios.js";
import { useHistory } from "react-router";
import AdminContext from "../../context/AdminContext.js";

function AdminDash() {
  let history = useHistory();

  const Actx = useContext(AdminContext);

  if(Actx.state.email == null  && Actx.state.emailVerified ==false )
      history.push('/adminlogin')
  // burtgel/get-count 
  const [data, setData] = useState([]);
  const [sur, setSur] = useState([]);
  const [mer, setMer] = useState([]);

  useEffect(() => {
    axios
      .get("/elsegch")
      .then(({ data }) => setData(data.data))
      .catch((err) => console.log(err));
    axios
      .get("/burtgel/get-count")
      .then(({ data }) => setSur(data.sdata))
      .catch((err) => console.log(err));
    axios
      .get("/burtgel/get-count")
      .then(({ data }) => setMer(data.data))
      .catch((err) => console.log(err));
  }, []);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["rd"]);
  const handleSearch = (event) => {
    setQ(event.target.value);
  };
  // function search(items) {
  //   return items.filter((item) => {
  //     return searchParam.some((newItem) => {
  //       return (
  //         item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
  //       );
  //     });
  //   });
  // }

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  let now = year + "/" + month + "/" + date;

  const [state, setState] = useState(true);

  var Enlist = (
    <CardBody>
      <Table responsive>
        <thead className="text-primary">
          <tr>
            <th>Бүртгэлийн дугаар</th>
            <th>Овог</th>
            <th>Нэр</th>
            <th>Утасны дугаар</th>
            <th>цахим шуудан</th>
            <th>гэрчигээний дугаар</th>
            <th>Регистерийн дугаар</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.burtgel_Id}</td>
                  <td>{e.fname}</td>
                  <td>{e.lname}</td>
                  <td>{e.utas}</td>
                  <td>{e.email}</td>
                  <td>{e.gerchilgee_dugaar}</td>
                  <td>{e.rd}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </CardBody>
  );

  var Majors = (
    <CardBody>
      <Table responsive>
        <thead className="text-primary">
          <tr>
            <th>Мэргэжлийн Id</th>
            <th>Элсэгчдийн тоо</th>
            <th>Мэргэжлийн нэр</th>
          </tr>
        </thead>
        <tbody>
          {mer.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.mergejilId}</td>
                  <td>{e.count}</td>
                  <td>{e.name}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </CardBody>
  );

  return (
    <>
      <div className="content">
        <section id="Up" />
        <Button
          style={{ right: "0", position: "fixed", zIndex: "100" }}
          href="#Down"
        >
          Down
        </Button>
        <Button
          style={{
            right: "0",
            marginRight: "100px",
            position: "fixed",
            zIndex: "100"
          }}
          href="#Up"
        >
          Up
        </Button>
        <Row>
          {sur.map((e) => {
            return (
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col className="my-auto" md="7" xs="5">
                        <h2>{e.slug}</h2>
                      </Col>
                      <Col md="5" xs="7">
                        <div className="numbers">
                          <p className="card-category">Нийт элсэгчид</p>
                          <CardTitle tag="p">{e.bcount}</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">
                  <Button
                    onClick={() => {
                      setState(true);
                    }}
                  >
                    Элсэгчдийн мэдээлэл
                  </Button>
                  <Button
                    onClick={() => {
                      setState(false);
                    }}
                  >
                    Мэргэжил
                  </Button>
                </CardTitle>
                <Input
                  onChange={(e) => {
                    handleSearch(e);
                  }}
                  type="text"
                />
              </CardHeader>
              {state == true ? Enlist : Majors}
            </Card>
          </Col>
        </Row>
        <Row>
          {/* <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
            </Card>
          </Col> */}
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Элсэлтийн явц</CardTitle>
                <p className="card-category">Долоо хоногоор</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="card-stats">{now}</div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <section id="Down" />
      </div>
    </>
  );
}

export default AdminDash;
