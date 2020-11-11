import React, { Component } from 'react';
import {HeaderWrap} from './StyledHeader'
import logo from '@a/images/logo_03.png'
import profile from '@a/images/profile_03.png'
import {withRouter } from 'react-router-dom'

@withRouter
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNone:true
        }
    }
    
    handleClick=()=>{
        this.setState({
            isNone:!this.state.isNone
        })
    }
    handleMouseLeave=()=>{
        this.setState({
            isNone:true
        })
    }
    handleGotoOthers=(url)=>{
        return ()=>{
            this.props.history.push(url)
        }
    }
    
    render() {
        return (
            <HeaderWrap id="header" {...this.props}>
                <div>
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
                            <ul onMouseLeave ={this.handleMouseLeave} className={this.state.isNone?'dpNone':'dpBlock'}>
                                <li onClick={this.handleGotoOthers('/order')}>我的信息</li>
                                <li onClick={this.handleGotoOthers('/order')}>订单中心</li>
                                <li onClick={this.handleGotoOthers('/shoppingCart')}>我的购物</li>
                                <li>我的晒宠</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </HeaderWrap>
        );
    }
}

export default withRouter(Header);