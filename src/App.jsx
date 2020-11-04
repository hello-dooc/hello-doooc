import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
// import Home from './home/Home'
import ShoppingCartH from './shoppingCart/ShoppingCartH'
import Training  from './zhichong/Training'
import Daily  from './market/Daily/Daily'
import Order  from './self/Order'

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path='/ShoppingCartH' component={ShoppingCartH}></Route>
          <Route path='/Training' component={Training}></Route>
          <Route path='/Daily' component={Daily}></Route>
          <Route path='/Order' component={Order}></Route>
          <Redirect from='/' to='/Daily'></Redirect>
        </Switch>
      </>
      // <Training></Training>
    )
  }
} 

/* import React from 'react'
import { Route, Redirect,Switch } from 'react-router-dom'
import ShoppingCartH from './shoppingCart/ShoppingCartH'
import Daily  from './market/Daily/Daily'



const App = (props) => {
  return (
    <>
    <Switch>
      <Route path="/shoppingcart" component={ShoppingCartH}></Route>
      <Route path="daily" component={Daily}></Route>
     
      
      <Redirect from="/" to="/daily"></Redirect> 
    </Switch>
    </>
  )
}

export default App   */