import  React,{useState, useEffect, useContext} from 'react';
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import AdminContext from "../../context/AdminContext";
import {toast, ToastContainer} from 'react-toastify'
const AdminLogin = () => {
  let history = useHistory();
  const Actx = useContext(AdminContext);

  const responseGoogle = (response) => {
    if (response.error) {
      toast.error("Алдаа гарлаа дахин оролдоно уу");
      return; 
    } 
    Actx.googleOAuth(response?.tokenId, response?.profileObj);
  };

  return (
    <div className="container my-5 w-50">
        <Card className="mx-auto p-5 d-flex justify-content-center align-items-center" bg="light">
        <Card.Title as="p"
            className="text-center lead fs-4"
          >
            Админ | Сургалтын алба 
          </Card.Title>
          {Actx.state.email && Actx.state.emailVerified && history.push('/admin/home')}
          {Actx.state.error && (
            <p style={{ color: 'red', marginTop: '0.64rem' }}>
              {Actx.state.error}
            </p>
          )}
           {Actx.state.loading && (
                <div>
                  <Spinner animation="border" variant="info" />
                </div>
            )}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
            <Row>
              <Col>
                <GoogleLogin
                  className="py-2"
                  clientId="488115572939-v60kr5j3rfqribiiftoklbkls4mei24a.apps.googleusercontent.com"
                  buttonText="Google аккоунтаар нэвтрэх"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
              </Col>
            </Row>
        </Card>
    </div>
  );
}
export default AdminLogin;
