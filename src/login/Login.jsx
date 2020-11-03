import React, { Component } from 'react'
import {Container} from './StyledLogin'
import LoginIndex from './LoginIndex'

export default class Login extends Component {
  render() {
    return (
      <Container>
        <LoginIndex></LoginIndex>
      </Container>
    )
  }
}
