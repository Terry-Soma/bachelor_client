import React, { useState, useEffect } from "react";
import { Button, Card, Label, CardBody, Input } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import Contex from "../../context.js";
import GoogleLogin from "react-google-login";
import axios from "axios";

const sty = {
  minWidth: "200px",
  maxWidth: "400px"
};
function Login() {
  const [bt, setBt] = useState();
  let history = useHistory();
  const [is, setIs] = useState(false);
  const [data2, setData2] = useState([]);

  var config = {
    method: "get",
    url: `https://ikhzasag-backend.herokuapp.com/api/v1/elsegch`,
    headers: {
      "Content-Type": "application/json"
    }
  };

  useEffect(() => {
    axios(config)
      .then(function ({ data }) {
        setData2(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function phase2() {
    Contex.bt = bt;
    data2.map((e) => {
      console.log(e);
      if (e.burtgel_Id == Contex.bt) {
        Contex.succ = true;
        setIs(true);
      }
    });
    if (is == false) {
      Contex.st = true;
      history.push("/");
      return;
    }
  }
  const [data, setData] = useState([]);
  const responseGoogle = (response) => {
    if (!response.error) {
      console.log(data2);
      data2.map((e) => {
        console.log(e.email);
        console.log("e.email");
        if (response.profileObj.email == e.email) {
          Contex.bt = e.burtgel_Id;
          Contex.st = true;
          Contex.succ = true;
          history.push("/");
          console.log("success");
        }
      });
    }
  };

  const [dat, setDat] = useState();
  var This;
  This = (
    <>
      <Label>ЕШ Дугаар</Label>
      <Input
        onChange={(e) => {
          setBt(e.target.value);
        }}
        bsSize="lg"
        required
        type="text"
      />
      <Button
        onClick={() => {
          phase2();
        }}
      >
        Нэвтрэх
      </Button>
      <Button
        onClick={() => {
          setIs(true);
        }}
      >
        Би бүртгэлтэй
      </Button>
    </>
  );

  var That = (
    <>
      {console.log(is)}
      <Label>Бүртгэлтэй майл хаягаа оруулна уу</Label>
      <GoogleLogin
        clientId="488115572939-v60kr5j3rfqribiiftoklbkls4mei24a.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  );

  return (
    <>
      <div className="pt-5">
        <Card style={sty} className="mx-auto">
          <CardBody style={{ textAlign: "center" }} className="mx-auto">
            {is ? That : This}
          </CardBody>
        </Card>
      </div>
    </>
  );
}
export default Login;
