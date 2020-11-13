import React, { Component } from 'react'
import qs from 'qs'
import {MessageWrap} from './StyledLogin'
import { Form, Input, Button ,Row,Col} from 'antd';
import { UserOutlined, LockOutlined  } from '@ant-design/icons';
// import { post } from '../utils/http';
// import Axios from 'axios';
// import {GetCode} from '../api/account'
import  VCode  from '../components/code/VerificationCode'
import {MessageLogin} from '../api/account'
import {withRouter} from 'react-router-dom'



class Message extends Component {
  constructor(props){
    super(props);
    this.state={
      mobile:"",
      verification:"",
      key:''
      // code_button_loading:false,
      // code_button_disabled:false,
      // code_button_text:"获取验证码"
    };
    this.onFinish = this.onFinish.bind(this);
  }

  
  //  getChildrenMsg=(key)=>{
  //   this.setState({
  //     key:key
  //   })
  //  }
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

  inputCodeChange=(e)=>{
    let value = e.target.value
    this.setState({
      verification:value
    })
  }
  
  getKey=(key)=>{
    console.log(key)
    this.setState({
      key
    })
  }
   onFinish =  (values)=> {
     const res = {
       ...this.state
     }
    MessageLogin(qs.stringify(res)).then(response=>{
      console.log(res)
      console.log(response)
      this.props.history.push('/home')
    }).catch(error=>{
      
    })
    };
  // 路由跳转
    handleClick=(props)=>{
      let history = this.props.history
      history.push('/register')
    };

    
    
  render() {
    const {mobile,verification}= this.state
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
                  <Row gutter={0}>
                    <Col span={16}>
                      <Input id="verification" initialvalues={verification} onChange={this.inputCodeChange}  prefix={<LockOutlined className="site-form-item-icon" />} type="password"  placeholder="请输入验证码" />
                    </Col>
                    <Col span={8}>
                      <VCode mobile={mobile} onGetKey={this.getKey}></VCode>
                {/* <Button type="danger" icon={<PoweroffOutlined />} disabled={code_button_disabled} loading={code_button_loading} onClick={this.getcode} style={{background:'red',color:'#fff'}} > {code_button_text} </Button> */}
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Button  className="loginname" onClick= {this.LoginClick} type="primary" htmlType="submit" className="login-form-button">
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

export default withRouter(Message);