import React, { Component } from 'react';

import {
    YouLikeWrap
  } from './styledshowpets'

import img1 from '@a/images/showpets/img1.png'
import img2 from '@a/images/showpets/img2.png'
import img3 from '@a/images/showpets/img3.png'
import img4 from '@a/images/showpets/img4.png'

class YouLike extends Component {
    render() {
        return (
            <YouLikeWrap>
                <div className="like-title">猜你喜欢</div>
                <ul>
                    <li>
                        <div className="img-box">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="good-name">
                            猫抓板瓦楞纸猫沙发逗猫玩具
                        </div>
                        <div className="good-price">价格</div>
                    </li>
                    <li>
                        <div className="img-box">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="good-name">
                            猫抓板瓦楞纸猫沙发逗猫玩具
                        </div>
                        <div className="good-price">价格</div>
                    </li>
                    <li>
                        <div className="img-box">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="good-name">
                            猫抓板瓦楞纸猫沙发逗猫玩具
                        </div>
                        <div className="good-price">价格</div>
                    </li>
                    <li>
                        <div className="img-box">
                            <img src={img4} alt=""/>
                        </div>
                        <div className="good-name">
                            猫抓板瓦楞纸猫沙发逗猫玩具
                        </div>
                        <div className="good-price">价格</div>
                    </li>
                </ul>
            </YouLikeWrap>
        );
    }
}

export default YouLike;