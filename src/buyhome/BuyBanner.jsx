import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'

import imgbanner from '@a/images/buyhome/scbanner.png'
// import Header from '@c/header/Header.jsx'
import BuySearch from "./BuySearch"
import Header from '@c/header/HeaderNoBg.jsx'

// import banner from '@a/images/banner_dog.png'

import {
    BuyBannerWrap
} from './StyledBuyHome'


@withRouter
class BuyBanner extends Component {
    handleGotoOthers=(url)=>{
        return ()=>{
            this.props.history.push(url)
        }
    }
    render() {
        return (
            <BuyBannerWrap>
                <div className="banner_box">
                    <img src={imgbanner} alt="" />
                </div>
                <header style={{position:'relative',zIndex:999}}>
                    <Header></Header>
                </header>
                <BuySearch></BuySearch>
            </BuyBannerWrap>

        )
    }
}

export default BuyBanner