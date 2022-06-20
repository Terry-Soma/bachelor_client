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
import { RiFileExcel2Fill } from "react-icons/ri";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "./variables/charts.js";
import { DownloadExcel } from "react-excel-export";

import axios from "../../utils/axios.js";
import { useHistory } from "react-router";
import AdminContext from "../../context/AdminContext.js";

function AdminDash() {
  let history = useHistory();
  let filteredinfo = [];
  const Actx = useContext(AdminContext);

  if(Actx.state.email == null  && Actx.state.emailVerified ==false )
      history.push('/adminlogin')

  const [data, setData] = useState([]);
  const [sur, setSur] = useState([]);
  const [mer, setMer] = useState([]);
  const [aimag, setAimag] = useState([]);
  const [q, setQ] = useState("");
  
  let cnt =0;
  useEffect(() => {
    axios
      .get("/elsegch/withmergejil")
      .then(({ data }) => setData(data.data))
      .catch((err) => console.log(err));
    axios
      .get("/burtgel/get-count")
      .then(({ data }) =>{ setSur(data.sdata); setMer(data.data); } )
      .catch((err) => console.log(err));
    axios
      .get("/aimag")
      .then(({ data }) => setAimag(data.data))
      .catch((err) => console.log(err));      
  }, []);
  
  const handleSearch = (event) => {
    setQ(event.target.value);
  };

  if(q.startsWith("aimag")){
    let filter = q.split(":")[1];
    filteredinfo = data.filter(el =>
      el.aimag != null && el.aimag.toString() == filter )
  }else if(q.startsWith("reset")){
    filteredinfo = data;
  }
  else{
    filteredinfo = data.filter(el =>
      el.rd.toLowerCase().includes(q.toLowerCase())
    );
  }
  
  const [state, setState] = useState(true);
  let data2 = data.length > 0  && aimag.length > 0 && data.map(el=>{
    let a = {
      ...el,
      BDugaar : el.but,
      aimag : el.aimag ? aimag && aimag[el.aimag -1].ner : "Аймаг сонгоогүй" 
    }
    delete a["but"];
    return a;
  });
  const Enlist = (
    <CardBody>
      <Table responsive>
        <thead className="text-primary">
          <tr>
            <th>Бүртгэлийн дугаар</th>
            <th>Овог</th>
            <th>Нэр</th>
            <th>Утасны дугаар</th>
            <th>цахим шуудан</th>
            <th>Сонгосон мэргэжлүүд</th>
            <th>Регистерийн дугаар</th>
            <th>Аймгийн мэдээлэл</th>
          </tr>
        </thead>
        <tbody>
          { filteredinfo.length > 0 && aimag.length > 0 &&
          filteredinfo.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.but}</td>
                  <td>{e.ovog}</td>
                  <td>{e.ner}</td>
                  <td>{e.utas}</td>
                  <td>{e.email}</td>
                  <td>{e.mergejil}</td>
                  <td>{e.rd}</td>
                  <td>{e.aimag ?
                    (e.aimag == 22 ? "Улаанбаатар" 
                    : (e.aimag == 20 ? "Хөвсгөл" 
                    : (e.aimag == 19 ? "Ховд"
                    : (e.aimag == 21 ? "Хэнтий" 
                    : aimag[e.aimag -1].ner )))) 
                  : "Аймаг сонгоогүй"}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </CardBody>
  );

  const Majors = (
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
          style={{ right: "0", position: "fixed", zIndex: "100", background:"#93939388" }}
          href="#Down"
        >
          Доош
        </Button>
        <Button
          style={{
            right: "0",
            marginRight: "100px",
            position: "fixed",
            zIndex: "100",
            background:"#93939388"
          }}
          href="#Up"
        >
          Дээш
        </Button>
        <Row>
          {sur.map((e) => {
            cnt += e.bcount;
            return (
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col className="my-auto" md="7" xs="5">
                        <h2 className="fs-4 mb-3">{e.slug}</h2>
                      </Col>
                      <Col md="5" xs="7">
                        <div className="numbers">
                          <p className="card-category fs-5">Нийт элсэгчид</p>
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
          <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col className="my-auto" md="6" xs="5">
                        <h2 className="fs-4 mb-3">Бүх сургуульд</h2>
                      </Col>
                      <Col md="6" xs="7">
                        <div className="numbers">
                          <p className="card-category fs-6">Нийт мэргэжил бүртгэл</p>
                          <CardTitle tag="p">{cnt}</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
            </Col>

            {
              data && (
                <Col lg="4" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col className="my-auto" md="6" xs="5">
                        <h2 className="fs-4">мэргэжил сонгосон</h2>
                      </Col>
                      <Col md="6" xs="12">
                        <div className="numbers">
                          <p className="card-category fs-5">Нийт элсэгч</p>
                          <CardTitle tag="p">{data.length}</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
            </Col>
              )
            }
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">
                  <button 
                  className="btn btn-secondary"
                    onClick={() => {
                      setState(true);
                    }}
                  >
                    Элсэгчдийн мэдээлэл
                  </button>
                  <button
                  className="btn btn-secondary"
                    onClick={() => {
                      setState(false);
                    }}
                  >
                    Мэргэжил
                  </button>
                  <select className="btn btn-secondary p-0 " style={{background : "rgb(102, 97, 91)"}} aria-label="Aimag songolt" onChange={(e)=> setQ(`aimag:${e.target.value}`)} >
                    <option value="reset" onClick={(e)=>{setQ(e.target.value)}}>Аймгийн мэдээллээр хайх</option>
                 {aimag && aimag.map((aimag)=>{
                return( <option key={aimag.Id} value={aimag.Id} >{aimag.ner}</option>)
                })}
              </select>
              <DownloadExcel
                fileName={`IZburtgel${new Date().getFullYear()}`}
                data={data2}
                buttonLabel={<RiFileExcel2Fill />}
              
                />
             
            </CardTitle>
                <Input
                  onChange={handleSearch}
                  type="text"
                  placeholder="Регистрийн дугаараар хайх"
                />
           </CardHeader>
              {state == true ? Enlist : Majors}
           </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
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
          </Col>
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
            </Card>
          </Col>
        </Row>
        <section id="Down" />
      </div>
    </>
  );
}

export default AdminDash;
