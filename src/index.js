import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const Application = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(
  Application,
  document.getElementById('root')
);

serviceWorker.unregister();
