import React, { Component } from 'react'

import imgbanner from '@a/images/buyhome/scbanner.png'


import {
    BuyBannerWrap
} from './StyledBuyHome'

import img1 from '@a/images/buyhome/petscan.png'
import img2 from '@a/images/buyhome/petseat.png'
import img3 from '@a/images/buyhome/petsmac.png'


export default class BuyBanner extends Component {

    render() {
        return (
            <BuyBannerWrap>
                <div className="banner_box">
                    <img src={imgbanner} alt="" />
                </div>
                <header></header>
                <div className="nav_box">
                    <div className="search_box">
                        <div className="search">
                            <span>搜索商品</span>
                            <p><svg t="1603089251391" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3729" width="200" height="200"><path d="M950.162286 732.891429l204.544 148.955428a36.571429 36.571429 0 0 1 8.118857 51.017143l-17.554286 24.283429a36.571429 36.571429 0 0 1-51.2 8.118857l-199.899428-145.590857A489.691429 489.691429 0 0 1 512 1002.605714C241.042286 1002.605714 21.394286 782.957714 21.394286 512 21.394286 241.042286 241.042286 21.394286 512 21.394286 782.957714 21.394286 1002.605714 241.042286 1002.605714 512c0 79.469714-18.907429 154.514286-52.443428 220.891429zM512 899.108571c213.796571 0 387.108571-173.348571 387.108571-387.108571 0-213.796571-173.348571-387.108571-387.108571-387.108571C298.203429 124.891429 124.891429 298.24 124.891429 512c0 213.796571 173.348571 387.108571 387.108571 387.108571z" p-id="3730"></path></svg></p>
                        </div>
                        <div className="car">
                            <p><svg t="1603089251391" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3729" width="200" height="200"><path d="M950.162286 732.891429l204.544 148.955428a36.571429 36.571429 0 0 1 8.118857 51.017143l-17.554286 24.283429a36.571429 36.571429 0 0 1-51.2 8.118857l-199.899428-145.590857A489.691429 489.691429 0 0 1 512 1002.605714C241.042286 1002.605714 21.394286 782.957714 21.394286 512 21.394286 241.042286 241.042286 21.394286 512 21.394286 782.957714 21.394286 1002.605714 241.042286 1002.605714 512c0 79.469714-18.907429 154.514286-52.443428 220.891429zM512 899.108571c213.796571 0 387.108571-173.348571 387.108571-387.108571 0-213.796571-173.348571-387.108571-387.108571-387.108571C298.203429 124.891429 124.891429 298.24 124.891429 512c0 213.796571 173.348571 387.108571 387.108571 387.108571z" p-id="3730"></path></svg></p>
                            <span>购物车(0)</span>
                        </div>
                    </div>
                    <div className="menu_box">
                        <ul className="menu">
                            <li className="has-submenu"><p>宠物食品</p>
                                <ul>
                                    <li><img src={img1} alt=""/><p>宠物主粮</p></li>
                                    <li><img src={img2} alt=""/><p>宠物零食</p></li>
                                    <li><img src={img3} alt=""/><p>宠物保健</p></li>
                                </ul>
                                <span></span>
                                <em></em>
                            </li>
                            <li><p>宠物日用</p></li>
                            <li><p>宠物市场</p></li>
                        </ul>
                    </div>
                </div>
            </BuyBannerWrap>


        )
    }
}