import React, { Component } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import { get, del } from '@u/http'

import DetailInfo from './DetailInfo';
import {
    InfoForm
} from './StyledOrder'
const { TabPane } = Tabs;

class OrderForm extends Component {
    state = {
        list1: [],
        list2: [],
        // childrenMsg: []
    }

    getChildrenMsg = (result, msg, sign) => {
        console.log(msg, sign)
        this.setState(
            // { childrenMsg: msg },
            () => {
                if (sign === 1) {
                    console.log(msg.orderID);
                    this.deleteCar(msg.orderID)
                };
                if (sign === 2) {
                    console.log(msg.orderID);
                    this.payCar(msg.orderID)
                }
            }
        )
    }

    async getData() {
        axios.defaults.headers.common['token'] = 'token_123456'
        let result = await get({
            url: 'http://123.56.160.44:8080/order/list'
        })
        console.log(result.data.content);
        let filterlist = result.data.content.filter(function (item) {
            return (item.orderStatus === 1) && (item.payStatus === 1);
        })
        let filterlist2 = result.data.content.filter(function (item) {
            return (item.orderStatus === 3) && (item.payStatus === 2);
        })
        this.setState({
            list1: filterlist,
            list2: filterlist2
        })
    }

    async deleteCar(orderId) {
        axios.defaults.headers.common['token'] = 'token_123456'
        let result = await del({
            url: 'http://123.56.160.44:8080/order/delete',
            params: {
                orderId
            }
        });
        // console.log(result);
        this.getData()
    }


    async payCar(orderId) {
        axios.defaults.headers.common['token'] = 'token_123456'
        let result = await get({
            url: 'http://123.56.160.44:8080/pay/alipay',
            params: {
                orderId,
                money: 0.01
            }
        });
        console.log(result);
        this.getData()
    }
    componentDidMount() {
        this.getData()
    }
    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <InfoForm>
                <Tabs defaultActiveKey="1" onChange={this.callback} tabPosition={'left'} >
                    <TabPane tab="待付款" key="1">
                        <DetailInfo list={this.state.list1} parent={this}></DetailInfo>
                    </TabPane>
                    <TabPane tab="待收货" key="2">
                        <DetailInfo list={this.state.list2}></DetailInfo>
                    </TabPane>
                    <TabPane tab="联系售后" key="3">
                        00000000000
                    </TabPane>
                </Tabs>
            </InfoForm>
        );
    }
}

export default OrderForm;