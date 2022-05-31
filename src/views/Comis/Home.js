import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Col,
  Input,
  Button
} from "reactstrap";
import axios from "axios";
import SelectMaj from "./SelectMaj";
import cm from "../../cm";
function Home() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState();
  var config = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/elsegch",
    headers: {}
  };

  useEffect(() => {
    axios(config)
      .then(function ({ data }) {
        setData(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["burtgel_Id"]);
  const handleSearch = (event) => {
    setQ(event.target.value);
  };
  function search(items) {
    return items.filter((item) => {
      if (item.aimag_id !== cm.aimag) {
        return null;
      }
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  const [hidden, setHidden] = useState(false);

  function Change() {
    setHidden(!hidden);
  }

  return (
    <>
      <div className="content">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Нийт бүртгэлүүд</CardTitle>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <Input type="number" onChange={handleSearch} />
                <thead className="text-primary">
                  <tr>
                    <th>Бүртгэлийн дугаар</th>
                    <th>Овог</th>
                    <th>Нэр</th>
                    <th>Утасны дугаар</th>
                    <th>цахим шуудан</th>
                    <th>гэрчигээний дугаар</th>
                    <th className="text-right">Регистерийн дугаар</th>
                  </tr>
                </thead>
                <tbody>
                  {search(data).map((e) => {
                    return (
                      <>
                        <tr>
                          <td>{e.burtgel_Id}</td>
                          <td>{e.fname}</td>
                          <td>{e.lname}</td>
                          <td>{e.utas}</td>
                          <td>{e.email}</td>
                          <td>{e.gerchilgee_dugaar}</td>
                          <td className="text-right">{e.rd}</td>
                          <Button
                            onClick={() => {
                              Change(), setVal(e);
                            }}
                          >
                            Мэргэжил сонгох
                          </Button>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <section id="Remove">{hidden && <SelectMaj data={val} />}</section>
      </div>
    </>
  );
}

export default Home;
