import React, { Component } from 'react';
import { Tabs } from 'antd';

import OrderForm from './OrderForm';
import SelfInfo from './SelfInfo';

import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'
import Header from '@c/header/Header'
import banner from '@a/images/banner_dog.png'
import {
    Container
} from './StyledOrder'

const { TabPane } = Tabs;

class Order extends Component {
    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <Container>
                <Header ht="546px" bg={banner} ></Header>
                <main>
                    <div className="category">
                        <Tabs defaultActiveKey="2" onChange={this.callback} tabPosition={'left'} >
                            <TabPane tab="基本信息" key="1">
                                <SelfInfo></SelfInfo>
                            </TabPane>
                            <TabPane tab="订单中心" key="2">
                                <OrderForm></OrderForm>
                            </TabPane>
                            <TabPane tab="我的晒宠" key="3">
                                111111111111
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="recommend">
                        <p>猜你喜欢</p>
                        <div className="shopLike">
                            <div>
                                <img src="" alt="" />
                                <h2>商品属性</h2>
                                <h3>价格</h3>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <h2>商品属性</h2>
                                <h3>价格</h3>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <h2>商品属性</h2>
                                <h3>价格</h3>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <h2>商品属性</h2>
                                <h3>价格</h3>
                            </div>
                        </div>
                    </div>
                </main>
                <Link></Link>
                <Footer></Footer>
            </Container>
        );
    }
}

export default Order;