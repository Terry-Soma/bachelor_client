import React from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import { NavLink } from "react-router-dom";

export default function DashNavbar() {
  return (
    <div>
      <Menu />
    </div>
  );
}
