import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './firebase';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
