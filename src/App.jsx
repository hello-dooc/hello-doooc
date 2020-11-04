import React,{Component} from 'react'
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
          {/* <Route path="/home" component={LinkIndex}></Route> */}
          {/* <Route path="/login" component={Login}></Route> */}
          {/* <Route path ="/register" component={Register}></Route> */}
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

