import React, { Component } from 'react'
// import qs from 'qs'
import {MessageWrap} from './StyledLogin'
import { Form, Input, Button ,Row,Col} from 'antd';
import { UserOutlined, LockOutlined  } from '@ant-design/icons';
// import { post } from '../utils/http';
// import Axios from 'axios';
// import {GetCode} from '../api/account'
import  VCode  from '../components/code/VerificationCode'
import {MessageLogin} from '../api/account'



export default class Message extends Component {
  constructor(){
    super();
    this.state={
      mobile:"",
      // code_button_loading:false,
      // code_button_disabled:false,
      // code_button_text:"获取验证码"
    };
    this.onFinish = this.onFinish.bind(this);
  }

   
 // 获取验证码
  //  getcode = () =>{
  //   //  判断手机号是否为空
  //    if(this.state.mobile ===''){
  //       message.warning('手机号不能为空',1);
  //      return false;
  //    }
  //    this.setState({
  //     code_button_loading:true,
  //     code_button_text:"发送中"
  //    })
  //   //  alert(this.state.mobile);
  //    const requestData={
  //       mobile:this.state.mobile,
  //    }
  //   GetCode(qs.stringify(requestData)).then(Response=>{
  //     // 处理倒计时
  //     this.countDown();
     
  //   }).catch(error=>{
  //     this.setState({
  //       code_button_loading:false,
  //       code_button_text:"重新获取"
  //      })
  //   })
  // }
  // input输入处理
  inputChange=(e)=>{
    let value = e.target.value
    // console.log(value)
    this.setState({
      mobile:value
    })
  }

  // 倒计时
  // countDown =()=>{
  //   // 定时器
  //   let timer = null;
  //   // 倒计时时间
  //   let sec = 5;
  //   // 修改状态
  //   this.setState({
  //     code_button_loading:false,
  //     code_button_disabled:true,
  //     code_button_text: `${sec}S`
  //    })

  //    timer = setInterval(()=>{
  //     //  console.log(111)
  //      sec--;
  //      if(sec <=0){
  //       this.setState({
  //         code_button_text: `重新获取`,
  //         code_button_disabled:true,
  //        })
  //        clearInterval(timer)
  //        return false
  //      }
  //      this.setState({
  //       code_button_text: `${sec}S`
  //      })
  //    },1000)
  //   //  setInterval 不间断
  //   //  setTimeout只执行一次
  // }

   onFinish =  (values)=> {
    MessageLogin().then(response=>{
      console.log(response)
    }).catch(error=>{
      
    })
    console.log(values)
    };
  // 路由跳转
    handleClick=(props)=>{
      let history = this.props.history
      history.push('/register')
    };
  render() {
    const {mobile}= this.state
    return (
      <MessageWrap>
        <div className="from-content">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
              >
                <Form.Item  name="mobile"rules={[{ required: true, message: '请输入手机号!' }]}>
                  <Input id="mobile" initialvalues={mobile} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号" />
                </Form.Item>
                <Form.Item name="code" 
                  rules={
                    [
                      { required: true, message: '请输入验证码!' }
                    ]
                  } 
                >
                  <Row gutter={13}>
                    <Col span={16}>
                      <Input   prefix={<LockOutlined className="site-form-item-icon" />} type="password"  placeholder="请输入验证码" />
                    </Col>
                    <Col span={8}>
                      <VCode mobile={mobile}></VCode>
                {/* <Button type="danger" icon={<PoweroffOutlined />} disabled={code_button_disabled} loading={code_button_loading} onClick={this.getcode} style={{background:'red',color:'#fff'}} > {code_button_text} </Button> */}
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Button onClick= {this.LoginClick}type="primary" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                  <br/>
                <span onClick={this.handleClick}> 去注册</span>
                </Form.Item>
          </Form>
        </div>
      </MessageWrap>
    )
  }
}
