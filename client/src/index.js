import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import * as serviceWorker from './serviceWorker';
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
