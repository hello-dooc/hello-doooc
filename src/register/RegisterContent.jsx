import React, { Component } from 'react'
import {RegisterWrap} from './StyledRegister'
import { Form, Input, Button,Tooltip,Checkbox,Row,Col, message} from 'antd';
import { UserOutlined,PoweroffOutlined} from '@ant-design/icons';
import {validate_password,validate_phone,validate_email} from '../utils/validate'
import qs from 'qs'
// import  VCode from '../components/code/VerificationCode'
import { RegisterInterface ,RegisterCode} from '../api/account';


// let timer = null;


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
       mobile:"",
       email:"",
       userName:"",
       userPassword:"",
       name:"",//昵称
       emailCode:"",
       code_button_loading:false,
       code_button_disabled:false,
       code_button_test:"获取验证码",
     };
     this.onFinish = this.onFinish.bind(this);
   }

  // 邮箱输入处理
  inputChangeEmail=(e)=>{
    let value = e.target.value
    // console.log(value)
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


  inputChangeName=(e)=>{
    let value = e.target.value
    // console.log(value)
    this.setState({
      name:value
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
  onFinish=(values)=>{
    const requestData={
      mobile:this.state.mobile,
      email:this.state.email,//邮箱
      userName:this.state.userName,//邮箱
      userPassword:this.state.userPassword,
      // passwordconfrim:this.state.passwordconfrim,
      name:this.state.name,//昵称
      emailCode:this.state.emailCode,
      // key:
    }
    // console.log(requesDate);
    // return false;
    RegisterInterface(qs.stringify(requestData)).then(Response=>{
        // const data = response.data;
        // message.success
        console.log(Response)
    }).catch(error=>{

    })
    console.log(values)
  }

  getcode=()=>{
    if(!this.state.email){
      message.warning('邮箱不能为空',1)
      return false;
    }
    this.setState({
      code_button_loading:true,
      code_button_test:"发送中"
    })
    const requestData1={
      email:this.state.email,//邮箱
      // mobile:this.state.mobile,
      // userName:this.state.userName,//邮箱
      // userPassword:this.state.userPassword,
      // // passwordconfrim:this.state.passwordconfrim,
      // name:this.state.name,//昵称
      // emailCode:this.state.emailCode
    }
    RegisterCode(requestData1).then(response=>{
      console.log(response)
      // let res = 
      // 执行倒计时
      this.countDown();
    }).catch(error=>{ 
        this.setState({
          code_button_loading:false,
          code_button_test:"重新获取"
        })

    })   
  }

  countDown=()=>{
    // 定时器
    let timer = null;
    // 倒计时时间
    let sec = 60;
    // 修改状态
    this.setState({
      code_button_loading:false,
      code_button_disabled:true,
      code_button_test:`${sec}S`
    })

    timer = setInterval(()=>{
      console.log(1111)
      sec--;
      if(sec <= 0){
        this.setState({
          code_button_test:`重新获取`,
          code_button_disabled:false,

        })
        clearInterval(timer);
        return false;
      }
      this.setState({
        code_button_test:`${sec}S`
      })
    },1000)
  } 


  render() {
    const {mobile,userPassword,passwordconfrim,userName,name,email,emailCode,code_button_disabled,code_button_loading,code_button_test} = this.state;
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
             className="mobile"
                name="mobile"
                // label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: '请输入您的手机号!',
                  },
                  {
                    pattern:validate_phone,message:"请输入正确的手机号"
                  }
                
                ]}
              >
                <Input
                  // addonBefore={prefixSelector}
                  name="mobile"
                  id="mobile"
                  initialvalues={mobile}
                  onChange={this.inputChangeMobile}
                  style={{
                    width: '100%',
                  }}
                  prefix={<UserOutlined className="site-form-item-icon" />}placeholder="手机号" />
              </Form.Item>
              
              <Form.Item
             className="email"
                name="email"
                rules={
                  [
                    { required: true, message: '请输入您的邮箱!' },
                    {type:"email",message:"邮箱格式不正确"}
                    // ({getFieldValue})=>({
                    //   validator(rule,value){
                    //     if(validate_email(value)){
                    //       _this.setState({
                    //         button_disabled:false
                    //       })
                    //       return Promise.resolve();
                    //     }
                    //     return Promise.reject("邮箱格式不正确")
                    //   }
                    // })
                  ]
                }
              >
                <Input id="email"  initialvalues={email} 
                  onChange={this.inputChangeEmail}
                 prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
              </Form.Item>
             

              <Form.Item
              className="password"
                name="password"
                // label="Password"
                rules={[
                  {
                    required: true,
                    message: '设置密码',
                  },
                  
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
                <Input.Password   id="userPassword" onChange={this.inputChangePassword}  initialvalues={userPassword} prefix={<UserOutlined className="site-form-item-icon" />}placeholder="设置密码" />
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
                <Input.Password  id="passwordconfrim"  initialvalues={passwordconfrim} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />}placeholder="确认密码"/>
              </Form.Item>

           
              
              <Form.Item
                name="userName"
                label={
                  <span>
                    {/* Nickname&nbsp; */}
                    <Tooltip title="请输入用户名">
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: '请输入用户名',
                    whitespace: true,
                  },
                ]}
              >
                <Input id="userName" initialvalues={userName} onChange={this.inputChangeUsername} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="昵称"/>
              </Form.Item> 

              <Form.Item
                name="name"
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
                <Input id="name" initialvalues={name} onChange={this.inputChangeName} prefix={<UserOutlined className="site-form-item-icon" />}placeholder="昵称"/>
              </Form.Item> 

              <Form.Item>
                  <Row gutter={8}>
                    <Col span={12}>
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
                        <Input  id="emailCode" initialvalues={emailCode} onChange={this.inputChangeCode} prefix={<UserOutlined className="site-form-item-icon" />}placeholder="输入验证码"/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      {/* <VCode></VCode> */}
                      {/* <Button type="danger" email={email} disabled={button_disabled} loading={button_loading} icon={<PoweroffOutlined />} onClick={this.getcode} style={{background:'red',color:'#fff'}} > {button_text} </Button> */}

                      <Button disabled={code_button_disabled} icon={<PoweroffOutlined/>} loading={code_button_loading} onClick={this.getcode}>{code_button_test}</Button>
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
                  我已阅读并接受 <a href="http://www.baidu.com">《版权声明》</a>和<a href="http://www.baidu.com">《隐私保护》</a>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button  type="primary" htmlType="submit" className="login-form-button">
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

