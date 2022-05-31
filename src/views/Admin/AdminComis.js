import TableComis from "../../components/Admin/TableComis";
import AddComis from "../../components/Admin/AddComis";
import { Card, Row, Button, Col } from "reactstrap";

import { Route, Switch, useHistory } from "react-router-dom";

function AdminComis() {
  let history = useHistory();

  function to_1() {
    history.push("/admin/comis");
  }
  function to_2() {
    history.push("/admin/comis/add");
  }

  return (
    <>
      <div className="content">
        <Card>
          <Row className="mx-auto">
            <Col>
              <Button onClick={to_1}>Гишүүд</Button>
            </Col>
            <Col>
              <Button onClick={to_2}>Нэмэх</Button>
            </Col>
          </Row>
        </Card>
        <Switch>
          <Route exact path="/admin/comis">
            <TableComis />
          </Route>
          <Route path="/admin/comis/add">
            <AddComis />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default AdminComis;
