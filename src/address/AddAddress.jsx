import React, { Component } from 'react'

import {get} from '@u/http.js'

import { Cascader } from 'antd';

import Header from '@c/header/Header'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'

import { AddAddWrap } from './StyledAddressList'
import addLogo from '@a/images/add_logo_03.png'

export default class AddAddress extends Component {
    constructor(props){
        super(props)
        this.state={
            provinceList:[],
            cityList:[],
            countyList:[],
            changeId:1
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(parentList,curList){
        return(e)=>{
            let aid=parentList.reduce((id,value)=>{
                if(value.value===e[0]){
                    id=value.addressId;
                }  
                return id;
              },0)
              this.getList(aid,curList)
        }
    }
    async getList(addressId,list){
        let result = await get({
            url:'http://123.56.160.44:8080/user/address/area',
            params:{
                parentId:addressId
            }
        });
        let province=result.data.data;
        let arr=province.reduce((arr,val)=>{
            let obj={}
            obj.addressId=val.addressId
            obj.value=val.addressName;
            obj.label=val.addressName;
            arr.push(obj)
            return arr;
        },[])
        if(list===this.state.cityList){
            this.setState({
                cityList:arr
            })
        }else if(list===this.state.countyList){
            this.setState({
                countyList:arr
            })
        }else{
            this.setState({
                provinceList:arr
            })
        }
    }

    componentDidMount(){
        this.getList(this.state.changeId,this.state.provinceList);
    }
    render() {
        return (
            <AddAddWrap>
                <div className="add">
                    <Header></Header>
                    <div className="add-wrap clear_fix">
                        <div className="add_logo float_left">
                            <img src={addLogo} alt=""/>
                        </div>
                        <span className="float_left">添加地址</span>
                        <div className="add_address float_left">
                            <span className="float_left"></span>
                            <div className="add_detail float_right">
                                <p>收货地址<br/>ADDRESS</p>
                                <div className="area">
                                    <span>所在地区</span>
                                    <Cascader bordered={false} options={this.state.provinceList} onChange={this.handleChange(this.state.provinceList,this.state.cityList)} placeholder="请选择" style={{width:"90px",background:"#f5a64a",padding:"none"}} />
                                    <Cascader bordered={false} options={this.state.cityList} onChange={this.handleChange(this.state.cityList,this.state.countyList)} placeholder="请选择" style={{width:"90px",background:"#f5a64a",padding:"none"}} />
                                    <Cascader bordered={false} options={this.state.countyList} placeholder="请选择" style={{width:"90px",background:"#f5a64a",padding:"none"}} />
                                </div>
                                <label htmlFor="">
                                    详细地址
                                    <input type="text"/>
                                </label>
                                <label htmlFor="">
                                    收货姓名
                                    <input type="text"/>
                                </label>
                                <label htmlFor="">
                                    联系电话
                                    <input type="text"/>
                                </label>
                                <div className="choice clear_fix">
                                    <span>返回</span>
                                    <span>确定</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link></Link>
                <Footer></Footer>
            </AddAddWrap>
        )
    }
}
