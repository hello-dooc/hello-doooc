import React, { Component } from 'react'

import Header from '@c/header/HeaderNoBg'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'

import {AddressListWrap} from './StyledAddressList'


export default class AddressList extends Component {
    constructor(props){
        super(props);
        this.handleClickLeft=this.handleClickLeft.bind(this)
        this.handleClickRight=this.handleClickRight.bind(this)
    }

    handleClickLeft(){ 
        let {history} = this.props
        history.goBack();
    }
    handleClickRight(){
        this.props.history.push('/add')
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        let addressList=this.props.location.state.list
        console.log(addressList);
        return (
            <AddressListWrap id="address-list">
                <Header></Header>
                <div className="address-list-wrap">
                    <div className="list_top clear_fix">
                        <span onClick={this.handleClickLeft}>返回</span>
                        <span onClick={this.handleClickRight}>添加</span>
                    </div>
                    {
                        addressList && addressList.map(value=>{
                            return(
                                <div className="address_list"  key={value.addrId}>
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
