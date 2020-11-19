import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Tabs } from 'antd';
import axios from 'axios';
import { get, del} from '@u/http'
import {getToken} from '@u/cookies'


import DetailInfo from './DetailInfo';
import {
    InfoForm
} from './StyledOrder'
const { TabPane } = Tabs;
@withRouter
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
        // axios.defaults.headers.common['token'] = 'token_123456'
        let token = getToken()
        console.log(token);
        axios.defaults.headers.common['token'] = token

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
        // axios.defaults.headers.common['token'] = 'token_123456'
        let token = getToken()
        console.log(token);
        axios.defaults.headers.common['token'] = token
        let result = await del({
            url: 'http://123.56.160.44:8080/order/delete',
            params: {
                orderId
            }
        });
        // console.log(result);
        this.getData()
    }


    async payCar() {
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
                        Tel:00000000000
                    </TabPane>
                </Tabs>
            </InfoForm>
        );
    }
}

export default OrderForm;