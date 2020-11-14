import React, { Component } from 'react';
import { InputNumber, Select } from 'antd';

import {
    Info
} from './StyledInfo'

class DetailInfo extends Component {
    state = {
        msg: [],
        sign: 0
    }

    handleDelete = (value) => {
        return (e) => {
            console.log(value);
            console.log(value.orderID);
            this.setState(
                { msg: value, sign: 1 },
                () => {
                    this.toParent()
                }
            )
        }
    }


    handlePay = (value) => {
        return (e) => {
            // console.log(value);
            // console.log(value.orderID); 
            this.setState(
                { msg: value, sign: 2 },
                () => {
                    this.toParent()
                }
            )
        }
    }


    toParent = () => {
        // console.log(this.props.parent.getChildrenMsg.bind(this, this.state.msg))
        this.props.parent.getChildrenMsg(this, this.state.msg, this.state.sign)
    }
    render() {
        // console.log(this.props.list);
        const { Option } = Select;
        return (
            <Info>
                {
                    this.props.list && this.props.list.map(value => {
                        return (
                            <div key={value.orderID}>
                                <p>订单编号：{value.orderID} </p>
                                <div className="shopDetail">
                                    <img src={value.orderDetailDTO.goodsDTO.goodsImage} alt="" />
                                    <span className="shopName">{value.orderDetailDTO.goodsDTO.goodsName}</span>
                                    <i>RMB &nbsp;{value.orderDetailDTO.goodsDTO.goodsPrice}</i>
                                    <InputNumber min={1} max={10} defaultValue={value.orderDetailDTO.goodsNum} style={{ width: 50, height: 30 }} disabled />
                                    <i style={{ visibility: value.orderDetailDTO.tastes ? "" : "hidden" }}>口味</i>
                                    <>
                                        <Select defaultValue={value.orderDetailDTO.tastes ? value.orderDetailDTO.tastes[0].tasteName : ""} style={{ width: 80, height: 30, visibility: value.orderDetailDTO.tastes ? "" : "hidden" }} disabled>
                                            {
                                                value.orderDetailDTO.tastes && value.orderDetailDTO.tastes.map(value1 => {
                                                    return (
                                                        <Option value={value1.tasteName} key={value1.tasteId} >{value1.tasteName}</Option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </>
                                    <i>总价：￥{value.orderPrice} </i>
                                    <div style={{ visibility: (value.orderStatus === 1 && value.payStatus === 1) ? "" : "hidden" }}>
                                        <button>
                                            <a href={'http://123.56.160.44:8080/pay/alipay?orderId='+value.orderID+'&money=0.01'} onClick={this.handlePay(value)} style={{color:"black"}}>付款</a>
                                        </button>
                                        <i>   </i>
                                        <button onClick={this.handleDelete(value)}>删除</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Info>
        );
    }
}

export default DetailInfo;