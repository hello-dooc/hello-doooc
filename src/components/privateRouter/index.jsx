import React, { Component } from 'react'
import {Redirect, Route} from 'react-router-dom'
import {getToken} from '../../utils/cookies'


const PrivateRouter = ({ component: Component, ...rest }) => {
  return(
    <Route {...rest} render={props => (
       getToken() ? <Component {...props}/> : <Redirect to="/login"></Redirect>
       )}/>
  );
}

export default PrivateRouter;