import React, { Component } from 'react';
import {HeaderNoBgWrap} from './StyledHeader'
import logo from '@a/images/logo_03.png'
import profile from '@a/images/profile_03.png'
import {withRouter } from 'react-router-dom'
import {getToken} from '../../utils/cookies'
import cookies from 'react-cookies'

@withRouter
class HeaderNoBg extends Component {
    constructor(props){
        super(props);
        this.state={
            isNone:true
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleMouseLeave=this.handleMouseLeave.bind(this)
        this.handleGotoOthers=this.handleGotoOthers.bind(this)
    }
    
    handleClick(){
        this.setState({
            isNone:!this.state.isNone
        })
    }
    handleMouseLeave(){
        this.setState({
            isNone:true
        })
    }
    handleGotoOthers=(url,type)=>{
        return ()=>{
            this.props.history.push(url,{infoType:type})
        }
    }
    handleGotoLogin=(url)=>{
        return ()=>{
            getToken() ? alert('已登录') : this.props.history.push(url)
        }
    }
    handleLoginOut=()=>{
           window.location.reload(cookies.remove('adminToken',{path:'/'})) 
        // cookies.remove('adminToken')
    }
    render() {
        return (
            <HeaderNoBgWrap id="header">
                <ul>
                    <li onClick={this.handleGotoOthers('/home')}>首页</li>
                    <li onClick={this.handleGotoOthers('/buy')}>商城</li>
                    <li onClick={this.handleGotoOthers('/disease')}>知宠</li>
                </ul>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <div>
                        <img src={profile} alt="" onClick={this.handleGotoOthers('/login')}/>
                    </div>
                    <div>
                        <i className="iconfont icon-xiala" onClick={this.handleClick} ></i>
                        {
                            getToken() ? 
                            <ul onMouseLeave ={this.handleMouseLeave} className={this.state.isNone?'dpNone':'dpBlock'}>
                                <li onClick={this.handleGotoOthers('/order',1)}>我的信息</li>
                                <li onClick={this.handleGotoOthers('/order',2)}>订单中心</li>
                                <li onClick={this.handleGotoOthers('/shoppingCart')}>我的购物</li>
                                <li>我的晒宠</li>
                                <li onClick={this.handleLoginOut}>退出</li>
                            </ul>
                            :
                            <ul onMouseLeave ={this.handleMouseLeave} className={this.state.isNone?'dpNone':'dpBlock'}>
                                <li onClick={this.handleGotoOthers('/login')}>登录</li>
                            </ul>

                        }
                    </div>
                </div>
            </HeaderNoBgWrap>
        );
    }
}

export default HeaderNoBg;