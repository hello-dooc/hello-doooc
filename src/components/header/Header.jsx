import React, { Component } from 'react';
import {HeaderWrap} from './StyledHeader'
import logo from '@a/images/logo_03.png'
import profile from '@a/images/profile_03.png'
import {withRouter } from 'react-router-dom'


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNone:true
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleMouseLeave=this.handleMouseLeave.bind(this)
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
    handleLogin=(props)=>{
        let history = this.props.history

        history.push('/login')
    }
    render() {
        return (
            <HeaderWrap>
                <div>
                    <ul>
                        <li>首页</li>
                        <li>商城</li>
                        <li>知宠</li>
                    </ul>
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <div>
                            <img src={profile} alt="" onClick={this.handleLogin}/>
                        </div>
                        <div>
                            <i className="iconfont icon-xiala" onClick={this.handleClick} ></i>
                            <ul onMouseLeave ={this.handleMouseLeave} className={this.state.isNone?'dpNone':'dpBlock'}>
                                <li>我的信息</li>
                                <li>订单中心</li>
                                <li>我的购物</li>
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