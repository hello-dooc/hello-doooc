import styled from 'styled-components';
import footer_banner from '@a/images/footer_banner_03.png'
const SelfInfoWrap=styled.div`
    .self-wrap{
        width:864px;
        margin:72px 0 0 217px;
        height:638px;
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
    width:800px;
    margin:0 auto;
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
            background:#fff;
            border:1px solid #ccc;
        }
        >input{
            display:inline-block;
            width:500px;
            border:1px solid #ccc;
            padding-left:10px;
        }
        .address_list{
            width:500px;
            border:1px solid #ccc;
            padding:10px 10px;
            .address_top{
                margin-bottom:5px;
                span{
                    float:left;
                    &:first-child{
                        margin-right:20px;
                    }
                }
            }
        }
        &:nth-of-type(2){
            >input{
                margin-top:10px;
                &:nth-of-type(2){
                    width:150px;
                }
            }
            >button{
                background:#fff;
                border:1px solid #ccc;
            }
        }
        &:nth-of-type(6){
            >button{
                display:inline-block;
                height:100px;
                background:#fff;
                border:1px solid #ccc;
                margin-left:0;
            }
        }
    }
    >div{
        width:310px;
        margin:0 auto;
        >button{
            &:first-child{
                margin-right:40px;
            }
        }
    }
`
export{
    SelfInfoWrap,
    UserInfoWrap
}