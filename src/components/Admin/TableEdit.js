import React from "react";
import { MDBDataTable } from "mdbreact";
import { Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";

function TableEdit() {
  const data = {
    columns: [
      {
        label: "Комисс ID",
        field: "ComisID",
        sort: "asc"
      },
      {
        label: "Нэр",
        field: "ComisName",
        sort: "asc"
      },
      {
        label: "Майл хаяг",
        field: "ComisAddr",
        sort: "asc"
      },
      {
        label: "Нууц үг",
        field: "ComisPass",
        sort: "asc"
      },
      {
        label: "Аймаг",
        field: "ComisAssign",
        sort: "asc"
      }
    ],
    rows: [
      {
        ComisID: "01",
        ComisName: "Анхсайхан",
        ComisAddr: "two@gmail.com",
        ComisPass: "87654321",
        ComisAssign: "Улаанбаатар"
      },
      {
        ComisID: "02",
        ComisName: "Гончигсүх",
        ComisAddr: "one@gmail.com",
        ComisPass: "1234578",
        ComisAssign: "Архангай"
      }
    ]
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
              <MDBDataTable striped bordered small data={data} />
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
}

export default TableEdit;
