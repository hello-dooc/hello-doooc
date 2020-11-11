import React, { Component } from 'react';
import axios from 'axios'

/* import DetailInfo from '../components/Detail/DetailInfo'; */

import {
    HCart
} from './StyledCartH'

import { get } from '@u/http'

class CartH extends Component {
    state={
        list:[],
        length:0
    }

    async getData(){
        axios.defaults.headers.common['token'] = 'token_123456'
        let result = await get({
            url:'http://123.56.160.44:8080/cart/list'
        })
        console.log(result.data.data.length);
        let list = result.data.data
        this.setState({
            list,
            length:list.length
        })
        
    }
 
    componentDidMount(){
        this.getData()
       
       /*  this.props.handleSon(this.state.length) */
    }
    render() {
    console.log(this.state.length)
        return (
            <HCart>
               {/*  <DetailInfo></DetailInfo> */}
                <div className="pay">
                    <i>合计：  RMB &nbsp; 5000</i>
                    <button>结 &nbsp;&nbsp;&nbsp;&nbsp; 算</button>
                </div>
            </HCart>
        );
    }
}

export default CartH;