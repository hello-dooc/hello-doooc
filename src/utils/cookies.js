import cookies from 'react-cookies'
const token = "adminToken"

// 存储token
export function setToken(value){
  const expires = new Date()
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
  cookies.save(token,value,{expires})
  // cookies.save(token,value);
}

export function getToken(){
  return cookies.load(token)
}



// 邮箱登录后存储email名
export function setEmail(value){
  cookies.save("email",value);
}

