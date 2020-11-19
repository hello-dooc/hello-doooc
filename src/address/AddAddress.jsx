import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import {get,post,put} from '@u/http.js'
import {getToken} from '@u/cookies'

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
        this.handleEdit=this.handleEdit.bind(this)
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
        let arr=province.reduce((arr,val)=>{
            let obj={}
            obj.addressId=val.addressId
            obj.value=val.addressName;
            obj.label=val.addressName;
            obj.addressSqe=val.addressSqe
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
        let sqe = countyList.reduce((str,value)=>{
            if(value.value===addrName){
                str=value.addressSqe
            }
            return str
        },'')
        if(telValue!==''&& nameValue!== '' && addrValue !=='' && sqe !== ''){
            var params = {
                addressSqe:sqe,
                addressDetail:addrValue,
                userName:nameValue,
                userTelephone:telValue
            }
            let token = getToken()
            console.log(token);
            // axios.defaults.headers.common['token'] = 'token_123456'
            if(token){
                axios.defaults.headers.common['token'] = token
                let result = await post('http://123.56.160.44:8080/user/address/create',qs.stringify(params))
                console.log(result);
                this.props.history.goBack()
            }else{
                this.props.history.push('/login')
            }
        }else{
            window.alert('请按照规则填写信息')
        }
    }
    async handleEdit(){
        let {level,userAddressId,userName,userTelephone,addressDetail}=this.props.location.state
        let {telValue,nameValue,addrValue,addrName,countyList} =this.state
        let sqe = countyList.reduce((str,value)=>{
            if(value.value===this.props.location.state.userName || value.value===addrName){
                str=value.addressSqe
            }
            return str
        },'')
        if(sqe && sqe !== '' && userAddressId && level !==''){
            var params = {
                addressSqe:sqe,
                addressDetail:addrValue || addressDetail,
                userName:nameValue || userName,
                userTelephone:telValue || userTelephone,
                level,
                userAddressId
            }
            console.log(params);
            let token=getToken()
            if(token){
                axios.defaults.headers.common['token'] = token
                // axios.defaults.headers.common['token'] = 'token_123456'
                var result = await put({
                    url:'http://123.56.160.44:8080/user/address/update',
                    params
                })
                console.log(result);
                this.props.history.goBack()
            }else{
                this.props.history.push('/login')
            }
        }else{
            window.alert('请按照规则填写表单')
        }
        
    }
    componentDidMount(){
        this.getList(this.state.changeId,this.state.provinceList);
        console.log(this.props);
    }
    render() {
        if(this.props.location.state){
            var { province,city,country,userName,addressDetail,userTelephone} = this.props.location.state
        }
        // console.log(this.props.location.state);
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
                            <span className="float_left" onClick={this.handleBack}></span>
                            <div className="add_detail float_right">
                                <p>收货地址<br/>ADDRESS</p>
                                <div className="area">
                                    <span>所在地区</span>
                                    <Cascader bordered={false} options={this.state.provinceList} onChange={this.handleChange(this.state.provinceList,this.state.cityList)} defaultValue={[province]} placeholder="请选择" style={{width:"90px",background:"#f5a64a",padding:"none"}} />
                                    <Cascader bordered={false} options={this.state.cityList} onChange={this.handleChange(this.state.cityList,this.state.countyList)} defaultValue={[city]} placeholder="请选择" style={{width:"90px",background:"#f5a64a",padding:"none"}} />
                                    <Cascader bordered={false} options={this.state.countyList} onChange={this.handleChange()} placeholder="请选择" defaultValue={[country]} style={{width:"90px",background:"#f5a64a",padding:"none"}} />
                                </div>
                                <label htmlFor="">
                                    详细地址
                                    <input onChange={this.handleGetInfo('addr')} type="text" defaultValue={addressDetail?addressDetail:''}/>
                                </label>
                                <label htmlFor="">
                                    收货姓名
                                    <input onChange={this.handleGetInfo('name')} type="text" defaultValue={userName?userName:''}/>
                                </label>
                                <label htmlFor="">
                                    联系电话
                                    <input onChange={this.handleGetInfo('tel')} defaultValue={userTelephone?userTelephone:''} type="text"/>
                                </label>
                                <div className="choice clear_fix">
                                    <span onClick={this.handleSubmit}>添加</span>
                                    <span onClick={this.handleEdit}>修改</span>
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
