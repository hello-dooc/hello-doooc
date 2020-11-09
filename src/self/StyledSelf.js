import styled from 'styled-components';
import footer_banner from '@a/images/footer_banner_03.png'
const SelfInfoWrap=styled.div`
    .self-wrap{
        width:864px;
        margin:72px 0 0 217px;
        height:1096px;
        .ant-upload-select{
            margin-left:50%;
        }
        .ant-form{
            margin-left:145px
        }
    }
    #link{
        background:url(${footer_banner}) no-repeat;
    }
`
const UserInfoWrap=styled.form`
    margin:40px 0 0 122px;
    font-size:24px;
    color:#595959;
    >label{
        display:block;
        margin-bottom:40px;
        >span{
            display:inline-block;
            width:104px;
            text-align:right;
            margin-right:20px;
        }
        >button{
            margin-left:10px;
        }
        >input{
            border:1px solid #ccc;
            padding-left:10px;
        }
    }
    >div{
        >button{
            &:first-child{
                margin:0 40px;
            }
        }
    }
`
export{
    SelfInfoWrap,
    UserInfoWrap
}