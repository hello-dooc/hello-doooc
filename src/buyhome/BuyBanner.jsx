import React, { Component } from 'react'

import imgbanner from '@a/images/buyhome/scbanner.png'
/* import Header from '@c/header/Header.jsx' */
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
                <header>
                  {/*   <Header></Header> */}
                </header>
                <BuySearch></BuySearch>
            </BuyBannerWrap>

        )
    }
}