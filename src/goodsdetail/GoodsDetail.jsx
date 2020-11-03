import React, { Component } from 'react';

import touxiang from '@a/images/goodsdetail/touxiang.jpg';
import gouliang from '@a/images/goodsdetail/timg3N38CJXS.jpg';

import {
    Container
  } from './styledgoodsdetail'


class GoodsDetail extends Component {
    render() {
        return (
            <Container>
                <header></header>

                <div className="detail-con">
                    <div className="detail-wrap">
                        <div className="detail-left">
                            <img src={touxiang} alt=""/>
                        </div>
                        <div className="detail-middle">
                            <span>宠物详情</span>
                        </div>
                        <div className="detail-right">
                            <div className="detail-box">
                                <div className="left-box">
                                    <span></span>
                                </div>
                                <div className="middle-box">
                                    <img src={gouliang} alt=""/>
                                </div>
                                <div className="right-box">
                                    <h1>商品详细</h1>
                                    <h2>麦富迪 双拼标准颗粒成犬粮10KG</h2>
                                    <h3>4:1牛肉粒配比，适口性更好！营养更丰富，全犬种成犬可用</h3>
                                    <ul>
                                        <li>
                                            <span>试用阶段</span>
                                            <span>幼犬</span>
                                        </li>
                                        <li>
                                            <span>口味</span>
                                            <span>幼犬配方</span>
                                        </li>
                                        <li>
                                            <span>生产地址</span>
                                            <span>中国</span>
                                        </li>
                                        <li>
                                            <span>重量</span>
                                            <span>2000g</span>
                                        </li>
                                        <li>
                                            <span>保质期</span>
                                            <span>18个月</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <footer></footer>
            </Container>
        );
    }
}

export default GoodsDetail;