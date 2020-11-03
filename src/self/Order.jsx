import React, { Component } from 'react';
import OrderForm from './OrderForm';



import {
    Container
} from './StyledOrder'
 
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
                        <OrderForm></OrderForm>
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