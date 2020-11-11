import React, { useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {put,post} from '@u/http'
import qs from 'qs'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {UserInfoWrap} from './StyledSelf'
import {loadDataAsync} from '@d/actionCreater'

const UserInfo = (props) => {
    const [name,setName]=useState('')
    const [tel,setTel]=useState('')
    const [gender,setGender]=useState('')
    const [email,setEmail]=useState('')
    const [qq,setQq]=useState('')
    const [code,setCode]=useState('')
    const [key,setKey]=useState('')
    
    
    const dispatch = useDispatch()
    const list = useSelector(state=>state.address.list)
    if(list.length!==0){
        var username=list[0].userName
        var usertel=list[0].userTelephone
        var userAddr = list[0].province+list[0].city+list[0].country+list[0].addressDetail
    }

    const history = useHistory()
    const handleAd=(list)=>{
        return (e)=>{
            e.preventDefault()
            history.push('/address',{list})
        }
    }
    const handleChange=(type)=>{
        return (e)=>{
            if(type==='name') setName(e.target.value)
            if(type==='tel') setTel(e.target.value)
            if(type === 'gender') setGender(e.target.value)
<<<<<<< HEAD
            if(type === 'email') setEmail(e.target.value)
            if(type === 'qqq') setQq(e.target.value)
=======
            if(type === 'email') setEmail(e.target.email)
            if(type === 'qq') setQq(e.target.value)
            if(type==='code') setCode(e.target.value)
        }
    }
    const handleClick=()=>{
        return async (e)=>{
            e.preventDefault()
            let params = {
                userName:name,
                userGender:gender,
                userQq:qq,
                userTelephone:tel,
                key,
                verification:code
            }
            console.log(params);
            axios.defaults.headers.common["token"] = 'token_123456';
            let result = await put({url:'http://10.9.65.215:8080/user/info/update',
            params:{
                userName:name,
                userGender:gender,
                userQq:qq,
                userTelephone:tel,
                key,
                verification:code
            }})
            console.log(result);
        }
    }
    const getCode=(tel)=>{
        return async (e)=>{
            e.preventDefault();
            console.log(tel);
            let params={}
            params.mobile=tel
            let result = await post('http://123.56.160.44:8080/user/sendMessage?mobile='+tel)
            console.log(result);
            setKey(result.data.data)
>>>>>>> hanmin
        }
    }
    var { addressList, userInfo}= props
    console.log(props);

    useEffect(()=>{
        dispatch(loadDataAsync())  
    },[dispatch])
    
  return (
    <>
        <UserInfoWrap>
            <label htmlFor="">
                <span>用户名</span>
                <input type="text" onChange={handleChange('name')} placeholder={userInfo.userName}/>
            </label>
            <label htmlFor="">
                <span>手机号</span>
                <input type="text" onChange={handleChange('tel')} placeholder={userInfo.userTelephone} /><br />
                <span>验证码</span>
                <input type="text" onChange={handleChange('code')}/>
                <button onClick={getCode(tel)}>获取验证码</button>
            </label>
            <label htmlFor="">
                <span>性别</span>
                <input type="text" onChange={handleChange('gender')} placeholder={userInfo.userGender}/>
            </label>
            <label htmlFor="">
                <span>邮箱</span>
                <input type="text" onChange={handleChange('email')} placeholder={userInfo.email}/>
            </label>
            <label htmlFor="">
                <span>QQ</span>
                <input type="text" onChange={handleChange('qq')} placeholder={userInfo.userQq}/>
            </label>
            <label htmlFor="" className="clear_fix">
                <span className="float_left">收货地址</span>
                <div className="address_list float_left">
                    <div className="address_top clear_fix">
                        <span>{addressList!==null && addressList!==undefined?addressList.userName:username}</span>
                        <span>{addressList!==null && addressList!==undefined?addressList.userTelephone:usertel}</span> 
                    </div>
                    <div className="address_bottom">
                        {addressList!==null && addressList!==undefined?addressList.addr:userAddr}
                    </div>
                </div>
                <button onClick={handleAd(list)}>选择收货地址</button>
            </label>
            <div>
                <button onClick={handleClick()}>确认修改</button>
                <button onClick={handleClick()}>取消修改</button>
            </div>
        </UserInfoWrap>
    </>
  );
};

export default UserInfo