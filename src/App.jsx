import React, { Component } from 'react'
import LinkIndex from './zhichong/LinkIndex'
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/zhichong" component={LinkIndex}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path ="/register" component={Register}></Route>
          <Redirect  from='/' to='/zhichong'></Redirect>
        </Switch>
      </Router>
    )
  }
}