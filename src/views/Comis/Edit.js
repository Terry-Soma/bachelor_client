import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Button,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";
import Edit2 from "./Edit_2";
import axios from "../../utils/axios.js";
import cm from "../../cm";

function Edit() {
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
      .catch((error) =>{
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

  const [hidden, setHidden] = useState(true);
  var lmo;
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
                    <th>Бүртгэсэн огноо</th>
                    <th>Утасны дугаар</th>
                    <th>Томилсон эсэх</th>
                    <th>Төгссөн сургууль</th>
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
        {!hidden && <Edit2 obj={lmo} />}
      </div>
    </>
  );
}

export default Edit;
