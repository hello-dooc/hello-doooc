import styled from 'styled-components'
import img14 from '@a/images/li_03.gif'
import nav_bg from '@a/images/Trainning/nav_03.png'


const TitWrap = styled.div`
    height:62px;
    background:#f5a64a;
    .tit_wrap{
        width:1300px;
        margin:0 auto;
        position: relative;
        >ul{
            >li{
                float:left;
                font-size:30px;
                color:#131313;
                width:157px;
                line-height:62px;
                padding-left:37px;
                background:url(${nav_bg}) no-repeat left center;
            }
        }
        .tit_left{
            float:left;
        }
        .tit_right{
            float:right;
        }
        >div{
            float:left;
            width:210px;
            height:210px;
            border-radius:100%;
            background:#faf6f5;
            position: absolute;
            left:542px;
            top:-116px;
            >p{
                text-align:center;
                color:#131313;
                &:first-child{
                    font-size:48px;
                    line-height:48px;
                    margin:27px 0  20px 0;
                }
                &:nth-of-type(2){
                    font-size:30px;
                    line-height:30px;
                    margin-bottom:23px;
                }
            }
            >img{
                margin:0 auto;
            }
        }
    }
`
const Container = styled.div`
    background-color:#fff;
`
const AnswerWrap = styled.div`
    width:1308px;
    margin:0 auto;
    
    .doctor{
        text-align:center;
        margin-top:157px;
        margin-bottom:70px;
        h1{
            font-size:34px;
            line-height:34px;
            font-weight:normal;
        }
        h3{
            text-align:center;
            font-size:20px;
            font-weight:normal;
            text-align:center;
            margin-top:48px;
        }
    }
    .expert{
        h2{
            text-align:left;
            font-size:26px;
            line-height:26px;
            font-weight:normal;
            padding-left:23px;
            margin-bottom:90px;
        }
        .imgWrap{
            width:1178px;
            height:570px;
            margin:0 auto;
            ul{
                li{
                    float:left;
                    width:294px;
                    height:284px;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit:cover;
                    }
                }
            }
        }
    }
    .question{
        margin-top:70px;
        height:760px;
        h3{
            font-size:22px;
            text-align:left;
            padding-left:38px;
        }
        ul{
            li{
                display:block;
                background:url(${img14}) no-repeat 60px 36px;
                text-align:left;
                padding-top:46px;
                font-size:24px;
                line-height:24px;
                span{
                    padding-left:138px;
                }
                p{
                    display:block;
                    margin-top:32px;
                    padding-left:150px;
                    padding-bottom:56px;
                    border-bottom:2px dashed #d5d5d5;
                }
            }
        }
        
    }
    .hospital{
        height:494px;
        padding-top:70px;
        h3{
            font-size:22px;
            line-height:22px;
            text-align:left;
            padding-left:36px;

        }
        ul{
            margin-top:130px;
            li:first-child{
                padding-left:105px;
            }
            li{
                float:left;
                word-break:break-all; 
                margin-right:54px;
                div:first-child{
                    width:120px;
                    height:100px;
                    float:left;
                    margin-right:26px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                div:last-child{
                    width:200px;
                    font-size:16px;
                    line-height:24px;
                    float:right;
                    text-align:center;
                    padding-top:14px;
                }
            }
           
        }
    }
    
`
export {
    Container,
    AnswerWrap,
    TitWrap
}