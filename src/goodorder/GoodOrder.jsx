import React, { Component } from 'react';

import touxiang from '@a/images/goodsdetail/touxiang.jpg';
import Header from '@c/header/HeaderNoBg'
import Footer from '@c/footer/Footer.jsx'
import Link from '@c/link/Link.jsx'



import {
    Container
} from './styledgoodorder'

import OrderDetail from './OrderDetail'

class GoodOrder extends Component {
    render() {
        return (
            <Container>
                <header>
                    <Header></Header>
                </header>

                <div className="detail-con">
                    <div className="detail-wrap">
                        <div className="detail-left">
                            <img src={touxiang} alt="" />
                        </div>
                        <div className="detail-middle">
                            <span>订单详细</span>
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




                <footer>
                <Link></Link>
                <Footer></Footer>
                </footer>
            </Container>
        );
    }
}

export default GoodOrder;