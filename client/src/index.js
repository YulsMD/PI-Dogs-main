import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

axios.defaults.baseURL=process.env.REACT_APP_API || 'http://localhost:3001';

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
  ,
  document.getElementById('root')
);


