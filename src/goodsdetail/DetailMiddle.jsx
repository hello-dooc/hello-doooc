import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'

import {
    DetailMiddleWrap
} from './styledgoodsdetail'

@withRouter
class DetailMiddle extends Component {
    handleClick = ()=>{
        this.props.history.goBack()
    }
    
    render() {
        const spdate = this.props.location.state.data;
        const sptype = this.props.location.pathname.substr(13)
        console.log(sptype) 

        return (
            < DetailMiddleWrap>
                <div className="detail-box">
                    <div className="left-box">
                     <span onClick={this.handleClick}></span> 
                       
                    </div>
                    <div className="middle-box">
                        <img src={spdate[sptype + 'Image']} alt="" /> 
                       
                    </div>
                    <div className="right-box">
                        <h1>商品详细</h1>
                        <h2>麦富迪 双拼标准颗粒成犬粮10KG</h2>
                        <h3>4:1牛肉粒配比，适口性更好！营养更丰富，全犬种成犬可用</h3>
                        <ul>
                            <li>
                                <span>试用阶段</span>
                                <span>幼犬</span>
                            </li>
                            <li>
                                <span>口味</span>
                                <span>幼犬配方</span>
                            </li>
                            <li>
                                <span>生产地址</span>
                                <span>中国</span>
                            </li>
                            <li>
                                <span>重量</span>
                                <span>2000g</span>
                            </li>
                            <li>
                                <span>保质期</span>
                                <span>18个月</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </ DetailMiddleWrap>
        );
    }
}

export default DetailMiddle;