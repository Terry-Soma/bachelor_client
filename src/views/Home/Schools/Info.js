import React, { useState, useEffect, useContext } from 'react';
import {
  Card,
  CardBody,
  InputGroup,
  Input,
  InputGroupAddon,
  Table,
} from 'reactstrap';
import axios from '../../../utils/axios.js';
import ElsegchContext from '../../../context/ElsegchContext.js';
import {toast, ToastContainer} from 'react-toastify';
export default function Info() {
  const Ectx = useContext(ElsegchContext);
  const [info, setInfo] = useState([]);
  const [searchTerm, setST ] = useState("")
  const [saving, setSV] = useState(false)
  useEffect(() => {
    axios
      .get('/views/allinfo')
      .then(({ data }) => setInfo(data.data))
      .catch((err) => console.log(err));
    
    if(Ectx.state.burtgel_Id) {
      Ectx.rememberMe(Ectx.state.burtgel_Id);
    }
  }, []);

  useEffect(()=>{
    if(Ectx.state.saving && saving){
      let too = parseInt(Ectx.state.too);
      let text = too > 0 ? `${too}  удаа мэргэжил сонгох боломжтой` :"мэргэжил сонгох боломжгүй";
      toast.success("Мэргэжил сонголт амжилттай.Та сонгосон мэдээллээ хувийн мэдээлэл хэсгээс харна уу. Та дахин  "+ text);
      setSV(false);
    }
  },[Ectx.state.too]); 

  
  const chooseMergejil = mergejilId =>{
    setSV(true)
    if(parseInt(Ectx.state.too) < 0){
      toast.error('Уучлаарай, Та 5-аас дээш мэргэжил сонгох боломжгүй')
      return;
    }
    let ognoo = new Date().toISOString();
    Ectx.choose(Ectx.state.burtgel_Id, mergejilId, ognoo);
    return;
  }

  const filteredinfo = info.filter(el =>
    el.m_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Card style={{ backgroundColor: '#f2f2f2' }} >
      <InputGroup className="no-border text-center">
          <Input
            onChange={(event)=> setST(event.target.value)
            }
            placeholder="Мэргэжлийн нэрээр хайх..."
            className='text-center fs-4 lead bg-'
            
          />
        <InputGroupAddon addonType="append"></InputGroupAddon>
      </InputGroup>
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
        <CardBody>
          <Table striped bordered hover responsive>
            <thead className="text-primary">
              <tr>
              {Ectx.state.burtgel_Id && Ectx.state.email && 
              (
                <th className="text-right"></th>
              )
              } 
                <th className="lead fs-5 text-center">Сургуулийн нэр</th>
                <th className="lead fs-5 text-center">Хөтөлбөрийн нэр</th>
                <th className="lead fs-5 text-center">Мэргэжил</th>
                <th className="lead fs-5 text-center">Мэргэшил</th>
                <th className="lead fs-5 text-center">Босго оноо</th>
                <th className="lead fs-5 text-center">Шалгуур 1</th>
                <th className="lead fs-5 text-center">Шалгуур 2</th>
              </tr>
            </thead>
            <tbody>
              {filteredinfo &&
                filteredinfo.map(function (e, index, array) {
                  let sh2;
                  if (
                    index < filteredinfo.length &&
                    array[++index]?.MergejilId === e.MergejilId
                  ) {
                    sh2 = array[index]?.shalgalt;
                  } else if (array[index - 2]?.MergejilId === e.MergejilId) {
                    return;
                  }
                  return (
                    <tr key={e.MergejilId}>
                    {Ectx.state.burtgel_Id && Ectx.state.email &&
                    (
                    <td className="lead fs-5">
                      <button className='btn btn-primary' onClick={()=> chooseMergejil(e.MergejilId)}>
                        Сонгох
                      </button>
                    </td>
                    )
                    }
                      <a href={e.link} target='_blank'>
                      <td className="lead fs-5">{e.s_name}</td>
                      <td className="lead fs-5">{e.h_name}</td>
                      <td className="lead fs-5">{e.m_name}</td>
                      <td>
                        <div className="mergeshil lead fs-5">{e.mergeshil}</div>
                      </td>
                      <td className="lead fs-5">{e.bosgo_onoo}</td>
                      <td className="lead fs-5">{e.shalgalt}</td>
                      </a>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
