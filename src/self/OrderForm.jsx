import React, { Component } from 'react';
import { Tabs } from 'antd';
import {get} from '@u/http'
import Axios from 'axios';

import DetailInfo from '../components/DetailInfo';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class OrderForm extends Component {
    state={
        list:[],
        list2:[]
    }

    async getData(){
        Axios.defaults.headers.common['token'] = 'token_123456'
        let result = await get({
          url:'http://123.56.160.44:8080/order/list'
        })
        console.log(result);
            let filterlist = result.data.content.filter(function(item){
            return (item.orderStatus ===1)&&(item.payStatus ===1);
            })　　
            let filterlist2 = result.data.content.filter(function(item){
                return (item.orderStatus ===2)&&(item.payStatus ===3);
                })
        this.setState({
            list:filterlist, 
            list2:filterlist2
        })   
      }
    
      componentDidMount(){
        this.getData(); 
   }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback} tabPosition={'left'}>
                    <TabPane tab="Tab 1" key="1">
                        <DetailInfo
                        list = {this.state.list}
                        ></DetailInfo>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <DetailInfo
                        list = {this.state.list2}
                        ></DetailInfo>
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