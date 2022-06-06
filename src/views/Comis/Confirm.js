import React, { useState, useEffect } from "react";
import Confirm2 from "./Confirm_2";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Col,
  InputGroup,
  Input
} from "reactstrap";
import axios from "../../utils/axios.js";
import cm from "../../cm";

function Confirm(props) {
  const [data, setData] = useState([]);

  var config = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/elsegch",
    headers: {}
  };

  useEffect(() => {
    axios.get('/elsegch')
      .then(({ data })=> {
        setData(data.data);
      })
      .catch((error)=> {
        console.log(error);
      });
  }, []);

  let location = useLocation();
  // location.state.logged = true;
  const [hidden, setHidden] = useState(true);
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
                <thead className="text-primary">
                  <tr>
                    <th>Бүртгэлийн дугаар</th>
                    <th>Овог</th>
                    <th>Нэр</th>
                    <th>Утасны дугаар</th>
                    <th>цахим шуудан</th>
                    <th>гэрчигээний дугаар</th>
                    <th>Регистерийн дугаар</th>
                    <th>Зураг</th>
                    <th className="text-right">
                      <form>
                        <InputGroup className="no-border">
                          <Input
                            onChange={(e) => {
                              handleSearch(e);
                            }}
                            placeholder="Search..."
                          />
                        </InputGroup>
                      </form>
                    </th>
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
                          <td>{e.rd}</td>
                          <td className="text-right">{e.img}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        {!hidden && <Confirm2 obj={data} />}
      </div>
    </>
  );
}

export default Confirm;
