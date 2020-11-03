import React, { Component } from 'react';
// import CartH from './CartH';
import CartN from './CartN';

import Footer from '@c/footer/Footer'
import Link from '@c/link/Link'
import Header from '@c/header/Header'

import {
    Container
} from './StyledCartH'

// import img1 from '../assets/images/shoppingCartH_02.png'
import img2 from '@a/images/ShoppingCart/dogHead_03.png'


class ShoppingCart extends Component {
    render() {
        return (
            <Container>
                <Header></Header>

                <div className="con">
                    
                    <main>
                        <img src={img2} alt="" />
                        <p>我的购物车</p>
                        <div className="cart">
                            {/* <CartH></CartH> */}
                            <CartN></CartN>
                        </div>
                    </main>
                    <Link></Link>
                    <Footer></Footer>
                </div>
            </Container>
        );
    }
}

export default ShoppingCart;