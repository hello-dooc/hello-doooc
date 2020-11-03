import React, { Component } from 'react'
import {Container} from './StyledAnswer'

import Header from '../components/header/Header'
import Relevant from '../components/header/Relevant'
import Answer from './Answer'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'

export default class LinkIndex extends Component {
    render() {
        return (
            <Container>
                <Header></Header>
                <Relevant></Relevant>
                <Answer></Answer>
                <Link></Link>
                <Footer></Footer>
            </Container>
        )
    }
}
