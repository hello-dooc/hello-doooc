import axios from 'axios'


// 短信登录接口
export function MessageLogin(data){
  axios.defaults.headers.common['token'] = 'token_12356'
  return axios({
    url:'http://123.56.160.44:8080/user/login',
    method:'post',
    data,
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
    }
  })
}



// 短信验证码接口
export function GetCode(data){
  // axios.defaults.headers.common['token'] = 'token_123'
  return axios({
    url:'http://123.56.160.44:8080/user/sendMessage',
    method:'post',
    data,
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
    }
  })
}

// 邮箱注册验证码
export function RegisterCode(data){
  return axios({
    // url:'http://10.9.27.150:8080/user/sendEmail',
    url:'http://123.56.160.44:8080/user/sendEmail',
    method:'post',
    data,
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
    }
  })
}

// 邮箱注册接口
export function RegisterInterface(data){
  axios.defaults.headers.common['token'] = 'token_12356'
  return axios({
    url:'http://123.56.160.44:8080/user/register',
    method:'post',
    data,
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
    }
  })
}



// 邮箱登录
export function EmailLogin(data){
  return axios({
    url:'http://123.56.160.44:8080/user/login2',
    method:'post',
    data,
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
    }
  })
}