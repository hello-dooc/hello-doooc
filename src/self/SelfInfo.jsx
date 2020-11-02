import React, { Component } from 'react';
import { Descriptions } from 'antd';
import {withRouter} from 'react-router-dom'
import {get} from '@u/http'

import SelfInfoWrap from './StyledSelf'

import profile from '@a/images/timg.jpeg'

@withRouter
class SelfInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            addressList:[]
        }
        this.handleGotoAddress=this.handleGotoAddress.bind(this)
    }
    async getAddressList(){
        let result = await get({
            url:'http://123.56.160.44:8080/user/address/list',
        })
        let aList=result.data.data;
        let arr=aList.reduce((arr,value)=>{
            let addr = value.province+value.city+value.country+value.addressDetail;
            let obj={};
            obj.addr=addr;
            obj.userName=value.userName;
            obj.userTelephone=value.userTelephone
            obj.addrId=value.userAddressId;
            arr.push(obj);
            return arr;
        },[])
        this.setState({
            addressList:arr
        })
    }
    handleGotoAddress(list){
        return ()=>{
            this.props.history.push('/address',{list})
        }
    }
    componentDidMount(){
        this.getAddressList()
    }
    render() {
        return (
            <SelfInfoWrap id="self">
                <div className="self-wrap"> 
                    <Descriptions bordered>
                        <Descriptions.Item span={3}>
                            <img src={profile} alt=""/>
                        </Descriptions.Item>
                        <Descriptions.Item label="用户名" span={3}></Descriptions.Item>
                        <Descriptions.Item label="手机号" span={3}></Descriptions.Item>
                        <Descriptions.Item label="性别" span={3}></Descriptions.Item>
                        <Descriptions.Item label="邮箱" span={3}></Descriptions.Item>
                        <Descriptions.Item label="QQ" span={3}></Descriptions.Item>
                        <Descriptions.Item label="收货地址" span={3}>
                            <span>北京市昌平区沙河镇沙阳路18号北京科技职业技术学院</span>
                            <button onClick={this.handleGotoAddress(this.state.addressList)}>选择默认地址</button>
                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </SelfInfoWrap>
        );
    }
}

export default SelfInfo;