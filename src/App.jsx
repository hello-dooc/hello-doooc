



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
 /* import ListBox from './textlistbox/ListBox'  */
import Daily from './daily/Daily'  
import ShoppingCart from './shoppingCart/ShoppingCart'
import Order from './self/Order'
import Training from './zhichong/Training'
import ColdKnow from './zhichong/ColdKnow'

const App = (props) => {
  return (
    <>
    <Switch>
      <Route path="/buyhome" component={BuyHome}></Route>
      <Route path="/goodsdetail/:type" component={GoodsDetail}></Route>
      {/* <Route path="/goodsdetail/DetailMiddle" component={GoodsDetail}></Route> */}
      <Route path="/goodsdetail" component={GoodsDetail}></Route>
      <Route path="/showpets" component={ShowPets}></Route>
      {/* <Route path="/goodorder/:type" component={GoodOrder}></Route> */}
      <Route path="/goodorder" component={GoodOrder}></Route>
      <Route path="/daily" component={Daily}></Route>
      <Route path="/shoppingcart" component={ShoppingCart}></Route>
      <Route path="/order" component={Order}></Route>
      <Route path="/training" component={Training}></Route>
      <Route path="/coldknow" component={ColdKnow}></Route>

      
      <Redirect from="/" to="/buyhome"></Redirect> 
    </Switch>
    </>
  )
}

export default App  