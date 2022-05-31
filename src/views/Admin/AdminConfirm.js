import TableEdit from "../../components/Admin/TableEdit";
import TableDelete from "../../components/Admin/TableDelete";
import { Card, Row, Button, Col } from "reactstrap";

import { Route, Switch, useHistory } from "react-router-dom";

function AdminConfirm() {
  let history = useHistory();

  function to_1() {
    history.push("/admin/confirm");
  }
  function to_2() {
    history.push("/admin/confirm/edit");
  }

  return (
    <>
      <div className="content">
        <Card>
          <Row className="mx-auto">
            <Col>
              <Button onClick={to_1}>Устгах</Button>
            </Col>
            <Col>
              <Button onClick={to_2}>Засах</Button>
            </Col>
          </Row>
        </Card>
        <Switch>
          <Route exact path="/admin/confirm">
            <TableDelete />
          </Route>
          <Route path="/admin/confirm/edit">
            <TableEdit />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default AdminConfirm;
