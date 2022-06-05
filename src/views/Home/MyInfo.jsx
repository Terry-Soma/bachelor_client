import React, { useState, useEffect, useContext } from 'react';
import css from './style.module.css';
import { useHistory } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';
import axios from '../../utils/axios.js';
import ElsegchContext from '../../context/ElsegchContext.js';
import validator from 'validator';
import {toast, ToastContainer} from 'react-toastify';

export default function MInfo() {
  const Ectx = useContext(ElsegchContext);
  const [mergejils, setMergejils] = useState([]);
  let history = useHistory();
  const [saving, setSaving ]= useState(false);

  // if (Ectx.state.burtgel_Id === null && Ectx.state.email === null)
  //   history.push('/login');

  useEffect(()=>{
    if(Ectx.state.saving && saving)
      toast.success("Амжилттай хадгаллаа.");
  },[saving, Ectx.state.fname, Ectx.state.lname, Ectx.state.utas, Ectx.state.rd])  

  useEffect(()=>{
    let burtgelId = localStorage.getItem("burtgel_Id");
    if(burtgelId){
      Ectx.rememberMe(burtgelId);
    }
    axios.get(`/elsegch/${burtgelId}/mergejil`)
      .then(result=>{
        setMergejils([...result.data.data]);
      }).catch(err=>
        toast.error("Уучлаарай алдаа гарлаа. Та дахин туршаад үзээрэй.")
       );
  },[])
  const [rd, setRd] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [utas, setUtas] = useState('');
  const [error, setError] = useState({
    ovog: null,
    ner: null,
    rd: null,
    utas: null,
    main: "",
  });
  const handleOvog = (e) => {
    if (validator.isInt(e.target.value)) {
      setError({ ...error, ovog: 'Овог талбарт тоо орох боломжгүй' });
      return;
    }
    if (validator.isAlpha(e.target.value)) {
      setError({ ...error, ovog: 'Овог талбарт гадаад үсэг орох боломжгүй' });

      return;
    }
    setLname(e.target.value);
    setError({ ...error, ovog: '' });
  };

  const handleNer = (e) => {
    if (validator.isInt(e.target.value)) {
      setError({ ...error, ner: 'Нэр талбарт тоо орох боломжгүй' });
      return;
    }
    if (validator.isAlpha(e.target.value)) {
      setError({ ...error, ner: 'Нэр талбарт гадаад үсэг орох боломжгүй' });

      return;
    }
    setFname(e.target.value);
    setError({ ...error, ner: '' });
  };

  const handleRd = (e) => {
    if (validator.isAlpha(e.target.value)) {
      setError({ ...error, rd: 'Регистр талбарт гадаад үсэг орох боломжгүй' });
      return;
    }
    if (validator.matches(e.target.value, /[А-ЯӨҮ]{2}[0-9]{8}/gm)) {
      setRd(e.target.value);
      setError({
        ...error,
        rd: '',
      });
      return;
    }
    setError({
      ...error,
      rd: 'Таны регистрийн дугаар 2 үсэг 8 тоогоос тогтох ёстой',
    });
  };

  const handleUtas = (e) => {
    if (e.target.value == '' && utas.length == 1) {
      setUtas('');
      setError({
        ...error,
        utas: null,
      });
      return;
    }
    if (validator.isInt(e.target.value)) {
      setError({
        ...error,
        utas: null,
      });
      setUtas(e.target.value);
      return;
    }
    setError({
      ...error,
      utas: 'Та зөвхөн тоо оруулах боломжтой',
    });
    return;
  };

  const handleBurtgel = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(lName) ||
      validator.isEmpty(fName) ||
      validator.isEmpty(rd) ||
      validator.isEmpty(utas)
    ) {
      setError({
        ...error,
        main: 'Таны оруулсан өгөгдөл хоосон эсвэл алдаатай байна',
      });
      return;
    }
    setError({
      ...error,
      main: '',
    });
    setSaving(true);
    Ectx.insertMyInfo(Ectx.state.burtgel_Id, Ectx.state.email, lName, fName, rd, utas);
  };


  return (
    <div className="container">
      {Ectx.state.fname && Ectx.state.lname && Ectx.state.rd && Ectx.state.utas ? ( 
        <>
    <Card>
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
        <ToastContainer />
        <Card.Header as="h5">Хувийн мэдээлэл</Card.Header>
        <Card.Title as="p" className="lead alert alert-info p2">
          {' '}
          Хэрвээ мэдээллээ буруу оруулсан тохиолдолд сургалтын албаны
          мэргэжилтэнтэй холбогдоно уу
        </Card.Title>
        <Card.Body>
          {error.main && (
            <div class="alert alert-danger" role="alert">
              {error.main}
            </div>
          )}
          {Ectx.state.error && (
            <div class="alert alert-danger" role="alert">
              {Ectx.state.error}
            </div>
          )}
          <form onSubmit={handleBurtgel} className="form-floating">
            <div className={`row ${css.dd}`}>
              <div className="form-floating mb-3 mt-3 col">
                <input
                  type="text"
                  className="form-control input-lg"
                  id="ovog"
                  placeholder="Овгоо оруллна уу"
                  name="ovog"
                  onChange={handleOvog}
                  disabled
                  value={Ectx.state.lname}
                />
                <label htmlFor="ovog" className=" ps-4">
                  Овог
                </label>
                {error.ovog && (
                  <span class="error text-danger">{error.ovog}</span>
                )}
              </div>
              <div className="form-floating mt-3 mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="ner"
                  placeholder="Нэрээ оруулна уу"
                  name="ner"
                  disabled
                  value={Ectx.state.fname}
                  onChange={handleNer}
                />
                <label htmlFor="ner" className=" ps-4">
                  Нэр
                </label>
                {error.ner && (
                  <span class="error text-danger">{error.ner}</span>
                )}
              </div>
            </div>
            <div className={`row ${css.dd}`}>
              <div className="form-floating mb-3 mt-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="rd"
                  placeholder="Регистрийн дугаараа оруулна уу"
                  name="rd"
                  disabled
                  value={Ectx.state.rd}
                  onChange={handleRd}
                />
                <label htmlFor="rd" className="ps-4">
                  Регистрийн дугаар
                </label>
                {error.rd && <span class="error text-danger">{error.rd}</span>}
              </div>
              <div className="form-floating mt-3 mb-3 col">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="И-мэйл хаягаа оруулна уу"
                  disabled
                  name="email"
                  value={Ectx.state.email}
                />
                <label htmlFor="email" className="ps-4">
                  И-мэйл
                </label>
              </div>
            </div>

            <div className={`row ${css.dd}`}>
              <div className="form-floating mb-3 mt-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="but"
                  placeholder="БҮТ дугаараа оруулна уу"
                  name="but"
                  disabled
                  value={Ectx.state.burtgel_Id}
                />
                <label htmlFor="but" className="ps-4">
                  БҮТ дугаар
                </label>
              </div>
              <div className="form-floating mt-3 mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="utas"
                  placeholder="Утасны дугаараа оруулна уу"
                  name="utas"
                  disabled
                  value={Ectx.state.utas}
                  onChange={handleUtas}
                />
                <label htmlFor="utas" className="ps-4">
                  Утасны дугаар
                </label>
                {error.utas && (
                  <span class="error text-danger">{error.utas}</span>
                )}
              </div>
            </div>

            <button type="submit" class="btn btn-primary" disabled>
              {Ectx.state.loading ? (
                <Spinner animation="border" variant="dark" />
              ) : (
                ' Хадгалах'
              )}
            </button>
          </form>
        </Card.Body>
      </Card>
     
      {mergejils.length > 0 && (
        <Card>
          <Card.Body>
            <p className='lead alert alert-info p-4 fs-4'> Таны сонгосон мэргэжлүүд</p>
          </Card.Body>
        </Card>
      )}
               
      {mergejils &&
                mergejils.map( mergejil => {
                  return (
                    <Card key={mergejil.mergejilId}>
                      <Card.Body>
                        <p className='lead fs-4 p-2'>
                          {mergejil.Mergejil.name}
                        </p>
                      </Card.Body>
                    </Card>
                  );
                })
             }
      </>
      )
       : 
      (/* medeelel baihgui uy */
      <>
      <Card>
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
       <ToastContainer />
        <Card.Header as="h5">Хувийн мэдээлэл</Card.Header>
        <Card.Title as="p" className="lead alert alert-info p2">
          {' '}
          Хэрвээ мэдээллээ буруу оруулсан тохиолдолд сургалтын албаны
          мэргэжилтэнтэй холбогдоно уу
        </Card.Title>
        <Card.Body>
          {error.main && (
            <div class="alert alert-danger" role="alert">
              {error.main}
            </div>
          )}
          {Ectx.state.error && (
            <div class="alert alert-danger" role="alert">
              Уучлаарай, Алдаа гарлаа....
            </div>
          )}
          <form onSubmit={handleBurtgel} className="form-floating">
            <div className={`row ${css.dd}`}>
              <div className="form-floating mb-3 mt-3 col">
                <input
                  type="text"
                  className="form-control input-lg"
                  id="ovog"
                  placeholder="Овгоо оруллна уу"
                  name="ovog"
                  onChange={handleOvog}
                  value={lName}
                />
                <label htmlFor="ovog" className=" ps-4">
                  Овог
                </label>
                {error.ovog && (
                  <span class="error text-danger">{error.ovog}</span>
                )}
              </div>
              <div className="form-floating mt-3 mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="ner"
                  placeholder="Нэрээ оруулна уу"
                  name="ner"
                  value={fName}
                  onChange={handleNer}
                />
                <label htmlFor="ner" className=" ps-4">
                  Нэр
                </label>
                {error.ner && (
                  <span class="error text-danger">{error.ner}</span>
                )}
              </div>
            </div>
            <div className={`row ${css.dd}`}>
              <div className="form-floating mb-3 mt-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="rd"
                  placeholder="Регистрийн дугаараа оруулна уу"
                  name="rd"
                  onChange={handleRd}
                />
                <label htmlFor="rd" className="ps-4">
                  Регистрийн дугаар
                </label>
                {error.rd && <span class="error text-danger">{error.rd}</span>}
              </div>
              <div className="form-floating mt-3 mb-3 col">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="И-мэйл хаягаа оруулна уу"
                  disabled
                  name="email"
                  value={Ectx.state.email}
                />
                <label htmlFor="email" className="ps-4">
                  И-мэйл
                </label>
              </div>
            </div>

            <div className={`row ${css.dd}`}>
              <div className="form-floating mb-3 mt-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="but"
                  placeholder="БҮТ дугаараа оруулна уу"
                  name="but"
                  disabled
                  value={Ectx.state.burtgel_Id}
                />
                <label htmlFor="but" className="ps-4">
                  БҮТ дугаар
                </label>
              </div>
              <div className="form-floating mt-3 mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="utas"
                  placeholder="Утасны дугаараа оруулна уу"
                  name="utas"
                  value={utas}
                  onChange={handleUtas}
                />
                <label htmlFor="utas" className="ps-4">
                  Утасны дугаар
                </label>
                {error.utas && (
                  <span class="error text-danger">{error.utas}</span>
                )}
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              {Ectx.state.loading ? (
                <Spinner animation="border" variant="dark" />
              ) : (
                ' Хадгалах'
              )}
            </button>
          </form>
        </Card.Body>
      </Card>
      {mergejils.length > 0 && (
        <Card>
          <Card.Body>
            <p className='lead alert alert-info p-4 fs-4'> Таны сонгосон мэргэжлүүд</p>
          </Card.Body>
        </Card>
      )}
               
      {mergejils &&
                mergejils.map( mergejil => {
                  return (
                    <Card key={mergejil.mergejilId}>
                      <Card.Body>
                        <p className='lead fs-4 p-2'>
                          {mergejil.Mergejil.name}
                        </p>
                      </Card.Body>
                    </Card>
                  );
                })
             }
      </>
      )}
    
    </div>
  );
}
