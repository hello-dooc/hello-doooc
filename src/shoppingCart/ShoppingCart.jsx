import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import CartH from './CartH';
import CartH from './CartH';
import CartN from './CartN';

import Footer from '@c/footer/Footer'
import Link from '@c/link/Link'
import Header from '@c/header/Header'

import {
    Container
} from './StyledCartH'

// import img1 from '../assets/images/shoppingCartH_02.png'
import img2 from '@a/images/ShoppingCart/dogHead_03.png'
import banner from '@a/images/banner_dog.png'

class ShoppingCart extends Component {
    state={
        isShow:true
    }

    render() {
        return (
            <Container>
                <Header ht="546px" bg={banner}></Header>

                <div className="con">
                    
                    <main>
                        <img src={img2} alt="" />
                        <p>我的购物车</p >
                        <div className="cart">
                            {
                                this.state.isShow?(<CartH></CartH>):(<CartN></CartN>)
                            }
                        </div>
                    </main>
                    <Link></Link>
                    <Footer></Footer>
                </div>
            </Container>
        );
    }
}

export default ShoppingCart;