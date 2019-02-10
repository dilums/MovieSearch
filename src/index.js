import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import Store from './Store';

const app = <Provider store={ Store }><BrowserRouter basename={process.env.PUBLIC_URL}><App/></BrowserRouter></Provider>;
ReactDOM.render(app, document.getElementById('root'));
