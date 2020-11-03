import React, { Component } from 'react'
import {EmailWrap} from './StyledLogin'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {validate_password} from '../utils/validate'


export default class Email extends Component {
  constructor(){
    super();
    this.state={};
   
  }
  onFinish =  (values)=> {
    console.log('Received values of from:',values)
   };
   handleClick=(props)=>{
    let history = this.props.history

    history.push('/register')
}
  
  render() {
    return (
      <EmailWrap>
        <div>
           <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={
                  [
                    { required: true, message: '请输入您的邮箱!' },
                    {type:"email",message:"邮箱格式不正确"}
                  ]
                }
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={
                  [
                    { required: true, message: '请输入您的密码!' },
                    {pattern:validate_password, message:"请输入大于6位小于12位的数字和英文"}
                  ]
                }
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <br/>
                <span onClick={this.handleClick} > 去注册</span>
              </Form.Item>
           </Form>
        </div>
      </EmailWrap>
    )
  }
}
