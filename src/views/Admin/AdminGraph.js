import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import Grap1 from "./variables/AdminCharts/Grap_1";
import Grap2 from "./variables/AdminCharts/Grap_2";
import Grap3 from "./variables/AdminCharts/Grap_3";
import Grap4 from "./variables/AdminCharts/Grap_4";
import axios from "axios";
function AdminDur() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [val, setVal] = useState();
  const [togg, setTogg] = useState(false);
  var config1 = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/school",
    headers: {}
  };
  var config2 = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/hutulbur",
    headers: {}
  };
  var config3 = {
    method: "get",
    url: "https://ikhzasag-backend.herokuapp.com/api/v1/hutulbur",
    headers: {}
  };
  useEffect(() => {
    axios(config1)
      .then(function ({ data }) {
        setData(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios(config2)
      .then(function ({ data }) {
        setData2(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios(config3)
      .then(function ({ data }) {
        setData3(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function toggy() {
    setTogg(!togg);
  }

  switch (val) {
    case "1":
      var grap = <Grap1 data={data} data2={data2} data3={data3} />;
      break;
    case "2":
      var grap = <Grap2 data={data} data2={data2} data3={data3} />;
      break;
    case "3":
      var grap = <Grap3 data={data} data2={data2} data3={data3} />;
      break;
    default:
      var grap = <Grap4 data={data} data2={data2} data3={data3} />;
      break;
  }

  return (
    <>
      <div className="content">
        <Card>
          <Dropdown isOpen={togg} toggle={toggy}>
            <DropdownToggle caret>Тайлангын график сонгоно уу</DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={(e) => {
                  setVal(e.target.attributes.dropdownvalue.value);
                }}
                dropDownValue={1}
              >
                Bar 1
              </DropdownItem>
              <DropdownItem
                onClick={(e) => {
                  setVal(e.target.attributes.dropdownvalue.value);
                }}
                dropDownValue={2}
              >
                Bar 2
              </DropdownItem>
              <DropdownItem
                onClick={(e) => {
                  setVal(e.target.attributes.dropdownvalue.value);
                }}
                dropDownValue={3}
              >
                Pie
              </DropdownItem>
              <DropdownItem
                onClick={(e) => {
                  setVal(e.target.attributes.dropdownvalue.value);
                }}
                dropDownValue={4}
              >
                Radio
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <CardBody>{grap}</CardBody>
        </Card>
      </div>
    </>
  );
}
export default AdminDur;
