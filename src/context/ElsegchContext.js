import React, { useState } from 'react';
import axios from '../utils/axios.js';
const ElsegchContext = React.createContext();
const initialState = {
  aimag_id: null,
  burtgel_Id: 1231,
  email: 'sdfsdf',
  fname: null,
  lname: null,
  rd: null,
  utas: null,
  error: null,
  loading: false,
};
export const ElsegchStore = (props) => {
  const [state, setState] = useState(initialState);

  const rememberMe = (butDugaar) => {
    setState({
      ...state,
      loading: true,
    });

    axios
      .post('/elsegch/remember-me', { butDugaar })
      .then((result) => {
        if (!isNaN(result.data.butDugaar)) {
          setState({
            ...state,
            burtgel_Id: result.data.butDugaar,
          });

          return;
        }
        setState({ ...state, error: null, ...result.data.butDugaar });
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        setState({ ...state, error: response.data.message });
      })
      .finally(() => setState({ ...state, loading: false }));
  };
  const googleOAuth = (token, butDugaar) => {
    setState({
      ...state,
      loading: true,
    });
    axios
      .post('/elsegch/google', {
        token,
        burtgel_Id: butDugaar,
      })
      .then((response) => {
        setState({ ...state, ...response.data.data });
      })
      .catch((err) => console.log(err))
      .finally(() => setState({ ...state, loading: false }));
  };
  const insertMyInfo = () => {};
  return (
    <ElsegchContext.Provider
      value={{ state, rememberMe, googleOAuth, insertMyInfo }}
    >
      {props.children}
    </ElsegchContext.Provider>
  );
};
export default ElsegchContext;
