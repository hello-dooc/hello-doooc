import React, { Component } from 'react'

import imgbanner from '@a/images/buyhome/scbanner.png'
import Header from '@c/header/HeaderNoBg'
import BuySearch from "./BuySearch"


import {
    BuyBannerWrap
} from './StyledBuyHome'



export default class BuyBanner extends Component {

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