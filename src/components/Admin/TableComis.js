import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";
import axios from "../../utils/axios.js";
function TableComis() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/users')
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const dataa = {
    columns: [
      {
        label: "Комисс ID",
        field: "Id",
        sort: "asc"
      },
      {
        label: "Нэр",
        field: "name",
        sort: "asc"
      },
      {
        label: "Майл хаяг",
        field: "email",
        sort: "asc"
      },
      {
        label: "Утасны дугаар",
        field: "phone",
        sort: "asc"
      },
      {
        label: "Хэлтэс",
        field: "heltes",
        sort: "asc"
      }
    ],
    rows: data
  };

  return (
    <>
      <div className="content">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Комсийн гишүүд</CardTitle>
            </CardHeader>
            <CardBody>
              <MDBDataTable
                hover
                responsive
                striped
                autoWidth
                bordered
                data={dataa}
              />
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
}

export default TableComis;
