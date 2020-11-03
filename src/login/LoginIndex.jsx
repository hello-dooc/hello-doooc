import React, { Component } from 'react'
import {LoginWrap} from './StyledLogin'
import {Switch,Route,Redirect} from 'react-router-dom'
import MyNavLink from './MyNavLink'
import Email from './Email'
import Message from './Message'

 class LoginIndex extends Component {
  state = {
    tabIndex:0
  }
  render() {
    return (
      <LoginWrap>
        <div className="header">
          <div className="top">
            <ul>
              <li><MyNavLink activeClassName="selected" to="/login/email">邮箱登陆</MyNavLink></li>
              <li><MyNavLink activeClassName="selected" to="/login/message">短信登陆</MyNavLink></li>
            </ul>
          </div>
         <div className="content">
            <Switch>
              <Route path='/login/email' component={Email}></Route>
              <Route path='/login/message' component={Message}></Route>
              <Redirect from='/login' to='/login/email'></Redirect>
            </Switch>    
          </div>
         
        </div>
      </LoginWrap>
    )
  }
}


export default LoginIndex

