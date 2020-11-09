import ReactDOM from 'react-dom'
import React from 'react'
<<<<<<< HEAD
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import './assets/styles/reset.css'
// import {Provider} from 'react-redux'
// import store from './store'

ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <App></App>
    </Router>,
  // </Provider>,
=======
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux' 
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store/'

import App from './App'
import '@a/styles/reset.css'
import '@a/icon/iconfont.css'
import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App></App>
    </Provider>
  </Router>,
>>>>>>> master
  document.querySelector('#root')
)