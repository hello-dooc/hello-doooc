import React, { Component } from 'react'
import {MessageWrap} from './StyledLogin'
import { Form, Input, Button ,Row,Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { post } from '../utils/http';
import Axios from 'axios';



// const res =()=>{
//   return async (dispatch)=>{
//     await post({
//       url:'http://localhost:3000/userInfo',
//       method:'post',
//       data:params

//     })
//   }
// }
  
// const code = ()=>{
//     return async (dispatch)=>{
//       await post({
//         url:"http://123.56.160.44:8080/user/sendMessage",
//         method:"post",
//         data,
//       }
//     }
// }

export default class message extends Component {
  constructor(){
    super();
    this.state={};
    this.onFinish = this.onFinish.bind(this);
  }

    // const [list,setList] = useState([])
    // const [value,setValue] = useState('')
    //   useEffect(() => {
    //     async function loadDate(){
    //       let result = await post(
    //         url:'http://123.56.160.44:8080/user/sendMessage',
    //         method:'post',
    //         data,
    //       )
    //     }
    //     setList (result.data)
    //     console.log(list)
    //   }
    //   loadDate()
    // },[])
    //   let searchArr = list.reduce((arr,item)=>{
    //     return arr.content(item.list)
    //   },[])

  // LoginClick=()=>{
  //   url:'http://123.56.160.44:8080/user/sendMessage',
  //   method:'post',

  // } 
  
 
  //  getcode=()=>{
  //  const result =post("http://123.56.160.44:8080/user/sendMessage");
  // }
    

    onFinish =  (values)=> {
    console.log('Received values of from:',values)
    };
  // 路由跳转
    handleClick=(props)=>{
      let history = this.props.history
      history.push('/register')
    };
 

  render() {
    return (
      <MessageWrap>
        <div className="from-content">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
              >
                <Form.Item  name="username"rules={[{ required: true, message: '请输入手机号!' }]}>
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号" />
                </Form.Item>
                <Form.Item name="password" 
                  rules={
                    [
                      { required: true, message: '请输入验证码!' }
                    ]
                  } 
                >
                  <Row gutter={13}>
                    <Col span={16}>
                      <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password"  placeholder="请输入验证码" />
                    </Col>
                    <Col span={8}>
                      <Button type="danger" onClick={this.getcode}>获取验证码</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Button onClick= {this.LoginClick} type="primary" htmlType="submit" className="login-form-button">
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
