import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/paper-dashboard.scss';
import './assets/demo/demo.css';
import './App.css';

import AdminLogin from './views/Admin/AdminLogin';
import ComisLogin from './views/Comis/ComisLogin';
import Dashboard2 from './layouts/Comis.js';
import Dashboard from './layouts/Admin.js';
import Home from './views/Home/Home.jsx';
import School from './views/Home/School';
import Info from './views/Home/Schools/Info.js';
import Login from './views/Home/Login.js';
import Register3 from './views/Comis/Register3.js';
import Med from './views/Home/Med.js';
import Med2 from './views/Home/Med2_0.js';
import DashNavbar from './components/Navbars/DashNavbar.js';
import Layout from './layouts/Layout';
import { ElsegchStore } from './context/ElsegchContext';
ReactDOM.render(
  <BrowserRouter>
    <ElsegchStore>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/Info">
          <Layout>
            <Info />
          </Layout>
        </Route>
        <Route path="/Login">
          <Layout>
            <Login />
          </Layout>
        </Route>
        <Route path="/School">
          <Layout>
            <School />
          </Layout>
        </Route>
        <Route path="/Med">
          <Layout>
            <Med2 />
          </Layout>
        </Route>
      </Switch>
    </ElsegchStore>

    <Switch>
      <Route path="/comis" render={(props) => <Dashboard2 {...props} />} />
      <Route path="/Admin" render={(props) => <Dashboard {...props} />} />
      <Route path="/comis/2">
        <Register3 />
        <Link to="/comis/add">Back</Link>
      </Route>
      <Route path="/AdminLogin">
        <AdminLogin />
      </Route>
      <Route path="/ComisLogin">
        <ComisLogin />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
