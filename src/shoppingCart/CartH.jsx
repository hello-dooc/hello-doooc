import React, { Component } from 'react';

import DetailInfo from '../components/Detail/DetailInfo';

import {
    HCart
} from './StyledCartH'

class CartH extends Component {
    render() {
        return (
            <HCart>
                <DetailInfo></DetailInfo>
                <div className="pay">
                    <i>合计：  RMB &nbsp; 5000</i>
                    <button>结 &nbsp;&nbsp;&nbsp;&nbsp; 算</button>
                </div>
            </HCart>
        );
    }
}

export default CartH;