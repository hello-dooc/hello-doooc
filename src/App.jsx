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
import PetMarket from '@m/petMarket/container/PetMarket'
import Login from '@l/Login'
import Register from '@r/Register'
import Daily from '@m/Daily/Daily'
import BuyHome from '@b/BuyHome'
import Answer from '@z/Answer'
import Training from '@z/Training'
import ScreenAfter from '@m/petMarket/ui/ScreenAfter'
import Disease from '@z/Disease'
// 私有化组件
import PrivateRouter from './components/privateRouter/index'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <PrivateRouter path="/home" component={Home}></PrivateRouter> */}
          <Route path="/home" component={Home}></Route>
          <Route path="/love" component={Love}></Route>
          <Route path='/foodMarket' component={FoodMarket}></Route>
          <Route path='/self' component={SelfInfo} />
          <Route path='/order' component={Order} />
          <Route path='/address' component={AddressList} />
          <Route path='/add' component={AddAddress} />
          <Route path='/shoppingCart' component={ShoppingCart} />
          <Route path='/petMarket' component={PetMarket} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/daily' component={Daily} />
          <Route path='/buy' component={BuyHome} />
          <Route path='/answer' component={Answer} />
          <Route path='/training' component={Training} />
          <Route path='/screen' component={ScreenAfter} />
          <Route path='/disease' component={Disease} />
          <Redirect  from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    )
  }
}

