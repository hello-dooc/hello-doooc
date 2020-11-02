import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import SelfInfo from '@s/SelfInfo'
import AddressList from '@d/AddressList'
import AddAddress from '@d/AddAddress'
import PetMarket from '@m/petMarket/PetMarket'

export default class App extends Component {
  render() {
    return (
        <Switch>
          <Route path='/self' component={SelfInfo}></Route>
          <Route path='/address' component={AddressList}></Route>
          <Route path='/add' component={AddAddress}></Route>
          <Route path="/petMarket" component={PetMarket}></Route>
          <Redirect from='/' to='/self'></Redirect>
        </Switch>
    )
  }
}