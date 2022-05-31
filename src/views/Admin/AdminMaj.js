import AddMaj from "../../components/Admin/AddMaj";
import TableMaj from "../../components/Admin/TableMaj";
import { Card, Row, Button, Col } from "reactstrap";

import { Route, Switch, useHistory } from "react-router-dom";

function AdminView() {
  let history = useHistory();

  function to_1() {
    history.push("/admin/Maj");
  }
  function to_2() {
    history.push("/admin/Maj/Add");
  }

  return (
    <>
      <div className="content">
        <Card>
          <Row className="mx-auto">
            <Col>
              <Button onClick={to_1}>Мэргэжилүүд</Button>
            </Col>
            <Col>
              <Button onClick={to_2}>Нэмэх</Button>
            </Col>
          </Row>
        </Card>
        <Switch>
          <Route exact path="/admin/Maj">
            <TableMaj />
          </Route>
          <Route path="/admin/Maj/Add">
            <AddMaj />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default AdminView;
