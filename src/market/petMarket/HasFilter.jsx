import React, { Component } from 'react'

// import {get} from '@u/http.js'

import { HasFilterWrap }from './StyledPetMarket'
import HeaderNoBg from '@c/header/HeaderNoBg'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'
import Display from './Display'
import Filter from './Filter'

import Search from './Search'

export default class HasFilter extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <HasFilterWrap>
                <HeaderNoBg></HeaderNoBg>
                <div className="variety-wrap">
                    <Search></Search>
                    <Filter callback={this.props.callback} isVariety={this.props.isVariety}></Filter>
                </div>
                <Display></Display>
                <Link></Link>
                <Footer></Footer>
            </HasFilterWrap>
        )
    }
}
