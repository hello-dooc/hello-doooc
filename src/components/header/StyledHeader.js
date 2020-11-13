import styled from 'styled-components'
// import banner from '../../assets/images/banner_dog.png'
// import banner from '@a/images/banner.jpeg'
const HeaderWrap = styled.div`
    background:${props => props.bg.charAt(0) === "#" ? props.bg : ''}
    url(${props => props.bg})no-repeat center top;
    width: 100%;
    height: ${props => props.ht};
    >div{
        width:1300px;
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
                color:${props => props.color};
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
                    z-index:5;
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
const HeaderNoBgWrap = styled.div` 
    width:1300px;
    height:94px; 
    margin:0 auto;
    >ul{
        float:left;
        margin-right:214px;
        padding-top:30px;  
        li{
            float:left;
            margin-left:80px;
            font-size:30px;
            color:#686868;
            &:hover{
                color:#f5a64a;
            }
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
                z-index:5;
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
`
const RelevantWrap = styled.div`
    .relevant{
        background-color:#f5a64a;
        width:100%;
        height:60px;
        .centerWrap{
            width:1308px;
            height:60px;
            margin:0 auto;
            position:relative;
            .r-left{
                ul{
                    padding-left:9px;
                    li{
                        img{
                            float:left;
                            margin-right:18px;
                        }
                        float:left;
                        font-size:26px;
                        line-height:26px;
                        padding-top:20px;
                        padding-right:33px;
                    }
                }
            }
            .r-center{
                position:absolute;
                left:543px;
                top:-107px;
            }
            .r-right{
                ul{
                    padding-right:9px;
                    float:right;
                    li{
                        float:left;
                        font-size:26px;
                        line-height:26px;
                        padding-top:20px;
                        padding-left:33px;
                        img{
                            float:left;
                            padding-right:18px;
                        }
                    }
                }
            }
        }
    }
`
export{
    HeaderWrap,
    HeaderNoBgWrap,
    RelevantWrap
}
