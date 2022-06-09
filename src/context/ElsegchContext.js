import React, { useState } from 'react';
import { BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs';
import axios from '../utils/axios.js';
const ElsegchContext = React.createContext();

const initialState = {
  burtgel_Id: null,
  email: null,
  fname: null,
  lname: null,
  rd: null,
  utas: null,
  error: null,
  loading : false,
  saving : false,
  too : 5,
  emailVerified : false,
  mergejils : []
};
export const ElsegchStore = (props) => {
  const [state, setState] = useState(initialState);
  const rememberMe = (butDugaar, EV) => {
    setState({...state, loading: true});
    if(EV){
      axios 
      .post('/elsegch/remember-me', { butDugaar })
      .then(result => {
        let data = result.data["butDugaar"];
        if(result.data.mergejils[0]?.mergejils){
          let mergejils = result.data.mergejils[0]?.mergejils.split(',');
          data["mergejils"] = mergejils;
        }
        console.log(data);
        if(result.data["too"].length > 0){
          data["too"] = 5 - result.data.too[0]?.count;
          console.log(data["too"]);
        }
        if (isNaN(data)) {
          setState({ ...state, error: null, loading : false, ...data, emailVerified:EV });
        }else{
          setState({
            ...state,
            error:null,
            burtgel_Id: data,
          });
        }

      })
      .catch(response => {
        setState({...state, loading : false, burtgel_Id:null});
      });      
      return ;
    }
    axios 
      .post('/elsegch/remember-me', { butDugaar })
      .then(result => {
        console.log(result.data)
        let data = result.data["butDugaar"];
        if(result.data.mergejils[0]?.mergejils){
          let array = result.data.mergejils[0]?.mergejils.split(',');
          data["mergejils"] =array;
        }
        console.log(data);
        if(result.data["too"].length > 0){
          data["too"] = 5 - result.data.too[0]?.count;
          console.log(data["too"]);
        }
        if (isNaN(data)) {
          setState({ ...state, error: null, loading : false, ...data });
        }else{
          setState({
            ...state,
            error:null,
            burtgel_Id: data,
          });
        }
      })
      .catch(response => {
        setState({...state, loading : false, burtgel_Id:null});
      });
  };

const googleOAuth = (token, profile,butDugaar) => {
    setState({
      ...state,
      loading: true,
    });

    if(state.email){
      if(state.email ===  profile.email){
        setState({
          ...state,
          emailVerified:true,
          loading: false,
        })
        localStorage.setItem("email",state.email);
        localStorage.setItem("burtgel_Id", state.burtgel_Id);
        localStorage.setItem("EV", true);
        return ;
      }else{
        setState({
          ...state,
          error : "Буруу и-мэйл хаяг байна",
          emailVerified:false,
          loading: false,
        })
        return ;
      }
    }
    axios.post('/elsegch/google', {
        token,
        burtgel_Id: butDugaar,
      }).then((response) => {
        let obj = response.data.data;
        setState({
          ...state,
          burtgel_Id : obj["burtgel_Id"],
          email : obj["email"],
          loading:false,
          emailVerified : true,
          error:null
        });
        localStorage.setItem("email",obj["email"]);
        localStorage.setItem("burtgel_Id",obj["burtgel_Id"]);
        localStorage.setItem("EV", true);
      })
      .catch((error) => {
        setState({
          ...state,
          loading:false,
          error :"Уучлаарай таны и-мэйл манай вэб бүртгэлтэй байна...",
          emailVerified : false
        });
      });
  };

  const insertMyInfo = (burtgelId, email, ovog, ner, rd, utas) => {

    setState({...state, loading:true});
    const data = {
      lname:ovog,
      fname:ner,
      email,
      rd,
      utas
    }
    axios.patch(`/elsegch/${burtgelId}`,data)
      .then(result=>{
        console.log(result.data)
        if(result.data.status =="success"){
          setState({...state, loading : false, error:null, fname : ner,lname:ovog,utas, rd, saving:true })
        }
      }).catch(error=>{
        console.log(error)
        setState({...state, error : error.message, loading : false,saving : false})
      })
  };

  const choose = (burtgel_Id, mergejilId, ognoo) => {
    setState({ ...state, loading : true});
    mergejilId = mergejilId.toString();
    
    if(state.mergejils.includes(mergejilId)){
      setState({
        ...state,
        error : "Таны сонгосон мэргэжил байна. Та өөрийн бүртгүүлсэн мэдээллээ хувийн мэдээлэл хэсгээс харах боломжтой.",
        loading : false
      });
      return;
    }
    const data = {
      burtgel_Id,
      mergejils:[
          mergejilId
      ],
      ognoo 
    }; 
    axios.post('/elsegch/mergejil',data).then(result=>{
      if(result.data.status=="success"){
        setState((prevState)=> (
          {...prevState, too : prevState.too - 1,
             saving : true, 
             mergejils : [...prevState.mergejils, mergejilId ] 
          })
        );
      }
    }).catch(error => setState(
      { ...state, error : error.message,
         loading : false, saving : false 
      }
    ));
  };
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("burtgel_Id");
    localStorage.removeItem("EV");  
    setState(initialState);
  };

  const autoLogin = (burtgel_Id, email, EV)=>{
    localStorage.setItem("burtgel_Id",burtgel_Id);
    localStorage.setItem("email", email);
    localStorage.setItem("EV",EV);
    rememberMe(burtgel_Id, EV);
  }

  return (
    <ElsegchContext.Provider
      value={{ state, rememberMe, googleOAuth, insertMyInfo, choose ,logout, autoLogin}} >
      {props.children}
    </ElsegchContext.Provider>
  );
};
export default ElsegchContext;
