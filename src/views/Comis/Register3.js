import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  InputGroup,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  Table
} from "reactstrap";
import axios from "../../utils/axios.js";
function Register3() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [drop, Toggle] = useState(false);
  const [drop2, Toggle2] = useState(false);

  useEffect(() => {
    axios.get('/mergejil')
      .then(({ data })=> {
        setData(data.data);
      })
      .catch((error)=> {
        console.log(error);
      });
    axios.get('/hutulbur')
      .then(({ data })=> {
        setData3(data.data);
      })
      .catch((error)=> {
        console.log(error);
      });
    axios.get('/school')
      .then(({ data })=> {
        setData2(data.data);
      })
      .catch((error)=> {
        console.log(error);
      });
  }, []);

  const {
    state: { detail }
  } = useLocation();

  function Togg() {
    Toggle(!drop);
  }
  function Togg2() {
    Toggle2(!drop2);
  }

  const dataa = {
    columns: [
      {
        label: "Мэргэжлийн нэр",
        field: "name",
        sort: "asc"
      },
      {
        label: "Хөтөлбөрийн нэр",
        field: "HutulburId",
        sort: "asc"
      },
      {
        label: "Мэргэшил",
        field: "mergeshil",
        sort: "asc"
      },
      {
        label: "Суурь шалгалт",
        field: "shuuri_shalgalt",
        sort: "asc"
      },
      {
        label: "Босго оноо",
        field: "bosgo_onoo",
        sort: "asc"
      },
      {
        label: "Гадаад хөтөлбөртэй эсэх",
        field: "gadaad_hutulbur",
        sort: "asc"
      },
      {
        label: "suraltsah_tsag",
        field: "suraltsah_tsag",
        sort: "asc"
      },
      {
        label: "description",
        field: "description",
        sort: "asc"
      }
    ],
    rows: data
  };
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const handleSearch = (event) => {
    setQ(event.target.value);
  };
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
      <div>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Сургуулиуд</CardTitle>
              <Row>
                <Col md="6">
                  <Dropdown direction="right" isOpen={drop} toggle={Togg}>
                    <DropdownToggle caret>Сургууль сонгох</DropdownToggle>
                    <DropdownMenu
                      style={{ maxHeight: "500px", overflow: "auto" }}
                    >
                      {data2.map((e) => {
                        return (
                          <>
                            <DropdownItem divider />
                            <DropdownItem>{e.name}</DropdownItem>
                          </>
                        );
                      })}
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                <Col md="6">
                  <div className="right">
                    <Dropdown direction="left" isOpen={drop2} toggle={Togg2}>
                      <DropdownToggle caret>Мэргэжил сонгох</DropdownToggle>
                      <DropdownMenu
                        style={{ maxHeight: "500px", overflow: "auto" }}
                      >
                        {data.map((e) => {
                          return (
                            <>
                              <DropdownItem divider />
                              <DropdownItem>{e.name}</DropdownItem>
                            </>
                          );
                        })}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Table hover striped responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Мэргэжлийн нэр</th>
                    <th>Хөтөлбөрийн нэр</th>
                    <th>Мэргэшил</th>
                    <th>Суурь шалгалт</th>
                    <th>Босго оноо</th>
                    <th>Суралцах цаг</th>
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
                        {/* suraltsah_tsag bosgo_onoo shuuri_shalgalt mergeshil HutulburId */}
                        <td> {e.name} </td>
                        <td>
                          {" "}
                          {data3[e.hutulburId]
                            ? data3[e.hutulburId].name
                            : "lmao"}{" "}
                        </td>
                        <td> {e.mergeshil}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right">
                          <Button>Сонгох</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
}
export default Register3;
