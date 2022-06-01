import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from '../../utils/axios';
import validator from 'validator';

function Login() {
  const [step, setstep] = useState(1);
  const [butDugaar, setBut] = useState('');
  const [userProfile, setUP] = useState({});
  const [error, setError] = useState('');

  let history = useHistory();

  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleBut = (e) => {
    setBut(e.target.value);
  };
  const responseGoogle = (response) => {
    console.log(response);
    // if (!response.error) {
    // }
  };
  const handleLogin = async () => {
    if (validator.isEmpty(butDugaar)) {
      setError('БҮТ-ийн дугаараа оруулна уу');
      return;
    }
    if (!validator.isInt(butDugaar)) {
      setError('БҮТ-ийн дугаараа зөв оруулна уу');
      return;
    }
    setError(false);
    const result = await axios.post('/elsegch/remember-me', { butDugaar });
    if (result.data.butDugaar != null && result.data.butDugaar.email) {
      history.push('/info');
    }
    nextStep();
  };
  useEffect(() => {}, []);

  switch (step) {
    case 1:
      return (
        <div className="px-2" style={{ marginBottom: '30vh' }}>
          <Card
            className="mx-auto"
            style={{ minWidth: '248px', maxWidth: '600px' }}
          >
            <CardBody className="mx-auto container p-5">
              <div className="mb-3">
                <label htmlFor="butDugaar" className="form-label">
                  Бүртгэлийн үнэлгээний дугаар
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  id="butDugaar"
                  placeholder=""
                  onChange={handleBut}
                  value={butDugaar}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
              <Button onClick={handleLogin}>Нэвтрэх</Button>
            </CardBody>
          </Card>
        </div>
      );
    case 2:
      return (
        <div className="pt-3" style={{ marginBottom: '30vh' }}>
          <Card
            className="mx-auto container"
            style={{ minWidth: '248px', maxWidth: '600px' }}
          >
            <CardBody style={{ textAlign: 'center' }} className="mx-auto p-5 ">
              <p className="lead text-secondary">
                Та өөрийн хувийн э-мэйл хаягаараа нэвтрэн бүртгэлээ
                баталгаажуулна уу
              </p>
              <GoogleLogin
                clientId="488115572939-v60kr5j3rfqribiiftoklbkls4mei24a.apps.googleusercontent.com"
                buttonText="Бүртгэлээ баталгаажуулах"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </CardBody>
          </Card>
        </div>
      );
    default:
      return (
        <div className="pt-3" style={{ marginBottom: '30vh' }}>
          It is login
        </div>
      );
  }
}
export default Login;
