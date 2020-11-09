import React, { Component } from 'react';

import {
    OrderDetailWrap
} from './styledgoodorder'
import { InputNumber } from 'antd';

import gouliang from '@a/images/goodsdetail/timg3N38CJXS.jpg';

import { Select } from 'antd';
const { Option } = Select;

class OrderDetail extends Component {
    state = {
        totalNum:1,
        totalPrice:0
      }


     onChange=(value)=>{
        console.log('changed', value);
        // this.state.totalNum=value;
        /* console.log(this.state.totalNum) */
        this.setState({
            totalNum:value,
            totalPrice:184*value
        } 
          )      
      }
      handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <OrderDetailWrap>
                <div className="select-lo">
                    <p>
                        <span>用户名</span>
                        <span>13875412549</span>
                    </p>
                </div>
                <div className="select-ad">
                    选择地址:
                </div>
                <div className="search-item">
                    <Select defaultValue="lucy" style={{ width: 223 }} onChange={this.handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">那你那你那</Option>
                        <Option value="disabled" >
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>

                <div className="good-detail">
                    <div className="img-box">
                        <img src={gouliang} alt="" />
                    </div>
                </div>

                <div className="right-box">
                    <h1>麦富迪 双拼标准颗粒成犬粮10KG4:1牛肉粒配比，适口性更好！营养更丰富，全犬种成犬可用</h1>
                    <div className="prinum">
                        <h2>￥183.00</h2>
                        <h3>X {this.state.totalNum}</h3>
                    </div>
                    <div className="select-num">
                        <p>购买数量</p>
                        <div className="button-num">
                            <InputNumber min={1} max={10} defaultValue={1} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="count-box">
                        <p>共{this.state.totalNum}件</p>
                        <p>合计￥{this.state.totalPrice}</p>
                        <p>提交订单</p>
                    </div>
                </div>
            </OrderDetailWrap>
        );
    }
}

export default OrderDetail;