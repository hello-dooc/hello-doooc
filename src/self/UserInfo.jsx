import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import {UserInfoWrap} from './StyledSelf'

const UserInfo = (props) => {

    const handleClick=()=>{
        return(e)=>{
            e.preventDefault()
        }
    }
    const history = useHistory()
    const handleAd=(e)=>{
        e.preventDefault()
        history.push('/address')
    }
  return (
    <>
        <UserInfoWrap>
            <label htmlFor="">
                <span>用户名</span>
                <input type="text"/>
            </label>
            <label htmlFor="">
                <span>手机号</span>
                <input type="text"/>
            </label>
            <label htmlFor="">
                <span>性别</span>
                <input type="text"/>
            </label>
            <label htmlFor="">
                <span>邮箱</span>
                <input type="text"/>
            </label>
            <label htmlFor="">
                <span>QQ</span>
                <input type="text"/>
            </label>
            <label htmlFor="">
                <span>收货地址</span>
                <input type="text" disabled/>
                <button onClick={handleAd}>选择收货地址</button>
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