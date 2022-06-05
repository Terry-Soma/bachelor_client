import React, { useState } from 'react';
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
  loading: false,
  saving:false,
  too:5
};
export const ElsegchStore = (props) => {
  const [state, setState] = useState(initialState);

  const rememberMe = (butDugaar) => {
    setState({...state, loading: true});

    axios 
      .post('/elsegch/remember-me', { butDugaar })
      .then(result => {
        const data = result.data["butDugaar"];
        if(result.data["too"].length > 0){
          data["too"] = 5 - result.data.too[0]?.count;
          console.log(data["too"]);
        }
        if (isNaN(data)) {
          setState({ ...state, error: null, loading : false, ...data });
          localStorage.setItem("burtgel_Id",data["burtgel_Id"]);
          localStorage.setItem("email", data["email"]);
        }else{
          setState({
            ...state,
            error:null,
            burtgel_Id: data,
          });
          localStorage.setItem("burtgel_Id",data);
        }
      })
      .catch(response => {
        setState({...state, loading : false, burtgel_Id:null});
      });
  };

const googleOAuth = (token, butDugaar) => {
    setState({
      ...state,
      loading: true,
    });
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
          error:null
        });
        localStorage.setItem("email",obj["email"]);
      })
      .catch((error) => {
        setState({
          ...state,
          loading:false,
          error :"Уучлаарай таны и-мэйл манай вэб бүртгэлтэй байна..."
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

  const choose = (burtgel_Id, mergejilId, ognoo)=>{
    setState({ ...state, loading : false});
    const data = {
      burtgel_Id,
      mergejils:[
          mergejilId
      ],
      ognoo 
    };
    axios.post('/elsegch/mergejil',data).then(result=>{
      if(result.data.status=="success"){
        setState({...state, too : state.too-1, saving : true});
      }
    }).catch(error=>setState({ ...state, error : error.message, loading : false, saving : false }));
  };
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("burtgel_Id");
    setState(initialState);
  };

  const autoLogin = (burtgel_Id, email)=>{
    localStorage.setItem("burtgel_Id",burtgel_Id);
    localStorage.setItem("email", email);

    setState({
      ...state,
      loading: false,
      error: null,
      email,
      burtgel_Id,
    });
  }

  return (
    <ElsegchContext.Provider
      value={{ state, rememberMe, googleOAuth, insertMyInfo, choose ,logout, autoLogin}}
    >
      {props.children}
    </ElsegchContext.Provider>
  );
};
export default ElsegchContext;
