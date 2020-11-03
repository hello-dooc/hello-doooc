import React, { Component } from 'react';

import touxiang from '@a/images/goodsdetail/touxiang.jpg';



import {
    Container
} from './styledgoodorder'

import OrderDetail from './OrderDetail'

class GoodOrder extends Component {
    render() {
        return (
            <Container>
                <header></header>

                <div className="detail-con">
                    <div className="detail-wrap">
                        <div className="detail-left">
                            <img src={touxiang} alt="" />
                        </div>
                        <div className="detail-middle">
                            <span>商品详细</span>
                        </div>
                        <div className="detail-right">
                            <div className="left-box">
                                <span></span>
                            </div>
                            <div className="detail-box">
                                <OrderDetail></OrderDetail> 
                            </div>
                        </div>
                    </div>
                </div>




                <footer></footer>
            </Container>
        );
    }
}

export default GoodOrder;