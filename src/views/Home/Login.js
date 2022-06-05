import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import validator from 'validator';
import ElsegchContext from '../../context/ElsegchContext';
function Login() {
  const [step, setstep] = useState(1);
  const [butDugaar, setBut] = useState('');
  const [error, setError] = useState('');
  const Ectx = useContext(ElsegchContext);
  const nextStep = () => {
    setstep(step + 1);
  };

  let history = useHistory();

  if (Ectx.state.burtgel_Id != null && Ectx.state.email != null)
    history.push('/info');
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
  const responseGoogle =  (response) => {
    console.log(response?.tokenId);
    
    Ectx.googleOAuth(response?.tokenId, Ectx.state.burtgel_Id);
  };
  const responseFailure = (response) => {
    console.log(response);
    setError(response.error);
  };

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
  };

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
                {error && (
                  <p style={{ color: 'red', marginTop: '0.64rem' }}>{error}</p>
                )}
                {Ectx.state.error && (
                  <p style={{ color: 'red', marginTop: '0.64rem' }}>
                    {Ectx.state.error}
                  </p>
                )}
              </div>
              <Button onClick={handleLogin}>
                {Ectx.state.loading ? (
                  <Spinner animation="border" variant="info" />
                ) : (
                  ' Нэвтрэх'
                )}
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    case 2:
      Ectx.state.email && history.push('/info');
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
              {Ectx.state.loading && (
                <div>
                  <Spinner animation="border" variant="info" />
                </div>
              )}
              <GoogleLogin
                clientId="488115572939-v60kr5j3rfqribiiftoklbkls4mei24a.apps.googleusercontent.com"
                buttonText="Бүртгэлээ баталгаажуулах"
                onSuccess={responseGoogle}
                onFailure={responseFailure}
              />
              {error && (
                <p style={{ color: 'red', marginTop: '0.64rem' }}>{error}</p>
              )}
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
