import ReactDOM from 'react-dom'
import React from 'react'

import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

<<<<<<< HEAD
import 'antd/dist/antd.css';
import './assets/styles/reset.css'
=======
import store from './store/'

import App from './App'
import '@a/styles/reset.css'
import '@a/icon/iconfont.css'
import 'antd/dist/antd.css';
>>>>>>> hm

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App></App>
    </Provider>
  </Router>,
  document.querySelector('#root')
)