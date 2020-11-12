import React, { Component } from 'react';
import { InputNumber, Select } from 'antd';

import {
    Info
} from './StyledInfo'

class DetailInfo extends Component {
    onDelete=()=>{
        console.log(111);
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
                                    <i>付款</i>
                                    <i onClick={this.onDelete}>删除</i>
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