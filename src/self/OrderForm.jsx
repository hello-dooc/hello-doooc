import React, { Component } from 'react';
import { Tabs } from 'antd';

import DetailInfo from '../components/Detail/DetailInfo';

const { TabPane } = Tabs;

class OrderForm extends Component {
    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback} tabPosition={'left'}>
                    <TabPane tab="待付款" key="1">
                        <DetailInfo></DetailInfo>
                    </TabPane>
                    <TabPane tab="待发货" key="2">
                        <DetailInfo></DetailInfo>
                    </TabPane>
                    <TabPane tab="联系售后" key="3">
                        00000000000 
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default OrderForm;