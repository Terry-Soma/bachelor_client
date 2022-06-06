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
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import { useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import AddMaj2 from "./AddMaj2";
import axios from "../../utils/axios.js";

function AddMaj() {
  const [isOpen, Open] = useState(false);
  function togg() {
    Open(!isOpen);
  }

  const [data, setData] = useState([]);
  const [Class, setShalguur] = useState([]);
  useEffect(() => {
    axios.get('/shalguur')
      .then(({ data })=> {
        setShalguur(data.data);
      })
      .catch((error)=> {
        console.log(error);
      });
    axios.get('/hutulbur')
      .then(({ data })=> {
        setData(data.data);
      })
      .catch((error) =>{
        console.log(error);
      });
  }, []);
  let history = useHistory();
  const [Val, setVal] = useState("");
  function next() {
    // console.log(Val);
    history.push({
      pathname: "/admin/maj/Add/Next",
      state: { want: Val }
    });
  }
  return (
    <>
      <div className="content">
        <Switch>
          <Route exact path="/admin/Maj/add">
            <Row>
              <Col md="2"></Col>
              <Col md="8">
                <Card className="card-user">
                  <CardHeader>
                    <CardTitle tag="h5">Мэргэжил нэмэх</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Dropdown direction="right" isOpen={isOpen} toggle={togg}>
                        <DropdownToggle caret>
                          {Val ? Val : "Мэргэжилийн нийт шалгалтыг сонгоно уу"}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            onClick={(e) => {
                              setVal(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={1}
                          >
                            Нэг
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => {
                              setVal(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={2}
                          >
                            Хоёр
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => {
                              setVal(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={3}
                          >
                            Гурав
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => {
                              setVal(e.target.attributes.dropdownvalue.value);
                            }}
                            dropDownValue={4}
                          >
                            Дөрөв
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <Button onClick={next}>Next</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col md="2"></Col>
            </Row>
          </Route>
          <Route exact path="/admin/maj/Add/Next">
            <AddMaj2 data={data} class={Class} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default AddMaj;
