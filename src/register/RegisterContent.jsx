import React, { Component } from 'react'
import {RegisterWrap} from './StyledRegister'
import { Form, Input, Button,Checkbox,Row,Col} from 'antd';
import { UserOutlined,MailOutlined,UnlockOutlined ,SafetyOutlined} from '@ant-design/icons';
import {validate_password} from '../utils/validate'
import qs from 'qs'
import  REmailCode from '../components/code/RegisterCode'
import { RegisterInterface} from '../api/account';

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
   constructor(){
     super();
     this.state={
       email:"",
       userName:"",
       userPassword:"",
       emailCode:"",
       key:''
     };
     this.onFinish = this.onFinish.bind(this);
   }

  // 邮箱输入处理
  inputChangeEmail=(e)=>{
    let value = e.target.value
    console.log(value)
    this.setState({
     email:value
    })
  }

  inputChangePassword=(e)=>{
    let value = e.target.value
    // console.log(value)
    this.setState({
      userPassword:value
    })
  }

  inputChangeUsername=(e)=>{
    let value = e.target.value
    // console.log(value)
    this.setState({
      userName:value
    })
  }

  inputChangeMobile=(e)=>{
    let value = e.target.value
    // console.log(value)
    this.setState({
     mobile:value
    })
  }


  inputChangeCode=(e)=>{
    let value = e.target.value
    // console.log(value)
    this.setState({
      emailCode:value
    })
  }
  
  essageSbumit=e=>{
    e.preventDefault();
    // console.log(this.state)
    this.props.registerFn.registerAc();
  }
  handleChange=e=>{
    this.setState({
      // [e.target.name]:e.targrt.value
    })
  }

  getCodekey=(key)=>{
    console.log(key)
    this.setState({
      key
    })
  }

  onFinish=(values)=>{
    const requestData={
      ...this.state
    }
    RegisterInterface(qs.stringify(requestData)).then(Response=>{
        // const data = response.data;
        // message.success
        console.log(requestData)
        console.log(Response)
        // 路由跳转
        if(Response.data.data==="注册成功，请登录！"){
          alert("注册成功！")
        }else if(Response.data.data === "该邮箱已被注册！"){
          alert ("该邮箱已被注册，换个邮箱试试^_^")
        }else{
          alert("请填写正确的验证码")
        }
    }).catch(error=>{

    })
    console.log(values)
  }

  render() {
    const {userPassword,passwordconfrim,userName,name,email,emailCode} = this.state;
    return (
      <RegisterWrap>
        <div className="rgwrap">
          <div className="rgtop">注册账号</div>
          <div className="rgcontent">
            <Form
              name="normal_login"
              className="login-form"
              initialvalues={{ remember: true }}
              onFinish={this.onFinish}
              onSubmit = {this.MessageSbumit}
            >
              <Form.Item
             className="email"
                name="email"
                rules={
                  [
                    { required: true, message: '请输入您的邮箱!' },
                    {type:"email",message:"邮箱格式不正确"}
                  ]
                }
              >
                <Input id="email"  initialvalues={email} 
                  onChange={this.inputChangeEmail}
                 prefix={<MailOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
              </Form.Item>
             

              <Form.Item
              className="password"
                name="password"
                rules={[
                  // {
                  //   required: true,
                  //   message: '设置密码',
                  // },
                  
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!validate_password(value) ) {
                        return Promise.reject("请输入大于6位小于12位的数字+字母");
                      }

                      return Promise.resolve();
                    },
                  }),
                  {pattern:validate_password, message:"请输入大于6位小于12位的数字和英文"}
                ]}
                hasFeedback
              >
                <Input.Password   id="userPassword" onChange={this.inputChangePassword}  initialvalues={userPassword} prefix={<UnlockOutlined  className="site-form-item-icon" />}placeholder="设置密码" />
             </Form.Item>

              <Form.Item
              className="passwordconfrim"
                name="passwordconfirm"
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
                      let password_value = getFieldValue("passwords");//获取再次输入的密码
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      if(password_value && value!==password_value){
                        return Promise.reject("")
                      }
                      return Promise.reject('请确保两次输入密码一致!');
                    },
                  }),
                ]}
              >
                <Input.Password  id="passwordconfrim"  initialvalues={passwordconfrim} onChange={this.inputChange} prefix={<UnlockOutlined  className="site-form-item-icon" />}placeholder="确认密码"/>
              </Form.Item>
              
              <Form.Item
                name="userName"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名',
                    whitespace: true,
                  }
                ]}

              >
                <Input id="userName" initialvalues={userName} onChange={this.inputChangeUsername} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名"/>
              </Form.Item> 

              {/* <Form.Item> */}
              <Form.Item
                  name="code"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码!',
                    },
                  ]}
                >
                  <Row gutter={0}>
                  <Col span={16}>
                    <Input  id="emailCode" initialvalues={emailCode} onChange={this.inputChangeCode} prefix={<SafetyOutlined className="site-form-item-icon" />}placeholder="输入验证码"/>
                  </Col>
                  <Col span={8}>
                    {/* <VCode></VCode> */}
                    {/* <Button type="danger" email={email} disabled={button_disabled} loading={button_loading} icon={<PoweroffOutlined />} onClick={this.getcode} style={{background:'red',color:'#fff'}} > {button_text} </Button> */}
                      <REmailCode email={email} onGetKey={this.getCodekey}></REmailCode>
                    {/* <Button disabled={code_button_disabled} icon={<PoweroffOutlined/>} loading={code_button_loading} onClick={this.getcode}>{code_button_test}</Button> */}
                  </Col>
                </Row>
                {/* </Form.Item> */}
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject('请阅读后注册'),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox className="read">
                  我已阅读并接受 <a href="http://www.baidu.com">《版权声明》</a>和<a href="http://www.baidu.com">《隐私保护》</a>
                </Checkbox>
                 
              </Form.Item> 
              <Form.Item>
                <Button  type="primary" htmlType="submit" className="login-form-button">
                  注册
                </Button>
                <br/>
                <p>已有账号，现在去<a href="../login/Email.jsx"  onClick={this.handleClick} style={{color:'blue'}}> 登录</a></p>
              </Form.Item>

           </Form>
          </div>
        </div>
      </RegisterWrap>
    )
  }
}

