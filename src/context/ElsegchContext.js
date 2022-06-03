import React, { useState } from 'react';
import axios from '../utils/axios.js';
const ElsegchContext = React.createContext();
const initialState = {
  aimag_id: null,
  bichig_barimt: false,
  burtgel_Id: null,
  email: null,
  fname: null,
  lname: null,
  gerchilgee_dugaar: null,
  img: null,
  komisId: null,
  rd: null,
  utas: null,
  error: null,
};
export const ElsegchStore = (props) => {
  const [state, setState] = useState(initialState);

  const rememberMe = (butDugaar) => {
    //   loading'
    console.log('loading');

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
        setState({ ...state, ...result.data.butDugaar });
      })
      .catch((err) => {
        console.log(err.response);
        // setState({ ...state, error: response.data.message });
      })
      .finally(console.log('finally'));
    // end loading
  };
  const googleOAuth = (token, butDugaar) => {
    axios
      .post('/elsegch/google', {
        token,
        burtgelId: butDugaar,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err))
      .finally(/* set loading false */);
  };
  return (
    <ElsegchContext.Provider value={{ state, rememberMe }}>
      {props.children}
    </ElsegchContext.Provider>
  );
};
export default ElsegchContext;
