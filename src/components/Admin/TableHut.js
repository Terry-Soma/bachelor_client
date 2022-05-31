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
import axios from "axios";
import TableHutDelete from "./TableHutDelete";
import TableHutEdit from "./TableHutEdit";

function TableHut() {
  var config = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/hutulbur",
    headers: {}
  };

  const [data, setData] = useState([]);
  const [val, setVal] = useState([]);
  const [val2, setVal2] = useState([]);
  const [showEdit, setEdit] = useState(false);
  const [showRemove, setRemove] = useState(false);

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
  const handleSearch = (event) => {
    setQ(event.target.value);
  };
  function Edit() {
    setEdit("true");
  }
  function Remove() {
    setRemove("true");
  }
  const [searchParam] = useState(["name"]);
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
                    <th>Хөтөлбөрийн дугаар</th>
                    <th>Хөтөлбөрийн нэр</th>
                    <th>Сурах хугцаа</th>
                    <th>Босго оноо</th>
                    <th>Сургуулийн Id</th>
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
                        <td> {e.Id} </td>
                        <td> {e.name} </td>
                        <td> {e.s_time} </td>
                        <td> {e.bosgo_onoo}</td>
                        <td>
                          {" "}
                          <div style={{ overflow: "auto", maxHeight: "300px" }}>
                            {" "}
                            {e.schoolId}
                          </div>{" "}
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
        <section id="Remove">
          {showRemove && <TableHutDelete data={val2} />}
        </section>
        <section id="Edit">{showEdit && <TableHutEdit data={val} />}</section>
      </div>
    </>
  );
}

export default TableHut;
