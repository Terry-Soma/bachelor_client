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
import css from '../style.module.css';
import { useLocation } from 'react-router-dom';
export default function Info() {
  let query = useLocation();

  
  let filteredinfo = [];
  const Ectx = useContext(ElsegchContext);
  const [info, setInfo] = useState([]);
  const [searchTerm, setST ] = useState("")
  const [saving, setSV] = useState(false)
  const [bread, setBread] = useState({
    magister : false,
    bachelor : true,
    two : false
  });
  useEffect(() => {
    axios
      .get('/views/allinfo')
      .then(({ data }) => setInfo(data.data))
      .catch((err) => console.log("Error"));
    
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

  useEffect(()=>{
    if(Ectx.state.error){
      toast.error(Ectx.state.error);
      setSV(false);
    }
  },[Ectx.state.error]); 

  if(query.state && query.state != 'РОЯАЛЬ ОЛОН УЛСЫН ИХ СУРГУУЛЬ' && 
    query.state != 'ЖЭСАН ЧИНГИС ХААН ГАДААД ХЭЛ СОЁЛЫН СУРГУУЛЬ' &&
    query.state != 'ИХ ЗАСАГ МЭРГЭЖИЛ СУРГАЛТЫН ҮЙЛДВЭРЛЭЛИЙН ТӨВ'
    )
    {
    let s = query.state.toString();
    filteredinfo = info.filter(el =>
    el.s_name.toLowerCase().includes(s.toLowerCase())
    );
  }else if(searchTerm) {
    if(searchTerm == "?"){
      filteredinfo = info.slice(0,69);
    }else if(searchTerm == "@"){
      filteredinfo = info.filter(el =>
        el.mergeshil.toLowerCase().includes("2+2")
      );  
    }
    else{
      filteredinfo = info.filter(el =>
        el.m_name.toLowerCase().includes(searchTerm.toLowerCase())
      );  
    }
  }else{
    if(!filteredinfo.length > 0) filteredinfo = info.slice(0,69);
  }
  
  const chooseMergejil = mergejilId =>{
    setSV(true)
    if(parseInt(Ectx.state.too) <= 0){
      toast.error('Уучлаарай, Та 5-аас дээш мэргэжил сонгох боломжгүй')
      return;
    }
    let ognoo = new Date().toISOString();
    Ectx.choose(Ectx.state.burtgel_Id, mergejilId, ognoo);
    return;
  }
 
  const breadB = ()=>{
    setBread({
      magister:false,
      bachelor : true,
      two : false
    })
    setST("?")
  } 
  
  const breadT = () =>{
    console.log('bi ')
    setBread({
      magister:false,
      bachelor : false,
      two: true
    })
    setST("@");
  } 
  const breadM = ()=>{
    setBread({
      magister:true,
      bachelor : false,
      two : false
    })
      setST('Магистр')
  } 
  
  let fill = [...filteredinfo]
  return (
    <>
      <Card style={{ backgroundColor: '#02338a' }}  className="container text-light">
      <InputGroup className="no-border text-center">
          <Input
            onChange={(event)=> setST(event.target.value)
            }
            placeholder="Мэргэжлийн нэрээр хайх..."
            className={`text-center fs-4 lead text-white pt-4 ${css.mer__search}`}
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
      <nav>
        <ol className="breadcrumb">
          <li className={`breadcrumb-item lead fs-1 pe-2 ${bread.magister ? "active" : ""} `} onClick={breadM}>Магистр</li>
          <li className={`breadcrumb-item lead fs-1 pe-2 ${bread.bachelor ? "active" : ""} `} onClick={breadB}>Бакалавр</li>
          <li className={`breadcrumb-item lead fs-1 pe-2 ${bread.two ? "active" : ""} `} onClick={breadT}>2 + 2</li>

        </ol>
      </nav>

          <Table  bordered hover responsive  style={{background : "#02338a", borderColor : "#f3f3f388", color:"#fff"}} className={`${css["table--hover-blue"]}`}>
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
              {filteredinfo && fill &&
                fill.map(function (e, index, array) {
                  let sh2;
                  if(e.MergejilId == 8 || e.MergejilId == 9){
                    if(bread.bachelor) return;
                    else {
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
                          <td className="lead fs-5">
                          <a href={e.mlink ? e.mlink : e.link} target="_blank">{e.s_name} </a></td>
                          <td className="lead fs-5">{e.h_name}</td>
                          <td className="lead fs-5">{e.m_name}</td>
                          <td>
                            <div className="mergeshil lead fs-5">{e.mergeshil}</div>
                          </td>
                          <td className="lead fs-5">{e.bosgo_onoo}</td>
                          <td className="lead fs-5">{e.shalgalt}</td>
                          <td className="lead fs-5">{sh2}</td>
                        </tr>
                      );
                    }
                    
                  }
                  if(e.MergejilId == 7 || e.MergejilId == 15){
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
                      <td className="lead fs-5">
                      <a href={e.mlink ? e.mlink : e.link} target="_blank">{e.s_name} </a></td>
                      <td className="lead fs-5">{e.h_name}</td>
                      <td className="lead fs-5">{e.m_name}</td>
                      <td>
                        <div className="mergeshil lead fs-5">{e.mergeshil}</div>
                      </td>
                      <td className="lead fs-5"></td>
                      <td className="lead fs-5"></td>
                      <td className="lead fs-5"></td>
                    </tr>
                    );
                  }
                  if (
                    index < fill.length &&
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
                      <td className="lead fs-5">
                      <a href={e.mlink ? e.mlink : e.link} target="_blank">{e.s_name} </a></td>
                      <td className="lead fs-5">{e.h_name}</td>
                      <td className="lead fs-5">{e.m_name}</td>
                      <td>
                        <div className="mergeshil lead fs-5">{e.mergeshil}</div>
                      </td>
                      <td className="lead fs-5">{e.bosgo_onoo}</td>
                      <td className="lead fs-5">{e.shalgalt}</td>
                      <td className="lead fs-5">{sh2}</td>
                    </tr>
                  );
                })
              }

            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
