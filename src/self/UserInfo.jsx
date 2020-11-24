import React, { useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {put,post} from '@u/http'
import {getToken} from '@u/cookies'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {UserInfoWrap} from './StyledSelf'
import {loadDataAsync} from '@d/actionCreater'

const UserInfo = (props) => {
    var { addressList, userInfo}= props
    const [name,setName]=useState('')
    const [tel,setTel]=useState('')
    const [gender,setGender]=useState('')
    const [isSend,setIsSend]=useState(false)
    const [qq,setQq]=useState('')
    const [code,setCode]=useState('')
    const [key,setKey]=useState('')
    const [time,setTime]=useState(60)
    

    const dispatch = useDispatch()
    const list = useSelector(state=>state.address.list)
    let defaultList =list&& list.filter(value=>{
        return value.level===1
    })
    if(defaultList&&defaultList.length>0){
        var username=defaultList[0].userName
        var usertel=defaultList[0].userTelephone
        var userAddr = defaultList[0].province+defaultList[0].city+defaultList[0].country+defaultList[0].addressDetail
    }
    const history = useHistory()
    const handleAd=()=>{
        return (e)=>{
            e.preventDefault()
            history.push('/address')
        }
    }
    const handleChange=(type)=>{
        return (e)=>{
            if(type==='name') setName(e.target.value)
            if(type==='tel') setTel(e.target.value)
            if(type === 'gender') setGender(e.target.value)
            if(type === 'qqq') setQq(e.target.value)
            if(type === 'qq') setQq(e.target.value)
            if(type==='code') setCode(e.target.value)
        }
    }
    const setCountDown=()=>{
        setIsSend(true)
        const active = setInterval(() => {
            setTime((time) => {
            if (time <= 1) {
                setIsSend(false)
                clearInterval(active)
                // 重置秒数
                return 60
            }
            return time - 1
            })
        }, 1000)
    }


    const handleClick=()=>{
        return async (e)=>{
            e.preventDefault()
            let token = getToken()
            if(token){
                axios.defaults.headers.common["token"] = token;
                // axios.defaults.headers.common["token"] = 'token_123456';
                let result = await put({url:'http://10.9.12.250:8088/user/info/update',
                params:{
                    userName:name||userInfo.userName,
                    userGender:gender||userInfo.userGender,
                    userQq:qq || userInfo.userQq,
                    userTelephone:tel || userInfo.userTelephone,
                    key,
                    verification:code
                }})
                console.log(result);
                if(result.data.code===200){
                    window.alert('修改用户信息成功')
                }else{
                    window.alert('修改用户信息失败，请稍后重试')
                }
            }else{
                history.push('/login')
            }
        }
    }
    const getCode=(tel)=>{
        return async (e)=>{
            e.preventDefault();
            console.log(tel);
            let result = await post('http://10.9.12.250:8088/user/sendMessage?mobile='+tel)
            console.log(result);
            setKey(result.data.data)
            if(isSend){
                return;
            }
            setCountDown()
        }
    }
    useEffect(()=>{
        dispatch(loadDataAsync()) 
    },[dispatch])
    useEffect(()=>{
        setName(userInfo.userName)
        setTel(userInfo.userTelephone)
        setGender(userInfo.userGender)
        setQq(userInfo.userQq)
    },[])


    
  return (
    <>
        <UserInfoWrap>
            <label htmlFor="">
                <span>用户名</span>
                <input type="text" onChange={handleChange('name')} defaultValue={userInfo.userName}/>
            </label>
            <label htmlFor="">
                <span>手机号</span>
                <input type="text" onChange={handleChange('tel')} defaultValue={userInfo.userTelephone} /><br />
                <span>验证码</span>
                <input type="text" onChange={handleChange('code')} defaultValue=""/>
                <button onClick={getCode(tel)}>
                    {
                        isSend?`${time}s后重发`:'获取验证码'
                    }
                </button>
            </label>
            <label htmlFor="">
                <span>性别</span>
                <input type="text" onChange={handleChange('gender')} defaultValue={userInfo.userGender}/>
            </label>
            <label htmlFor="">
                <span>邮箱</span>
                <input type="text" onChange={handleChange('email')} defaultValue={userInfo.email}/>
            </label>
            <label htmlFor="">
                <span>QQ</span>
                <input type="text" onChange={handleChange('qq')} defaultValue={userInfo.userQq}/>
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
                <button>取消修改</button>
            </div>
        </UserInfoWrap>
    </>
  );
};

export default UserInfo