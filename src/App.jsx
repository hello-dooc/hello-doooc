import React, { Component } from 'react'
import LinkIndex from './zhichong/LinkIndex'
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'

import Home from '@h/Home'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          
          <Route path="/home" component={LinkIndex}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path ="/register" component={Register}></Route>
          {/* <Route path='/self' component={SelfInfo}></Route>
          <Route path='/address' component={AddressList}></Route>
          <Route path='/add' component={AddAddress}></Route>
          <Route path="/petMarket" component={PetMarket}></Route>
          <Redirect from='/' to='/self'></Redirect> */}
          {/* <Redirect  from='/' to='/zhichong'></Redirect> */}
          <Redirect  from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    )
  }
}