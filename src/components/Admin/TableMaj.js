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
import TableMajDelete from "./TableMajDelete.js";
import TableMajEdit from "./TableMajEdit.js";

function TableMaj() {
   const [data, setData] = useState([]);
  const [Hut, setHut] = useState([]);
  const [val, setVal] = useState([]);
  const [val2, setVal2] = useState([]);
  const [showEdit, setEdit] = useState(false);
  const [showRemove, setRemove] = useState(false);

  useEffect(() => {
    axios.get('/hutulbur').then(({ data }) =>{
      setHut(data.data);
    });
    axios.get('/mergejil')
      .then(({ data })=> {
        setData(data.data);
      })
      .catch((error) =>{
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
                    <th>Мэргэшил</th>
                    <th>Хөтөлбөрийн Id</th>
                    <InputGroup className="no-border">
                      <Input onChange={handleSearch} placeholder="Search..." />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="nc-icon nc-zoom-split" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </tr>
                </thead>
                <tbody>
                  {search(data).map((e) => {
                    return (
                      <tr>
                        <td> {e.Id} </td>
                        <td> {e.name} </td>
                        <td>
                          <div className="mergeshil">{e.mergeshil}</div>
                        </td>
                        <td>{e.hutulburId}</td>
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
          {showRemove && <TableMajDelete data={val2} />}
        </section>
        <section className="text-right" id="Edit">
          {showEdit && <TableMajEdit data={val} />}
        </section>
      </div>
    </>
  );
}

export default TableMaj;
