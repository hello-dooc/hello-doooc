import ReactDOM from 'react-dom'
import React from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';

=======
// import { BrowserRouter as Router } from 'react-router-dom'

import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> origin/zhangyan
import { Provider } from 'react-redux' 


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
  document.querySelector('#root')
)