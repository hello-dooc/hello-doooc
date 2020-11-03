import React, { Component } from 'react'
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
          <Route path="/food" component={Food}></Route>
          <Route path="/love" component={Love}></Route>
          <Route path="/" component={Home}></Route>
          <Redirect from="/" to="/food"></Redirect>
        </Switch>
      </Router>
    )
  }
}