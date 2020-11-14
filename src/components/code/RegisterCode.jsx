import React, { Component } from 'react'
import {message,Button} from 'antd'
import qs from 'qs'
import {PoweroffOutlined } from '@ant-design/icons';
import {RegisterCode} from '../../api/account'

let timer = null;


export default class REmailCode extends Component {
  constructor(props){
    // 初始化默认值
    super(props)
    this.state={
      username:"",
      button_text:"获取验证码",
      button_loading:false,
      button_disabled:false,
    }
  }


componentWillReceiveProps({email}){
  this.setState({
    email

  })
}

componentWillUnmount(){
  clearInterval(timer)
}

countDown =()=>{
    // 定时器
    // let timer = null;
    // 倒计时时间
    let sec = 60;
    // 修改状态
    this.setState({
      button_loading:false,
      button_disabled:true,
      button_text: `${sec}S`
     })
     
     timer = setInterval(()=>{
      //  console.log(111)
       sec--;
       if(sec <=0){
        this.setState({
          button_text: `重新获取`,
          button_disabled:false,
         })
         clearInterval(timer)
         return false
       }
       this.setState({
        button_text: `${sec}S`
       })
     },1000)

  }


 getcode = () =>{
  //  alert(this.state.mobile)
  //  判断手机号是否为空
   if(!this.state.email){
      message.warning('邮箱不能为空',1);
     return false;
   }
   this.setState({
    button_loading:true,
    button_text:"发送中"
   })
  //  alert(this.state.mobile);
   const requestData={
      email:this.state.email,
   }
   RegisterCode(qs.stringify(requestData)).then(Response=>{
     console.log(Response)
     let key = Response.data.data;
     console.log(key)
    //  console.log(this.props)
     this.props.onGetKey(key)
    // 处理倒计时 
    this.countDown();
  })
  .catch(error=>{
    console.log("错误")
    this.setState({
      button_loading:false,
      button_text:"重新获取"
     })
  })
  
}

  render() {
    
    return (
      <Button type="danger"  disabled={this.state.button_disabled}  loading={this.state.button_loading} icon={<PoweroffOutlined />} onClick={this.getcode} style={{background:'red',color:'#fff'}} > {this.state.button_text} </Button>
      
    )
  }
}
