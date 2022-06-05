import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import ElsegchContext from "../../context/ElsegchContext";

const Logout = (props) => {
  const Ectx = useContext(ElsegchContext);
  useEffect(() => {
    Ectx.logout();
  }, []);

  return <Redirect to="/" />;
};

export default Logout;
