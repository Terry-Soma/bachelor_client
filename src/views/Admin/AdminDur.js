import * as React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

function AdminDur() {
  const [value, setValue] = React.useState(new Date());

  return (
    <>
      <div className="content">
        <Card>
          <CardBody>
            <Row>
              <Col></Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
export default AdminDur;
