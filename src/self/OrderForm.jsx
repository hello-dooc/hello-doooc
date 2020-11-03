import React, { Component } from 'react';
import { Tabs } from 'antd';

import DetailInfo from '../components/DetailInfo';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class OrderForm extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback} tabPosition={'left'}>
                    <TabPane tab="Tab 1" key="1">
                        <DetailInfo></DetailInfo>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <DetailInfo></DetailInfo>
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        00000000000 
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default OrderForm;