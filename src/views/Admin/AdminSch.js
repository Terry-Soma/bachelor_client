import AddSch from "../../components/Admin/AddSch";
import TableSch from "../../components/Admin/TableSch";
import ImportPic from "../../components/Admin/ImportPic";
import { Card, Row, Button, Col } from "reactstrap";

import { Route, Switch, useHistory } from "react-router-dom";

function AdminSch() {
  let history = useHistory();

  function to_1() {
    history.push("/admin/Sch/");
  }
  function to_2() {
    history.push("/admin/Sch/Add");
  }

  return (
    <>
      <div className="content">
        <Card>
          <Row className="mx-auto">
            <Col>
              <Button onClick={to_1}>Сургуулиуд</Button>
            </Col>
            <Col>
              <Button onClick={to_2}>Нэмэх</Button>
            </Col>
          </Row>
        </Card>
        <Switch>
          <Route exact path="/admin/Sch">
            <TableSch />
          </Route>
          <Route path="/admin/Sch/Add">
            <AddSch />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default AdminSch;
