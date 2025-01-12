import React,{Component} from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router ,
  Redirect
} from 'react-router-dom'

import Love from '@h/love/container/Love'

import Home from '@h/home/container/Home'
import FoodMarket from '@h/food/container/Food'
import Order from '@s/Order'
import AddressList from '@d/AddressList'
import AddAddress from '@d/AddAddress'
import ShoppingCart from '@sc/ShoppingCartH'
import PetMarket from '@m/petMarket/container/PetMarket'
import Login from '@l/Login'
import Register from '@r/Register'
import Daily from '@m/Daily/Daily'
import BuyHome from '@b/BuyHome'
import ScreenAfter from '@m/petMarket/ui/ScreenAfter'
import KnowUi from '@z/KnowUi'


import GoodsDetail from '@/goodsdetail/GoodsDetail'
import GoodOrder from '@/goodorder/GoodOrder'

// 私有化组件
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/love" component={Love}></Route>
          <Route path='/foodMarket' component={FoodMarket}></Route>
          <Route path='/order' component={Order} />
          <Route path='/address' component={AddressList} />
          <Route path='/add' component={AddAddress} />
          <Route path='/shoppingCart' component={ShoppingCart} />
          <Route path='/petMarket' component={PetMarket} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/daily' component={Daily} />
          <Route path='/buy' component={BuyHome} />
          <Route path='/screen' component={ScreenAfter} />
          <Route path='/disease' component={KnowUi} />
          <Route path='/goodsdetail' component={GoodsDetail} />
          <Route path='/goodorder' component={GoodOrder} />
          <Redirect  from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    )
  }
}

