import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { useHistory, Route, Switch, useLocation } from 'react-router-dom';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import DemoNavbar from '../components/Admin/DemoNavbar/index.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import ad from '../ad';
import routes from '../adminRoutes.js';

var ps;

function Dashboard2(props) {
  let history = useHistory();
  const [backgroundColor, setBackgroundColor] = React.useState('black');
  const [activeColor, setActiveColor] = React.useState('info');
  const mainPanel = React.useRef();
  const location = useLocation();

  if (ad.st === false) {
    history.push('/adminlogin');
  }

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
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard2;
