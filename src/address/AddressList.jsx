import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loadDataAsync} from './actionCreater'
import Header from '@c/header/HeaderNoBg'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'

import {AddressListWrap} from './StyledAddressList'

@connect((state)=>{
    return {
        list:state.address.list
    }
},(dispatch)=>({
    loadData() {
        dispatch(loadDataAsync())
      }
}))
class AddressList extends Component {
    constructor(props){
        super(props);
        this.state={
            addressList:[]
        }
        this.handleClickRight=this.handleClickRight.bind(this)
    }
    async getAddressList(){
        let result = this.props.list || this.props.location.state.list
        let arr=result.reduce((arr,value)=>{
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
    handleBack=(url,value)=>{
        return ()=>{
            let {history} = this.props
            history.push(url,{addrList:value})
        }
    }
    handleClickRight(){
        this.props.history.push('/add')
    }
    componentDidMount(){
        this.getAddressList()
    }
    render() {
        let addressList = this.state.addressList || this.props.location.state.list
        return (
            <AddressListWrap id="address-list">
                <Header></Header>
                <div className="address-list-wrap">
                    <div className="list_top clear_fix">
                        <span onClick={this.handleBack('/self')}>返回</span>
                        <span onClick={this.handleClickRight}>添加</span>
                    </div>
                    {
                        addressList && addressList.map(value=>{
                            return(
                                <div className="address_list"  key={value.addrId} onClick={this.props.location.pathname==='/self'?this.handleBack('/self',value):this.handleBack('/self',value)}>
                                    <div className="address_top clear_fix">
                                        <span>{value.userName}</span>
                                        <span>{value.userTelephone}</span>
                                    </div>
                                    <div className="address_bottom">
                                        {value.addr}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Link></Link>
                <Footer></Footer>
            </AddressListWrap>
        )
    }
}
export default AddressList
