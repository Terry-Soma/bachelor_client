import React, { useEffect, useState } from "react";
import {
  InputGroup,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col
} from "reactstrap";
import axios from "../../utils/axios.js";
import TableSch2 from "./TableSch2";
import TableSch3 from "./TableSch3";

function TableSch() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState([]);
  const [val2, setVal2] = useState([]);
  const [showEdit, setEdit] = useState(false);
  const [showRemove, setRemove] = useState(false);
  useEffect(() => {
    axios.get('/school')
      .then(function ({ data }) {
        setData(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const handleSearch = (event) => {
    setQ(event.target.value);
  };
  function Edit() {
    setEdit("true");
  }
  function Remove() {
    setRemove("true");
  }

  function search(items) {
    return items.filter((item) => {
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
              <CardTitle tag="h4">Сургуулиуд</CardTitle>
            </CardHeader>
            <CardBody>
              <Table striped bordered hover responsive>
                <thead className="text-primary">
                  <tr>
                    <th style={{ maxWidth: "50px" }}>ID</th>
                    <th>Нэр</th>
                    <th style={{ minWidth: "250px" }}>Хаяг</th>
                    <th>Тайлбар</th>
                    <th className="text-right">
                      <form>
                        <InputGroup className="no-border">
                          <Input
                            onChange={handleSearch}
                            placeholder="Search..."
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="nc-icon nc-zoom-split" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </form>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {search(data).map((e) => {
                    return (
                      <tr>
                        <td>
                          <div style={{ maxWidth: "50px" }}>{e.Id}</div>
                        </td>
                        <td> {e.name} </td>
                        <td> {e.address} </td>
                        <td>
                          {" "}
                          <div className="mergeshil"> {e.description}</div>{" "}
                        </td>
                        <td>
                          <Button
                            href="#Edit"
                            onClick={() => {
                              Edit(), setVal(e);
                            }}
                          >
                            Засах
                          </Button>
                        </td>
                        <td className="text-right">
                          <Button
                            href="#Remove"
                            onClick={() => {
                              Remove(), setVal2(e);
                            }}
                          >
                            Устгах
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <section id="Remove">{showRemove && <TableSch2 data={val2} />}</section>
        <section id="Edit">{showEdit && <TableSch3 data={val} />}</section>
      </div>
    </>
  );
}

export default TableSch;
