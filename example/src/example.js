import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import 'highlight.js/styles/github.css';
import './example.less';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
