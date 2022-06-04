import React from 'react';
import { Route, Switch } from 'react-router';
import { ElsegchStore } from '../context/ElsegchContext';
import Dashboard2 from '../layouts/Admin';
import Dashboard from '../layouts/Comis';
import Layout from '../layouts/Layout';
import AdminLogin from '../views/Admin/AdminLogin';
import ComisLogin from '../views/Comis/ComisLogin';
import Home from '../views/Home/Home.jsx';
import Register3 from '../views/Comis/Register3';
import Login from '../views/Home/Login';
import MInfo from '../views/Home/MyInfo.jsx';
import School from '../views/Home/School';
import Info from '../views/Home/Schools/Info';

export default function App() {
  return (
    <div>
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
          <Route path="/my-info">
            <Layout>
              <MInfo />
            </Layout>
          </Route>
        </Switch>
      </ElsegchStore>
      <Switch>
        <Route path="/comis" render={(props) => <Dashboard2 {...props} />} />
        <Route path="/Admin" render={(props) => <Dashboard {...props} />} />
        <Route path="/comis/2">
          <Register3 />
          {/* <Link to="/comis/add">Back</Link> */}
        </Route>
        <Route path="/AdminLogin">
          <AdminLogin />
        </Route>
        <Route path="/ComisLogin">
          <ComisLogin />
        </Route>
      </Switch>
    </div>
  );
}
