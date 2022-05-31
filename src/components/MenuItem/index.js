import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";
const MenuItem = (props) => {
  return (
    <li>
      <NavLink exact={props.exact} to={props.link} className={css.MenuItem}>
        {props.children}
      </NavLink>
    </li>
  );
};
export default MenuItem;
