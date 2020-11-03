import React, { Component } from 'react'
import {Container} from './StyledRegister'
import RegisterContent from './RegisterContent'

export default class Register extends Component {
  render() {
    return (
      <Container>
        <RegisterContent></RegisterContent>
      </Container>
    )
  }
}
