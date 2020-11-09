import styled from 'styled-components'

import no_display from '@a/images/no_display_02.png'
import pet_down from '@a/images/pet_down_03.png'
import display_up from '@a/images/display_up_03.png'
import display_bg from '@a/images/display_bg_01.png'
import pet_bg from '@a/images/pet_bg_02.png'
import shoppingCart from '@a/images/shoppingCart_04.png'
import bg from '@a/images/bg.png'
import detail_bg from '@a/images/detail_bg_03.png'

const PetWrap = styled.div`
    height:837px;
    &::before{
        content:'';
        width:100%;
        height:100%;
        position:absolute;
        z-index:-1;
        background:url(${no_display}) no-repeat;
        background-size:cover;
        filter: blur(30px);
    }
    #dog_bg{
        background:url(${display_bg}) no-repeat;
    }
    .cat-wrap{
        width:1300px;
        height:741px;
        margin:0 auto;
        background:url(${no_display}) no-repeat;
    }
    .dog-wrap{
        width:1300px;
        height:734px;
        margin:0 auto;
    }
    #link{
        background:#4c4c4c;
    }
`
const FilterUpWrap = styled.ul`
    >span{
        display:block;
        background:#f6feff;
        width:100%;
        height:1px;
    }
    >li{
        height:40px;
        width:100%;
        background:rgba(250,209,161,.6);
        line-height:40px;
        padding-left:16px;
        font-size:13px;
        color:#000;
        &:first-child{
            height:56px;
            line-height:56px;
            background:rgba(252,234,213,.6);
            >span{
                &:first-child{
                    margin-right:11px;
                } 
                &:last-child{
                    margin-left:9px;
                }
            }
        }
        &:nth-child(2){
            >span{
                margin-right:20px;
            }
        }
        &:last-child{
            font-size:15px;
            text-align:right;
            span{
                &:last-child{
                    display:inline-block;
                    width:8px;
                    height:5px;
                    background:url(${pet_down}) no-repeat;
                    margin:0 36px 0 11px;
                }
            }
        }
    }
`
const FilterWrap = styled.ul`
    >span{
        display:block;
        background:#f6feff;
        width:100%;
        height:1px;
    }
    >li{
        height:40px;
        width:100%;
        background:#d89c4e;
        line-height:40px;
        padding-left:16px;
        font-size:13px;
        color:#000;
        &:first-child{
            height:56px;
            line-height:56px;
            background:none;
            >span{
                &:first-child{
                    margin-right:11px;
                } 
                &:last-child{
                    margin-left:9px;
                }
            }
        }
        &:nth-child(2){
            >span{
                margin-right:20px;
            }
        }
        &:nth-child(4){
            >span{
                float:left;
                &:first-child{
                    margin-right:113px;
                }
                &:nth-child(2){
                    margin:0 116px 0 91px;
                }
                &:nth-child(3){
                    margin-left:89px;
                }
            }
            >div{
                margin-right:36px;
                >span{
                    &:last-child{
                        display:inline-block;
                        width:8px;
                        height:5px;
                        background:url(${pet_down}) no-repeat;
                        margin:0 36px 0 11px;
                    }
                }
            }
        }
        &:last-child{
            font-size:15px;
            text-align:center;
            background:#fdc98c;
            height:35px;
            line-height:35px;
            span{
                &:last-child{
                    display:inline-block;
                    width:8px;
                    height:4px;
                    background:url(${display_up}) no-repeat;
                    margin:15px 36px 0 11px;
                }
            }
        }
    }
    .classify{
        height:244px;
        background:rgba(248,214,174,.6);
        >ul{
            height:100%;
            border-right:1px solid #fff;
            padding-top:12px;
            >li{
                height:33px;
                font-size:13px;
                color:#000;
                line-height:33px;
            }
        }
        .pet_variety{
            width:182px;
            padding-left:17px;
            overflow-y:auto;
        }
        .pet_sex{
            width:167px;
            padding-left:91px;
        }
        .pet_age{
            width:250px;
            padding-left:90px;
        }
    }
`
const DisplayWrap = styled.div`
    background:url(${pet_bg}) no-repeat;
    .display-wrap{
        width:1300px;
        height:1678px;
        margin:0 auto;
        h2{
            height:120px;
            text-align:center;
            line-height:120px;
            color:#444341;
            font-size:48px;
            font-weight:bold;
        }
        .display_img{
            .pet_display{
                height:906px;
                overflow:hidden;
                .pet_box{
                    width:1350px;
                    height:980px;
                    .pet{
                        width:400px;
                        height:400px;
                        margin:0 50px 74px 0;
                        background:#bfbfbf;
                        float:left;
                        padding:16px 0 0 16px;
                        >img{
                            width:370px;
                            height:312px;
                        }
                        >.pet_detail{
                            .pet_price{
                                height:73px;
                                width:100px;
                                line-height:73px;
                                font-size:18px;
                                color:#f64672;
                                margin-left:23px;
                            }
                            .pet_type{
                                text-align:center;
                                line-height:27px;
                                font-size:16px;
                                color:#444341;
                                padding-top:8px;
                            }
                            >span{
                                float:right;
                                width:27px;
                                height:27px;
                                background:url(${shoppingCart}) no-repeat;
                                margin:27px 22px 0 0;
                            }
                        }
                    }
                }
            }
            .page{
                width:284px;
                height:51px;
                margin:20px auto 0;
                >span{
                    display:block;
                    float:left;
                    width:132px;
                    height:51px;
                    line-height:51px;
                    text-align:center;
                    background:#f5a64a;
                    font-size:24px;
                    color:#ff8900;
                    &:first-child{
                        margin-right:20px;
                    }
                }
            }
        }
        .display_video{
            padding-top:25px;
            height:518px;
            overflow:hidden;
            .pet_video{
                overflow:hidden;
                .petVideo{
                    width:1350px;
                    .video_box{
                        width:400px;
                        height:386px;
                        background:#bfbfbf;
                        padding-top:15px;
                        margin-right:50px;
                        >video{
                            width:370px;
                            height:300px;
                            margin:0 15px;
                        }
                        .video_desc{
                            height:65px;
                            margin:0 auto;
                            text-align:center;
                            font-size:15px;
                            color:#4c4b49;
                            line-height:26px;
                            padding-top:9px;
                        }
                    }
                }
            }
        }
    }
`
const ScreenWrap = styled.div`
    .screen-wrap{
        width:1300px;
        margin:0 auto;
        background:url(${bg}) no-repeat;
        background-size:cover;
        .petForSale{
            >h2{
                margin:0 auto; 
                width:404px;
                font-size:46px;
                color:#444341;
                font-weight:bold;
                padding:52px 0 70px;
                text-align:center;
                line-height:46px;
            }
            .pet_img{ 
                width:404px;
                margin:0 auto;
                .img_box{
                    width:400px;
                    height:400px;
                    padding:15px 0 0 15px;
                    background:#bfbfbf;
                    margin-bottom:74px;
                    >img{
                        width:370px;
                        height:312px;
                    }
                }
            }
            .detail_box{
                width:753px;
                height:478px;
                margin:0 auto;
                background:url(${detail_bg}) no-repeat;
                padding:21px 0 0 149px;
                >h3{
                    font-size:30px;
                    color:#0e0d0e;
                    line-height:30px;
                    margin-bottom:45px;
                    padding-left:12px;
                }
                >p{
                    font-size:24px;
                    color:#000;
                    line-height:29px;
                    margin-bottom:38px;
                    padding-left:12px;
                }
                >div{
                    font-size:24px;
                    color:#000;
                    margin-bottom:45px;
                    padding-left:12px;
                    >span{
                        &:nth-child(2){
                            font-size:24px;
                            color:#ff3366;
                        }
                    }
                }
                >ul{
                    width:406px;
                    height:194px;
                    li{
                        color:#0d0c0c;
                        font-size:18px;
                        padding-left:12px;
                        &:nth-child(2n-1){
                            height:25px;
                            background:#e5cbad;
                            line-height:25px;
                            
                        }
                        &:nth-child(2n){
                            height:61px;
                            line-height:61px;
                        }
                        >span{
                            margin-left:32px;
                        }
                    }
                }
            }
            .buy_process{
                width:755px;
                height:412px;
                background:url(${detail_bg}) no-repeat;
            }
        }
    }
`



export{
    PetWrap,
    FilterWrap,
    DisplayWrap,
    FilterUpWrap,
    ScreenWrap
}