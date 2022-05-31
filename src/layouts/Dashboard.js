import React from "react";
import { Route, Switch } from "react-router-dom";
import DashNavbar from "../components/Navbars/DashNavbar.js";
import About from "../views/Home/About.js";
import Home from "../views/Home/Home.js";
import Info from "../views/Home/Info.js";
import Login from "../views/Home/Login.js";

function Dashboard() {
  return (
    <>
      <DashNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          asdasdasd
          <About />
        </Route>
        <Route path="/Info" component={<Info />}>
          asdasdasd
          <Info />
        </Route>
        <Route path="/Login">
          asdasdasd
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default Dashboard;
