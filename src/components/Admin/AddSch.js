import React, { useEffect, useState } from "react";
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
  Alert
} from "reactstrap";

function AddSch() {
  var axios = require("axios");

  const [Name, setName] = useState("");
  const [Desc, setDesc] = useState("");
  const [Addr, setAddr] = useState("");
  useEffect(() => {}, []);

  const [selectedFile, setFile] = useState();

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };

  function Func() {
    const formData = new FormData();
    const data = {
      name: Name,
      address: Addr,
      description: Desc
    };

    console.log(data);
    var config = {
      method: "post",
      url: "https://ikhzasag-backend.herokuapp.com/api/v1/school",
      headers: {},
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return (
          <>
            <Alert color="info">Амжилттай бүртгэгдлээ</Alert>
          </>
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Сургууль нэмэх</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1 mx-auto" md="6">
                      <FormGroup>
                        <label>Сургуулийн нэр</label>
                        <Input
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1 mx-auto" md="6">
                      <FormGroup>
                        <label>Хаяг</label>
                        <Input
                          onChange={(e) => {
                            setAddr(e.target.value);
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  \
                  <Row>
                    <Col className="pr-1 mx-auto" md="6">
                      <FormGroup>
                        <label>Тайлбар</label>
                        <Input
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                          required
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <input type="file" onChange={onFileChange} />
                  <button onClick={onFileUpload}>Upload!</button> */}
                  <div className="update mx-auto">
                    <Button
                      className="btn-round mx-auto"
                      color="primary"
                      onClick={Func}
                    >
                      Бүртгэх
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="2"></Col>
        </Row>
      </div>
    </>
  );
}
export default AddSch;
