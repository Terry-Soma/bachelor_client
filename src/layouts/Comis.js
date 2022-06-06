import React, { useState, useEffect } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { useHistory, Route, Switch, useLocation } from 'react-router-dom';
import DemoNavbar from '../components/Admin/DemoNavbar/index.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import cm from '../cm';
import routes from '../routes.js';
import axios from '../utils/axios.js';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
var ps;
function Dashboard(props) {
  let history = useHistory();
  const [backgroundColor, setBackgroundColor] = React.useState('black');
  const [activeColor, setActiveColor] = React.useState('info');
  const mainPanel = React.useRef();
  const location = useLocation();

  if (cm.st === false) {
    history.push('/comislogin');
  }
  const [data, setData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios.get('/users')
      .then(({ data })=> {
        setData(data.data);
      })
      .catch((error) =>{
        console.log(error);
      });
    data.map((e) => {
      if (e.email === cm.email) {
        setId(e.Id);
      }
    });
  }, []);
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle('perfect-scrollbar-on');
    }
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.body.classList.toggle('perfect-scrollbar-on');
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                st={location.state}
                path={prop.layout + prop.path}
                component={prop.component}
                id={id}
                key={key}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
