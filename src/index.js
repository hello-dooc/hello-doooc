import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import './assets/styles/reset.css'


ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.querySelector('#root')
)