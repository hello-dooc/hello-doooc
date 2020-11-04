import React,{Component} from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router ,
  Redirect
} from 'react-router-dom'
// import Home from '../src/home/home/index'
// import Food from '../src/home/food/index'
import Love from '@h/love/container/Love'

import Home from '@h/home/container/Home'
import FoodMarket from '@h/food/container/Food'
import SelfInfo from '@s/SelfInfo'
import Order from '@s/Order'
import AddressList from '@d/AddressList'
import AddAddress from '@d/AddAddress'
import ShoppingCart from '@sc/ShoppingCartH'
import PetMarket from '@m/petMarket/PetMarket'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/love" component={Love}></Route>
          <Route path='/foodMarket' component={FoodMarket}></Route>
          <Route path='/self' component={SelfInfo} />
          <Route path='/order' component={Order} />
          <Route path='/address' component={AddressList} />
          <Route path='/add' component={AddAddress} />
          <Route path='/shoppingCart' component={ShoppingCart} />
          <Route path='/petMarket' component={PetMarket} />
          <Redirect  from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    )
  }
}

