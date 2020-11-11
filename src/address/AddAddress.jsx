import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import {get,post} from '@u/http.js'

import { Cascader } from 'antd';

import Header from '@c/header/HeaderNoBg'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'

import { AddAddWrap } from './StyledAddressList'
import addLogo from '@a/images/add_logo_03.png'
// import Axios from 'axios';
export default class AddAddress extends Component {
    constructor(props){
        super(props)
        this.state={
            provinceList:[],
            cityList:[],
            countyList:[],
            address:[],
            changeId:1,
            telValue:'',
            nameValue:'',
            addrValue:'',
            addrName:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(parentList,curList){
        return(e)=>{
            console.log(e);
            if(parentList && curList){
                let aid=parentList&&parentList.reduce((id,value)=>{
                    if(value.value===e[0]){
                        id=value.addressId;
                    }  
                    return id;
                  },0)
                  curList&&this.getList(aid,curList)
            }else{
                this.setState({
                    addrName:e[0]
                })
            }
              this.setState({
                  address:[
                      ...this.state.address,
                      ...e
                  ]
              },()=>{
                  console.log(this.state.address);
              })
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
        console.log(province);
        let arr=province.reduce((arr,val)=>{
            let obj={}
            obj.addressId=val.addressId
            obj.value=val.addressName;
            obj.label=val.addressName;
            obj.addressSqe=val.addressSqe
            arr.push(obj)
            return arr;
        },[])
        console.log(arr);
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
    handleBack=()=>{
        this.props.history.goBack()
    }
    handleGetInfo=(type)=>{
        return(e)=>{
            if(type==='tel'){
                this.setState({
                    telValue:e.target.value
                })
            }else if(type==="name"){
                this.setState({
                    nameValue:e.target.value
                })
            }else{
                this.setState({
                    addrValue:e.target.value
                })
            }
        }   
    }
    async handleSubmit(){
        let {telValue,nameValue,addrValue,addrName,countyList} =this.state
        let addr = this.state.address.reduce((str,value)=>{
            console.log(value);
            str+=value;
            return str
        },'')+addrValue
        let sqe = countyList.reduce((str,value)=>{
            if(value.value===addrName){
                str=value.addressSqe
            }
            return str
        },'')
        console.log(telValue,nameValue,addrValue,sqe);
        let params = {
            addressSqe:sqe,
            addressDetail:addrValue,
            userName:nameValue,
            userTelephone:telValue
        }
        axios.defaults.headers.common['token'] = 'token_123456'
        let result = await post('http://123.56.160.44:8080/user/address/create',qs.stringify(params))
        console.log(result);
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
                                    <Cascader bordered={false} options={this.state.countyList} onChange={this.handleChange()} placeholder="请选择" style={{width:"90px",background:"#f5a64a",padding:"none"}} />
                                </div>
                                <label htmlFor="">
                                    详细地址
                                    <input onChange={this.handleGetInfo('addr')} type="text"/>
                                </label>
                                <label htmlFor="">
                                    收货姓名
                                    <input onChange={this.handleGetInfo('name')} type="text"/>
                                </label>
                                <label htmlFor="">
                                    联系电话
                                    <input onChange={this.handleGetInfo('tel')} value={this.state.value} type="text"/>
                                </label>
                                <div className="choice clear_fix">
                                    <span onClick={this.handleBack}>返回</span>
                                    <span onClick={this.handleSubmit}>确定</span>
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
