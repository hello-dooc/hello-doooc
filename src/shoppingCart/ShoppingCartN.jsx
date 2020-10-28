import React, { Component } from 'react';

import {
    Container
  } from './StyledCartN'

// import img1 from '../assets/images/shoppingCartH_02.png'
import img2 from '../assets/images/dogHead_03.png'
import cart from '../assets/images/cart_03.png'


class ShoppingCart extends Component {
    render() {
        return (
            <Container>
                <div className="con">
                    <header>123</header>
                    <main>
                        <img src={img2} alt=""/>
                        <p>我的购物车</p>
                        <div className="cart">
                            <div className="cartCon">
                                <img src={cart} alt=""/>
                                <div>
                                    <span>这里空空如也哦~消灭“0”购物，</span>
                                    <span>赶紧去选购商品吧~</span>
                                    <button>立即去选购</button>
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