import React, { Component } from 'react';
import { InputNumber , Select  } from 'antd';

import {
    Container
} from './StyledCartH'

// import img1 from '../assets/images/shoppingCartH_02.png'
import img2 from '../assets/images/dogHead_03.png'


class ShoppingCart extends Component {
    render() {
        const { Option } = Select;
        return (
            <Container>
                <div className="con">
                    <header>123</header>
                    <main>
                        <img src={img2} alt="" />
                        <p>我的购物车</p>
                        <div className="cart">
                            <div className="cartCon">
                                <div className="shopDetails">
                                    <img src="" alt="" />
                                    <span className="shopName">进口鳕鱼肉</span>
                                    <i>RMB &nbsp;500</i>
                                    <InputNumber min={1} max={10} defaultValue={1} style={{ width:50,height:30 }}/>
                                    <i>口味</i>
                                    <>
                                        <Select defaultValue="lucy" style={{ width: 80,height:30}}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="disabled">Disabled</Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </>
                                    <i>删除</i>
                                </div>
                                <div className="pay">
                                    <i>合计：  RMB &nbsp; 5000</i>
                                    <button>结 &nbsp;&nbsp;&nbsp;&nbsp; 算</button>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer>
                        {/* <img src={img1} alt=""/> */}
                    </footer>
                </div>
            </Container>
        );
    }
}

export default ShoppingCart;