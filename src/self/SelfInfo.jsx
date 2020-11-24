import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {get} from '@u/http'
import {getToken} from '@u/cookies'

import {SelfInfoWrap} from './StyledSelf'
import UserInfo from './UserInfo'


@withRouter
class SelfInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            addressList:[],
            loading: false,
            userInfo:[],
        }
    }
    async getUserInfo(){
        let token = getToken()
        console.log(token);
        // axios.defaults.headers.common["token"] = 'token_123456';
        if(token){
            axios.defaults.headers.common['token'] = token
            let result = await get({
                url:'http://10.9.12.250:8088/user/info/detail'
            })
            console.log(result);
            let info = result.data.data;
            let addr = info.addressInfo.province+info.addressInfo.city+info.addressInfo.country+info.addressInfo.addressDetail;
            this.setState({
                userInfo:{
                    ...info,
                    addr
                }
            })
        }
    }
    async componentDidMount(){
        this.getUserInfo()
    }
    render() {
        return (
            <SelfInfoWrap id="self">
                <div className="self-wrap"> 
                    <div className="self_info">
                        <UserInfo userInfo={this.state.userInfo} addressList={this.props.location.state?this.props.location.state.addrList:null}></UserInfo>
                    </div>
                </div>
            </SelfInfoWrap>
        );
    }
}

export default SelfInfo;