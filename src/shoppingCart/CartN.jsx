import React, { Component } from 'react';
import {
    NCart
} from './StyledCartH'
import cart from '@a/images/ShoppingCart/cart_03.png'
class CartN extends Component {
    render() {
        return (
            <NCart>
                <img src={cart} alt=""/>
                <div>
                    <span>这里空空如也哦~消灭“0”购物，</span>
                    <span>赶紧去选购商品吧~</span>
                    <button>立即去选购</button>
                </div>
            </NCart>
        );
    }
}

export default CartN;