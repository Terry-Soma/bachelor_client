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
  saving:false
};
export const ElsegchStore = (props) => {
  const [state, setState] = useState(initialState);

  const rememberMe = (butDugaar) => {
    setState({...state, loading: true});

    axios 
      .post('/elsegch/remember-me', { butDugaar })
      .then(result => {
        const data = result.data["butDugaar"];
        console.log(data)
        if (isNaN(data)) {
          setState({ ...state, error: null,loading :false,...data })
          localStorage.setItem("burtgel_Id",data["burtgel_Id"]);
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
          error
        });
      });
  };

  const insertMyInfo = (burtgelId, ovog, ner, rd, utas) => {
    setState({...state, loading:true});
    const data = {
      lname:ovog,
      fname:ner,
      rd,
      utas
    }
    axios.patch(`/elsegch/${burtgelId}`,data)
      .then(result=>{
        console.log(result.data)
        if(result.data.status =="success"){
          setState({...state, loading : false, error:null, fname:ner,lname:ovog,utas, rd, saving:true })
        }
      }).catch(error=>{
        console.log(error)
        setState({...state, error : error.message, loading : false,saving:false})
      })
  };
  return (
    <ElsegchContext.Provider
      value={{ state, rememberMe, googleOAuth, insertMyInfo }}
    >
      {props.children}
    </ElsegchContext.Provider>
  );
};
export default ElsegchContext;
