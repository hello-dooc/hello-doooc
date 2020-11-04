import React, { Component } from 'react';
import {HeaderNoBgWrap} from './StyledHeader'
import logo from '@a/images/logo_03.png'
import profile from '@a/images/profile_03.png'
import {withRouter } from 'react-router-dom'

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
    handleGotoOthers(url){
        return ()=>{
            console.log(this.props);
            this.props.history.push(url)
        }
    }
    componentDidMount(){
        // console.log(this.props);
    }
    render() {
        return (
            <HeaderNoBgWrap id="header">
                <ul>
                    <li onClick={this.handleGotoOthers('/home')}>首页</li>
                    <li onClick={this.handleGotoOthers('/foodMarket')}>商城</li>
                    <li onClick={this.handleGotoOthers('/love')}>知宠</li>
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
                            <li onClick={this.handleGotoOthers('/self')}>我的信息</li>
                            <li onClick={this.handleGotoOthers('/order')}>订单中心</li>
                            <li onClick={this.handleGotoOthers('/shoppingCart')}>我的购物</li>
                            <li>我的晒宠</li>
                        </ul>
                    </div>
                </div>
            </HeaderNoBgWrap>
        );
    }
}

export default HeaderNoBg;