import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Confirm_2(props) {
  const Obj2 = props.obj;
  var B_1, B_2, B_3, B_4, B_5, B_6, B_7;
  Obj2.map((e) => {
    B_1 = e.A_1;
    B_2 = e.A_2;
    B_3 = e.A_3;
    B_4 = e.A_4;
    B_5 = e.A_5;
    B_6 = e.A_6;
    B_7 = e.A_7;
  });
  console.log(B_2);
  return (
    <Row>
      <Col md="2"></Col>
      <Col md="8">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Бүртгүүлэгчийн мэдээлэл</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>Бүртгэлийн дугаар</label>
                    <Input defaultValue={B_1} disabled type="text" />
                  </FormGroup>
                </Col>
                <Col className="px-1" md="3">
                  <FormGroup>
                    <label>Овог</label>
                    <Input defaultValue={B_2} disabled type="text" />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="4">
                  <FormGroup>
                    <label>Нэр</label>
                    <Input defaultValue={B_3} disabled type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label>Утасны дугаар</label>
                    <Input defaultValue={B_4} disabled type="text" />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="6">
                  <FormGroup>
                    <label>Төгссөн сургууль</label>
                    <Input defaultValue={B_5} disabled type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label>Сонгосон Сургууль</label>
                    <Input defaultValue={B_6} disabled type="text" />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="6">
                  <FormGroup>
                    <label>Сонгосон Мэргэжил</label>
                    <Input defaultValue={B_7} disabled type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button className="btn-round" color="primary" type="submit">
                    Томилолт олгох
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col md="2"></Col>
    </Row>
  );
}
export default Confirm_2;
