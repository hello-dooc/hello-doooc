import styled from 'styled-components'
import lgimg from '@a/images/login.jpg'

const Container = styled.div `

  background:url(${lgimg})  no-repeat;
  background-size:100% 100%;
  backgroound-attachment:fixed;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
`
const LoginWrap = styled.div `
  .header{
    width:555px;
    height:676px;
    background:#ccc;
    opacity:0.6;
    position:absolute;
    top:20%;
    left:60%;
    .top{
      font-size:26px;
      color:#fff;
      line-height:22px;
      width:414px;
      margin:0 auto;
      height:100px;
      padding-top:78px;
      ul{
        padding:30px 30px 0 30px;
        position:relative;
        .selected{
          text-decoration:underline;
        }
        li{
          width:177px;
          text-align:center;
          font-size:18px;
          line-height:18px;
          float:left;
          }
        }
      
        
      }
    }
  }
  .content{
    margin-top:60px;
    line-height:40px;
    
  }
`

const EmailWrap = styled.div `
  .login-form{
    width:414px;
    margin:0 auto;
    Input{
      border:none;
      border-bottom:1px solid #ccc;
      margin-bottom:15px;
    }
    div{
      margin 0 auto;
      width:350px;
      Input{
        width:300px;
        height:30px;
      }
      button{
        display:inline;
        width:350px;
        height:30px;
      }
      span{
        cursor:pointer;
      }
    }
  } 
}
`

const MessageWrap = styled.div `
.login-form{
  width:414px;
  margin:0 auto;
  Input{
    border:none;
    border-bottom:1px solid #ccc;
    margin-bottom:15px;
  }
  div{
    margin 0 auto;
    width:350px;
    Input{
      width:300px;
      height:30px;
    }
    button{
      display:inline;
      height:53px;
      width:116px;
    }
    .ant-btn > .anticon + span, .ant-btn > span + .anticon{
      margin-left:0;
    }
    .ant-btn-primary{
      width:350px;
      height:30px;
    }
    span{
      cursor:pointer;
    }
    .ant-btn ant-btn-danger{
      width:116px;
    }
  }
} 
}

`

export {
  Container,
  LoginWrap,
  EmailWrap,
  MessageWrap
}