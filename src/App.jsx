



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
import ShoppingCart from './shoppingCart/ShoppingCart'

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
      <Route path="/shoppingcart" component={ShoppingCart}></Route>

      
      <Redirect from="/" to="/buyhome"></Redirect> 
    </Switch>
    </>
  )
}

export default App  