import styled from 'styled-components'
import banner from '@a/images/banner_dog.png'
const HeaderWrap = styled.div`
    background:url(${banner}) no-repeat center top; 
    overflow-x:scroll;
    >div{
        width:1300px;
        height:546px;
        margin:0 auto;
        >ul{
            float:left;
            margin-right:214px;
            padding-top:30px;  
            li{
                float:left;
                margin-left:80px;
                font-family:MicrosoftYaHei;
                font-size:30px;
                color:#f4f4f4;
            }
        }
       .logo{
            float:left;
            width:204px;
            height:8px;
            padding-top:29px;
        }
        >div:last-child{
            float:right;
            width:89px;
            height:49px;
            padding-top:27px;
            >div:first-child{
                width:49px;
                float:left;
            }
            >div:last-child{
                line-height:49px;
                float:right;
                position: relative;
                .iconfont{
                    color:#a5a5a5;
                    font-size: 24px;
                }
                .dpNone{
                    display:none;
                }
                .dpBlock{
                    display:block;
                }
                >ul{
                    width:85px;
                    height:126px;
                    position: absolute;
                    right:7px;
                    top:64px;
                    li{
                        font-size:20px;
                        line-height:35px;
                        color:#a5a5a5;
                        &:hover{
                            color:#f5a64a;
                            border-bottom:1px solid #f5a64a;
                        }
                    }
                }
            }
        }
    }

`
export{
    HeaderWrap
}