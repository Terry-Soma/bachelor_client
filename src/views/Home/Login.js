import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from '../../utils/axios';
import validator from 'validator';
import ElsegchContext from '../../context/ElsegchContext';
function Login() {
  const Ectx = useContext(ElsegchContext);
  const [step, setstep] = useState(1);
  const [butDugaar, setBut] = useState('');
  const [userProfile, setUP] = useState({});
  const [error, setError] = useState('');
  const nextStep = () => {
    setstep(step + 1);
  };

  let history = useHistory();
  useEffect(() => {
    if (Ectx.state.burtgel_Id != null && Ectx.state.email != null) {
      history.push('/info');
    } else if (Ectx.state.burtgel_Id != null && Ectx.state.email == null) {
      nextStep();
    }
  }, [Ectx.state.burtgel_Id]);

  const handleBut = (e) => {
    setBut(e.target.value);
  };
  const responseGoogle = (response) => {
    console.log(response);
    // if (!response.error) {
    // }
  };
  if (Ectx.state.butDugaar != null && Ectx.state.email != null)
    history.push('/info');

  const handleLogin = () => {
    if (validator.isEmpty(butDugaar)) {
      setError('БҮТ-ийн дугаараа оруулна уу');
      return;
    }
    if (!validator.isInt(butDugaar)) {
      setError('БҮТ-ийн дугаараа зөв оруулна уу');
      return;
    }
    setError(false);
    Ectx.rememberMe(butDugaar);
    // const result = await axios.post('/elsegch/remember-me', { butDugaar });
    // console.log(Ectx.state);
  };

  switch (step) {
    case 1:
      return (
        <div className="px-2" style={{ marginBottom: '30vh' }}>
          {/* {Ectx.state.butDugaar == null &&
            Ectx.state.email == null &&
            nextStep()} */}
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
                {error && (
                  <p style={{ color: 'red', marginTop: '0.64rem' }}>{error}</p>
                )}
                {Ectx.state.error && (
                  <p style={{ color: 'red', marginTop: '0.64rem' }}>
                    {Ectx.state.error}
                  </p>
                )}
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
