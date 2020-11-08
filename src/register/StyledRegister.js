import styled from 'styled-components'
import rgimg from '@a/images/WeChat.jpg'

const Container = styled.div`
background:url(${rgimg})  no-repeat;
background-size:100% 100%;
backgroound-attachment:fixed;
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
`

const RegisterWrap = styled.div`
.rgwrap{
  width:555px;
  height:676px;
  background:#ccc;
  opacity:0.6;
  position:absolute;
  top:20%;
  left:60%;
  .rgtop{
    font-size:26px;
    color:#fff;
    line-height:22px;
    width:414px;
    margin:0 auto;
    height:100px;
    padding-top:78px;
  }
  .rgcontent{
    width:414px;
    margin:0 auto;
    Input{
      border:none;
      border-bottom:1px solid #ccc;
      margin-bottom:15px;
    }
    .ant-input-affix-wrapper{
      display:block;
      width:400px;
      .anticon anticon-user site-form-item-icon{
        display:block;
        widtth:30px;
        height:30px;
        svg{
          width:2em;
          height:2em;
        }
      }
      input{
        width:280px;
        height:30px;
      }
      button{
        display:inline;
        width:320px;
        height:30px;
      }
    }
    
  }
}
`

export {
  Container,
  RegisterWrap
}