import React, { Component } from 'react';
// import CartH from './CartH';
import CartN from './CartN';


import {
    Container
} from './StyledCartH'

// import img1 from '../assets/images/shoppingCartH_02.png'
import img2 from '@a/images/ShoppingCart/dogHead_03.png'


class ShoppingCart extends Component {
    render() {
        return (
            <Container>
                <div className="con">
                    <header>123</header>
                    <main>
                        <img src={img2} alt="" />
                        <p>我的购物车</p>
                        <div className="cart">
                            {/* <CartH></CartH> */}
                            <CartN></CartN>
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