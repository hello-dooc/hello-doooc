import React, { Component } from 'react';
import { Tabs } from 'antd';
import { get } from '@u/http'
import axios from 'axios'

import DetailInfo from './DetailInfo';
import {
    InfoForm
} from './StyledOrder'
const { TabPane } = Tabs;

class OrderForm extends Component {
    state = {
        list1:[],
        list2:[]
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
            return (item.orderStatus === 2) && (item.payStatus === 3);
        })
        this.setState({
            list1: filterlist,
            list2: filterlist2
        })
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
                        <DetailInfo list={this.state.list1}></DetailInfo>
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