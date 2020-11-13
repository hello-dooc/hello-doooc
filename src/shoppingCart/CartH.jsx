import React, { Component } from 'react';
// import DetailInfo from '../components/Detail/DetailInfo';
import { InputNumber, Select } from 'antd';

import { get, put } from '@u/http'
import axios from 'axios';
import qs from 'qs'

import {
    HCart
} from './StyledCartH'

class CartH extends Component {

    state = {
        totalPrice: 0,
        datalist: []
    };

    onNumberChange = (value) => {
        return (num) => {
            // console.log(id);
            // console.log(value);
            this.updateCar(value, num)
            // this.updateCar(value.cartId,value.goodsNum,num)
        }
    };

    onOptionChange = (value) => {
        return (tasteName) => {
            console.log(tasteName);
            console.log(value);
            // this.updateCar(value.cartId,value.goodsNum,tasteName)
        }
    }

    onDelete = (item) => {
        console.log(item);
    }
    handleChange = (item) => {
        return (e) => {
            console.log(item);
            
        }
    }

    async updateCar(cartId, goodsNum,goodsTaste) {
        axios.defaults.headers.common['token'] = 'token_123456'
        let params = {
            cartId,
            goodsNum,
            goodsTaste,
            cartStatus: 1
        }
        console.log(params);
        let result = await put({ url: 'http://123.56.160.44:8080/cart/update', params })
        // console.log(result);
        this.getData()
    }

    async updateCar(cartId, goodsNum,goodsTaste) {
        axios.defaults.headers.common['token'] = 'token_123456'
        let params = {
            cartId,
            goodsNum,
            goodsTaste,
            cartStatus: 1
        }
        console.log(params);
        let result = await put({ url: 'http://123.56.160.44:8080/cart/update', params })
        // console.log(result);
        this.getData()
    }
    
    async getData() {
        axios.defaults.headers.common['token'] = 'token_123456'
        let result = await get({
            url: 'http://123.56.160.44:8080/cart/list'
        })
        console.log(result);
        this.setState({
            datalist: result.data.data,
        })
    }

    componentDidMount() {
        this.getData()
        console.log(111);
    }

    render() {
        console.log(this.state.datalist);
        // this.state.totalPrice=0;
        // console.log(this.state.totalPrice);
        const { Option } = Select;
        return (
            <HCart>
                <div className="goods">
                    {
                        this.state.totalPrice = 0,
                        this.state.datalist && this.state.datalist.map(value => {
                            // console.log(this.state.totalPrice);
                            this.state.totalPrice += value.goodsPrice;
                            return (
                                <div key={value.cartId} className="shopDetails" >
                                    <img src={value.goodsDTO.goodsImage} alt="" />
                                    <span className="shopName">{value.goodsDTO.goodsName}</span>
                                    <i>RMB &nbsp;{value.goodsDTO.goodsPrice}</i>
                                    <InputNumber min={1} defaultValue={value.goodsNum} style={{ width: 50, height: 30 }} onChange={this.onNumberChange(value)} />
                                    <i style={{ visibility: value.selectGoodsTaste ? "" : "hidden" }}>口味</i>

                                    <>
                                        <Select defaultValue={value.selectGoodsTaste ? value.selectGoodsTaste[0].tasteName : ""} style={{ width: 80, height: 30, visibility: value.selectGoodsTaste ? "" : "hidden" }} onChange={this.onOptionChange(value)}>
                                            {
                                                value.selectGoodsTaste && value.selectGoodsTaste.map(value1 => {
                                                    return (
                                                        <Option value={value1.tasteName} key={value1.tasteId}>{value1.tasteName}</Option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </>

                                    {/* <i onClick={(e)=>this.onDelete(value)}>删除</i> */}
                                    <i onClick={this.handleChange(value)}>删除</i>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="pay">
                    <i>合计：  RMB &nbsp; {this.state.totalPrice}</i>
                    <button>提&nbsp; 交&nbsp; 订&nbsp; 单</button>
                </div>
            </HCart>
        );
    }
}

export default CartH;