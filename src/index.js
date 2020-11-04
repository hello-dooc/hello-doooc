import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import 'antd/dist/antd.css';
import './assets/styles/reset.css'

ReactDOM.render(
  <Router>
   
      <App></App>
    
  </Router>,
  document.querySelector('#root')
)