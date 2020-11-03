import React, { Component } from 'react'
import {RegisterWrap} from './StyledRegister'
import { Form, Input, Button,Tooltip,Checkbox,Row,Col} from 'antd';
import { UserOutlined} from '@ant-design/icons';
// import {validate_password} from '../utils/validate'

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default class RegisterContent extends Component {
  getCode=()=>{

  }
  render() {
    return (
      <RegisterWrap>
        <div className="rgwrap">
          <div className="rgtop">注册账号</div>
          <div className="rgcontent">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
             <Form.Item
                name="phone"
                // label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: '请输入您的手机号!',
                  },
                ]}
              >
                <Input
                  // addonBefore={prefixSelector}
                  style={{
                    width: '100%',
                  }}
                  prefix={<UserOutlined className="site-form-item-icon" />}placeholder="手机号" />
              </Form.Item>
              
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
                // label="Password"
                rules={[
                  {
                    required: true,
                    message: '设置密码',
                  },
                ]}
                hasFeedback
              >
                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />}placeholder="设置密码" />
             </Form.Item>

              <Form.Item
                name="confirm"
                // label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: '请确认密码!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject('请确保两次输入密码一致!');
                    },
                  }),
                ]}
              >
                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />}placeholder="确认密码"/>
              </Form.Item>

              <Form.Item
                name="nickname"
                label={
                  <span>
                    {/* Nickname&nbsp; */}
                    <Tooltip title="请输入昵称?">
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: '请设置一个昵称!',
                    whitespace: true,
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}placeholder="昵称"/>
              </Form.Item> 

              <Form.Item>
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="captcha"
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: '请输入验证码!',
                          },
                        ]}
                      >
                        <Input  prefix={<UserOutlined className="site-form-item-icon" />}placeholder="输入验证码"/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Button onClick={this.getCode}>获取验证码</Button>
                    </Col>
                  </Row>
                </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  我已阅读并接受 <a href="#">《版权声明》</a>和<a href="#">《隐私保护》</a>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  注册
                </Button>
                <br/>
                <p>已有账号，<a href="#" onClick={this.handleClick} style={{color:'blue'}}> 现在去登录</a></p>
              </Form.Item>

           </Form>
          </div>
        </div>
      </RegisterWrap>
    )
  }
}
