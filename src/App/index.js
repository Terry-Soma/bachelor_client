import React, { useContext, useEffect  } from 'react';
import { Route, Switch } from 'react-router';
import ElsegchContext from '../context/ElsegchContext';
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
import Logout from '../components/Logout';

export default function App() {

  const Ectx = useContext(ElsegchContext);

  useEffect(()=>{
    const burtgel_Id = localStorage.getItem("burtgel_Id");
    const email= localStorage.getItem("email");
    const emailVerified = localStorage.getItem("EV");
    if(burtgel_Id && email){
      Ectx.autoLogin(burtgel_Id, email, emailVerified)
    }
  },[])

  return (
    <div>
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
          <Route path="/logout">
            <Layout>
              <Logout />
            </Layout>
          </Route>
        </Switch>
      <Switch>
        <Route path="/comis" render={(props) => <Dashboard  {...props} />} />
        <Route path="/Admin" render={(props) => <Dashboard2 {...props} />} />
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
