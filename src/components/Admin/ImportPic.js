import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios.js";
function ImportPic() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/school')
      .then(({ data })=> {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error)=> {
        console.log(error);
      });
  }, []);
  const [isOpen, Open] = useState("false");
  const [Val, setVal] = useState();
  function togg() {
    Open(!isOpen);
  }
  return (
    <>
      <div className="content">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Сургуулиуд</CardTitle>
            </CardHeader>
            <CardBody>
              <Dropdown direction="right" isOpen={isOpen} toggle={togg}>
                <DropdownToggle caret>
                  {Val ? Val : "Сургууль сонгоно уу."}
                </DropdownToggle>
                <DropdownMenu>
                  {data.map((e) => {
                    return (
                      <>
                        <DropdownItem
                          onClick={(e) => {
                            setVal(e.target.attributes.dropdownvalue.value);
                          }}
                          dropDownValue={e.Id}
                        >
                          {e.Id + ". " + e.name}
                        </DropdownItem>
                      </>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
              <Input type="file" />
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
}
export default ImportPic;
