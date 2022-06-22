import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/paper-dashboard.scss';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import App from './App/index.js';
import { ElsegchStore } from './context/ElsegchContext';

ReactDOM.render(
  <BrowserRouter>
    <ElsegchStore>
      <App />
    </ElsegchStore>
  </BrowserRouter>,
  document.getElementById('root')
);
