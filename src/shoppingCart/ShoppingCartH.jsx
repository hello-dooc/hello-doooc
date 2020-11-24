import React, { Component } from 'react';
import { get } from '@u/http'
import {getToken} from '@u/cookies'
import axios from 'axios'

// import {withRouter} from 'react-router-dom'
// import CartH from './CartH';
import CartH from './CartH';
import CartN from './CartN';

import Footer from '@c/footer/Footer'
import Link from '@c/link/Link'
import Header from '@c/header/Header'

import {
    Container
} from './StyledCartH'

// import img1 from '../assets/images/shoppingCartH_02.png'
import img2 from '@a/images/ShoppingCart/dogHead_03.png'
import banner from '@a/images/banner_dog.png'

class ShoppingCart extends Component {
    // constructor(props){
    //     super(props)
    //     this.getData()
    // }
    state = {
        length: 0,
        isShow: true,
        totalPrice: 0,
        // goodsList:[]
    }

    async getData() {
        // axios.defaults.headers.common['token'] = 'token_123456'
        let token = getToken()
        console.log(token);
        axios.defaults.headers.common['token'] = token
        let result = await get({
            url: 'http://10.9.12.250:8088/cart/list'
        })
        console.log(result.data.data);
        this.setState({
            isShow: (result.data.data.length > 0) ? true : false,
            length: result.data.data.length,
            totalPrice: 0,
            // goodsList:result.data.data
        })
    }

    componentDidMount() {
        this.getData()
    }
    render() {
        // console.log(this.result);
        console.log(this.state.totalPrice)
        // console.log(this.state.goodsList);
        return (
            <Container>
                <Header ht="546px" bg={banner}></Header>

                <div className="con">

                    <main>
                        <img src={img2} alt="" />
                        <p>我的购物车</p>
                        <div className="cart">
                            {
                                this.state.isShow ? (<CartH></CartH>) : (<CartN></CartN>)
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

export default ShoppingCart;