import TableHut from "../../components/Admin/TableHut";
import AddHut from "../../components/Admin/AddHut";
import { Card, Row, Button, Col } from "reactstrap";

import { Route, Switch, useHistory } from "react-router-dom";

function AdminHut() {
  let history = useHistory();

  function to_1() {
    history.push("/admin/Hut");
  }
  function to_2() {
    history.push("/admin/Hut/Add");
  }

  return (
    <>
      <div className="content">
        <Card>
          <Row className="mx-auto">
            <Col>
              <Button onClick={to_1}>Хөтөлбөрүүд</Button>
            </Col>
            <Col>
              <Button onClick={to_2}>Нэмэх</Button>
            </Col>
          </Row>
        </Card>
        <Switch>
          <Route exact path="/admin/Hut">
            <TableHut />
          </Route>
          <Route path="/admin/Hut/Add">
            <AddHut />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default AdminHut;
