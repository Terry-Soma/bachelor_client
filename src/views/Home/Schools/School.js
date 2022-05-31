import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  InputGroup,
  Button,
  Input,
  InputGroupAddon,
  Table
} from "reactstrap";
import Contex from "../../../context.js";
import axios from "axios";
import Select from "./Select.js";
function School() {
  const sty = {
    border: "1px solid black"
  };
  let location = useLocation();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://ikhzasag-backend.herokuapp.com/api/v1/views/allinfo")
      .then(({ data }) => setInfo(data.data))
      .catch((err) => console.log(err));
  }, []);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["h_name"]);
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

  function sel(props) {
    function Burt() {}
    return (
      <>
        <Button onClick={Burt()}>Сонгох</Button>
      </>
    );
  }

  const pot = <></>;
  return (
    <>
      <Card styles={{ backgroundColor: "#f2f2f2" }}>
        <CardHeader>
          {Contex.succ == true ? "-----> Мэргэжил сонгох" : ""}
        </CardHeader>
        <CardBody>
          <Table striped bordered hover responsive>
            <thead className="text-primary">
              <tr className={sty}>
                <th className={sty}>Сургуулийн нэр</th>
                <th className={sty}>Хөтөлбөрийн нэр</th>
                <th className={sty}>Мэргэжил</th>
                <th className={sty}>Мэргэшил</th>
                <th className={sty}>Босго оноо</th>
                <th className={sty}>Элсэлтийн шалгалт 1</th>
                <th className={sty}>Элсэлтийн шалгалт 2</th>

                <th className="text-right">
                  <form>
                    <InputGroup className="no-border">
                      <Input
                        style={{ minWidth: "100px" }}
                        onChange={handleSearch}
                        placeholder="Search..."
                      />
                      <InputGroupAddon addonType="append"></InputGroupAddon>
                    </InputGroup>
                  </form>
                </th>
              </tr>
            </thead>
            <tbody>
              {info &&
                location.state &&
                info.map(function (e, index, array) {
                  let sh2;
                  if (
                    index < info.length &&
                    array[++index]?.MergejilId === e.MergejilId
                  ) {
                    sh2 = array[index]?.shalgalt;
                  } else if (array[index - 2]?.MergejilId === e.MergejilId) {
                    return;
                  }
                  if (location.state.Sch === e.s_name) {
                    return (
                      <tr className={sty}>
                        <td className={sty}>{e.s_name}</td>
                        <td className={sty}>{e.h_name}</td>
                        <td className={sty}>{e.m_name}</td>
                        <td>
                          <div className="mergeshil">{e.mergeshil}</div>
                        </td>
                        <td className={sty}>{e.bosgo_onoo}</td>
                        <td className={sty}>{e.shalgalt}</td>

                        <td className={sty}>{sh2}</td>
                        <td>
                          {" "}
                          <Select dat={e.MergejilId} state={Contex.succ} />
                        </td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
  // });
}
export default School;
