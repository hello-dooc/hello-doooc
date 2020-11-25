import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'
import {post} from '@u/http'
import {getToken} from '@u/cookies'

import {DisplayWrap} from '../StyledPetMarket'
@withRouter
class Display extends Component {
    constructor(props){
        super(props)
        this.state={
            num: 0,
            pagenum:this.props.current
        }
    }
    setNext=()=>{
        if(this.state.pagenum < this.props.totalPage){
            this.setState({
                num:this.props.isChange?1:this.state.num + this.props.pageSize,
                pagenum:this.props.isChange?2:this.state.pagenum + 1
            },function () {
                console.log(this.state)
                this.props.setPage(this.state.num,this.state.pagenum)
                this.props.changeStatus()
            })
        }
    }
    setUp=()=>{
        if(this.state.pagenum > 2 && this.state.num>0){
            this.setState({
                num:this.props.isChange?1:this.state.num - this.props.pageSize,
                pagenum:this.props.isChange?2:this.state.pagenum - 1
            },function () {
                console.log(this.state)
                this.props.setPage(this.state.num,this.state.pagenum)
                this.props.changeStatus()
            })
        }
    }
    async addCart(params){
        let token = getToken()
        console.log(token);
        if(token){
            axios.defaults.headers.common['token'] = token
            // axios.defaults.headers.common['token'] = 'token_123456'
            const result = await post('http://10.9.12.250:8088/cart/add',qs.stringify(params))
            console.log(result);
            if(result.data.code===200){
                window.alert('加入购物车成功！')
            }else if(result.data.code===-1){
                this.props.history.push('/login')
                // window.alert('加入购物车失败，请稍后重试！')
            }
        }else{
            window.alert('请登录后操作！')
            this.props.history.push('/login')
        }
    }
    handleAddCart=(pt,id)=>{
        return ()=>{
            let type=2
            if(pt==='Cat') type=2
            else type=3
            this.addCart({
                goodsTypeId:type,
                goodsId:id
            })
        }
    }
    
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <DisplayWrap>
                <div className="display-wrap">
                    <div className="display_img">
                        <h2>宠物展示</h2>
                        <div className="pet_display">
                            <div className="pet_box clear_fix">
                                {
                                    this.props.petShow && this.props.petShow.map(value=>{
                                        return (
                                            <div key={value['pet'+value.pn+'TableId']+value.n} className="pet">
                                                <img src={value['pet'+value.pn+'TableImage']} alt=""/>
                                                <div className="pet_detail clear_fix">
                                                    <div className="pet_price float_left">
                                                        ￥<span>{value['pet'+value.pn+'TablePrice']}</span>
                                                    </div>
                                                    <div className="pet_type float_left">
                                                        <div>{value['pet'+value.pn+'TableName']}</div>
                                                        <div>
                                                            <span>品种:</span>
                                                            <span>{value['pet'+value.pn+'TableCategory']}</span>
                                                        </div>
                                                    </div>
                                                    <span onClick={this.handleAddCart(value.pn,value['pet'+value.pn+'TableId'])}></span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="page clear_fix">
                            <span onClick={this.setUp}>上一页</span>
                            <span onClick={this.setNext}>下一页</span>
                        </div>
                    </div>
                </div>
            </DisplayWrap>
        );
    }
}

export default Display;