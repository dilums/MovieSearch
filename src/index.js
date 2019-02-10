import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import Store from './Store';

const app = <Provider store={ Store }><Router><App/></Router></Provider>;
ReactDOM.render(app, document.getElementById('root'));
