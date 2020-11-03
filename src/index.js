import ReactDOM from 'react-dom'
import React from 'react'
<<<<<<< HEAD

import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'
=======
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import './assets/styles/reset.css'
>>>>>>> origin/zhangyan

import store from './store/'

import App from './App'
import '@a/styles/reset.css'
import '@a/icon/iconfont.css'
import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
<<<<<<< HEAD
    <Provider store={store}>
      <App></App>
    </Provider>
=======
    <App></App>
>>>>>>> origin/zhangyan
  </Router>,
  document.querySelector('#root')
)