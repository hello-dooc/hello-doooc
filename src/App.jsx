import React, { Component } from 'react'
import LinkIndex from './zhichong/LinkIndex'
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'

export default class App extends Component {
  render() {
    return (
      // <Home></Home>,
      // <ShoppingCartH></ShoppingCartH>
      // <Training></Training>
      // <Daily></Daily>
      // <Order></Order>

      <Router>
        <Switch>
          <Route path="/zhichong" component={LinkIndex}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path ="/register" component={Register}></Route>
          <Route path='/self' component={SelfInfo}></Route>
          <Route path='/address' component={AddressList}></Route>
          <Route path='/add' component={AddAddress}></Route>
          <Route path="/petMarket" component={PetMarket}></Route>
          <Redirect from='/' to='/self'></Redirect>
          <Redirect  from='/' to='/zhichong'></Redirect>
        </Switch>
      </Router>
    )
  }
}