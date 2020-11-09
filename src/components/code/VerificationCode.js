import React, { Component } from 'react'
import {message,Button} from 'antd'
// import {GetCode} from '../api/account'
import qs from 'qs'
import {PoweroffOutlined } from '@ant-design/icons';
import {GetCode} from '../../api/account'

let timer = null;


export default class VCode extends Component {
  constructor(props){
    // 初始化默认值
    super(props)
    this.state={
      username:"",
      button_text:"获取验证码",
      button_loading:false,
      button_disabled:false
    }
  }
  // this.props.mobile每次都会去获取
 // 获取验证码

componentWillReceiveProps({mobile}){
  // console.log(mobile)
  this.setState({
    mobile

  })
}

componentWillUnmount(){
  // console.log(1111)
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
          button_disabled:true,
         })
         clearInterval(timer)
         return false
       }
       this.setState({
        button_text: `${sec}S`
       })
     },1000)
    //  setInterval 不间断
    //  setTimeout只执行一次
  }


 getcode = () =>{
//  alert(this.state.mobile)
  //  判断手机号是否为空
   if(!this.state.mobile){
      message.warning('手机号不能为空',1);
     return false;
   }
   this.setState({
    button_loading:true,
    button_text:"发送中"
   })
  //  alert(this.state.mobile);
   const requestData={
      mobile:this.state.mobile,
   }
   GetCode(qs.stringify(requestData)).then(Response=>{
    // 处理倒计时 
    this.countDown();
   
  }).catch(error=>{
    this.setState({
      button_loading:false,
      button_text:"重新获取"
     })
  })
}
  render() {
    return (
      <Button type="danger"  disabled={this.state.button_disabled} loading={this.state.button_loading} icon={<PoweroffOutlined />} onClick={this.getcode} style={{background:'red',color:'#fff'}} > {this.state.button_text} </Button>
      
    )
  }
}
