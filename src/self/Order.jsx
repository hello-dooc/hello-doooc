import React, { Component } from 'react';
import { Tabs } from 'antd';
import DetaiInfo from './DetaiInfo';


import {
    Container
} from './StyledOrder'
 
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}
class Order extends Component {

    render() {
        return (
            <Container>
                <header>123</header>
                <main>
                    <div className="category">
                        <ul>
                            <li>基本信息</li>
                            <li>订单中心</li>
                            <li>我的晒宠</li>
                        </ul>
                        <Tabs defaultActiveKey="1" onChange={callback} tabPosition={'left'}>
                            <TabPane tab="Tab 1" key="1">
                                <DetaiInfo></DetaiInfo>
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                <DetaiInfo></DetaiInfo>
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                00000000000 
                            </TabPane>
                            {/* <TabPane tab="Tab 4" key="4">
                                Content of Tab Pane 4
                            </TabPane> */}
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
                <footer></footer>
            </Container>
        );
    }
}

export default Order;