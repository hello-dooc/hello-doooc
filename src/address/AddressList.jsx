import React, { useCallback, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {loadDataAsync} from './actionCreater'
import Header from '@c/header/HeaderNoBg'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'
import axios from 'axios'

import {AddressListWrap} from './StyledAddressList'

const AddressList = (props)=> {
    const dispatch = useDispatch()
    const history=useHistory()
    const list = useSelector(state => state.address.list)
    console.log(list);
    if(list&&list.length>0){
        var addressList=list.reduce((arr,value)=>{
            let addr = value.province+value.city+value.country+value.addressDetail;
            value.addr=addr
            arr.push(value);
            return arr;
        },[])
    }
    const handleBack=useCallback((url,value)=>{
        return ()=>{
            history.push(url,{addrList:value})
        }
    },[history])
    const handleClickRight=useCallback(()=>{
        history.push('/add')
    })
    const handleDel=useCallback((userAddressId)=>{
        return async ()=>{
            let result = await axios({
                url:'http://123.56.160.44:8080/user/address/delete',
                method:'delete',
                params:{
                    userAddressId
                }
            })
            console.log(result);
            dispatch(loadDataAsync())
        }
    })
    const handleEdit=useCallback((defaultValue)=>{
        return async ()=>{
            // let result = await axios({
            //     url:'http://123.56.160.44:8080/user/address/delete',
            //     method:'delete',
            //     params:{
            //         userAddressId
            //     }
            // })
            // console.log(result);
            // dispatch(loadDataAsync())
            console.log(defaultValue);
            history.push('/add',defaultValue)
        }
    })

    
    useEffect(()=>{
        dispatch(loadDataAsync())
    },[dispatch])
    return (
        <AddressListWrap id="address-list">
            <Header></Header>
            <div className="address-list-wrap">
                <div className="list_top clear_fix">
                    <span onClick={handleBack('/self')}>返回</span>
                    <span onClick={handleClickRight}>添加</span>
                </div>
                {
                    addressList && addressList.map(value=>{
                        console.log(value);
                        return(
                            <div className="address_list"  key={value.userAddressId}>
                                <div className="address_top clear_fix">
                                    <span>{value.userName}</span>
                                    <span>{value.userTelephone}</span>
                                    <span onClick={handleDel(value.addrId)}>删除</span>
                                    <span onClick={handleEdit(value)}>编辑</span>
                                </div>
                                <div className="address_bottom" onClick={handleBack('/self',value)}>
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
export default AddressList
