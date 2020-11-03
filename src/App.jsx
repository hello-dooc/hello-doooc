<<<<<<< HEAD
import {
  Switch,
  Route,
  BrowserRouter as Router ,
  Redirect
} from 'react-router-dom'
import Home from '../src/home/home/index'
import Food from '../src/home/food/index'
import Love from '../src/home/love/index'

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
          <Route path="/food" component={Food}></Route>
          <Route path="/love" component={Love}></Route>
          <Route path="/" component={Home}></Route>
          <Redirect from="/" to="/food"></Redirect>
        </Switch>
      </Router>
    )
  }
}
=======




/* export default class App extends Component {
  render() {
    return (
        <BuyHome></BuyHome>  
      <GoodsDetail></GoodsDetail> 
      <ShowPets></ShowPets> 
      <GoodOrder></GoodOrder> 
      <Daily></Daily> 
    )
  }
}  */

import React from 'react'
import { Route, Redirect,Switch } from 'react-router-dom'
import BuyHome from './buyhome/BuyHome.jsx'  
import GoodsDetail from './goodsdetail/GoodsDetail'
import ShowPets from './showpets/ShowPets' 
import GoodOrder from './goodorder/GoodOrder' 
/* import ListBox from './textlistbox/ListBox' 
import Daily from './market/Daily'  */


const App = (props) => {
  return (
    <>
    <Switch>
      <Route path="/buyhome" component={BuyHome}></Route>
      <Route path="/goodsdetail" component={GoodsDetail}></Route>
      <Route path="/showpets" component={ShowPets}></Route>
      <Route path="/goodorder" component={GoodOrder}></Route>
      
      <Redirect from="/" to="/buyhome"></Redirect> 
    </Switch>
    </>
  )
}

export default App  
>>>>>>> origin/lrl
