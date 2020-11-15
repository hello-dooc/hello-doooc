import styled from 'styled-components'
import bgImage from "@a/images/buyhome/bg.png"
import scbg from "@a/images/buyhome/scbg.png"

const BuyBannerWrap = styled.div`
    height:525px;
    width:100%;  
    position:relative;
    p{
        margin-block-end: 0;
    }
    .banner_box {
        position:absolute;
        z-index:1;
        height:525px;
        background-color:pink;
        img {
            display:block;
            height:100%;
            width:100%;
            }
        }
    
        header {
            position:absolute;
            z-index:2;
            height:93px;
            width:100%;
            background-color:rgba(234,237,238,.6);
        }

        

`


const Container = styled.div`
    footer{
        /* height:730px; */
        height:640px;
        width:100%;
        background:url(${scbg});
    }

`
const AllGoodsWrap =styled.div`
    span{
        margin-bottom:0;
    }
    min-height:1851px;
    background:url(${bgImage});
    .foodbox{
        width:1301px;
        margin:0 auto;
    }
    .pets-title{
        padding-top:138px;
        span{
            display:flex;
            justify-content:center;
            align-items: center;
            font-size:39px;
            font-weight:bold;
            color:#7b7b7a;
            img{
                height:43px;
                width:57px;
            }
        }
        p{
            text-align:center;
            font-size:18px;
            color:#868686;
            margin-bottom:31px;
        }
    }
    .pet-food{
        min-height:273px;
        width:1301px;
        margin:0 auto;
        display:flex;
        justify-content:space-between; 
        .img-box{
            height:271px;
            width:232px;
            border:1px solid #f5a64a;
            position:relative;
            &:hover{
                span{
                    opacity:1;
                } 
            }
            img{
                display:block;
                width:100%;
                height:100%;
            }
            span{
                position:absolute;
                bottom:0;
                display:block;
                width:232px;
                height:30px;
                text-align:center;
                line-height:30px;
                font-size:16px;
                background:rgba(178,178,178,0.6);
                opacity:0;
                transition: all 1s;
                -webkit-transition:all 1s;
            }
        }
    }
    .commodilies{
        width:1301px;
        margin:0 auto;
        .pets-title{
            padding-top:126px;
            p{
                margin-bottom:48px;
            }
        }
    }
    .pet-commodilies{
        min-height:336px;
        display:flex;
        justify-content:space-between;
        .img-box{
            width:300px;
            height:336px;
            background:#fff;
            h1{
                width:300px;
                height:38px;
                font-size:15px;
                line-height:18px;
                word-break:break-all;
                margin-bottom:0;
            }
            span{
                display:block;
                font-size:15px;
                line-height:15px;
                color:#fd4671;
                font-weight:bold;
            }
            p{
                margin-bottom:0;
                width:300px;
                padding-top:7px;
                font-size:14px;
                line-height:14px;
                color:#b0b0b0;
                text-align:right;
            }
        }
        .topimg{
            width:300px;
            height:252px;
            background:#d4d2d2;
            padding:0 20px;
            margin-bottom:13px;
            img{
                display:flex;
                width:100%;
                height:100%;
            }
        }
    }

    .marketbox{
        width:1301px;
        margin:0 auto;
        .pets-title{
            padding-top:133px;
            p{
                margin-bottom:10px;
            }
        }
        .hot{
            margin-bottom:26px;
            width:1301px;
            height:34px;
            span{
                display:block;
                height:34px;
                padding-left:16px;
                font-size:34px;
                line-height:34px;
                font-style:italic;
                float:left;
            }
            img{
                display:block;
                width:24px;
                height:28px; 
                float:left;
                margin-left:14px;
            }
        }
    }
        .pet-market{
            min-height:369px;
            width:1301px;
            margin:0 auto;
            display:flex;
            justify-content:space-between;
            .imgbox{
                height:369px;
                width:282px;
                background:#fff;
                box-shadow:0 10px 30px #888888;
                .topimg{
                    width:282px;
                    height:294px;
                    padding:16px;
                }
                img{
                    display:block;
                    width:100%;
                    height:100%;
                }
                h1{
                    text-align:center;
                    font-size:30px;
                }
                span{
                    display:block;
                    width:84px;
                    height:22px;
                    background:#f5a64a;
                    border-radius:5px;
                    text-align:center;
                    line-height:22px;
                    font-size:18px;
                    margin-left:100px;
                }
            }
        }




`

 const BuySearchWrap = styled.div`
 .nav_box{
    position:absolute;
    z-index:2;
    top:93px;
    left:50%;
    margin-left:-650px;
    height:108px;
    width:1301px;
    background-color:rgba(233,240,248,.3);
    .search_box{
        display:flex;
        height:68px;
        .search{
            display:flex;
            width:370px;
            height:43px;
            background-color:rgba(233,240,248,.6);
            margin-top:25px;
            margin-left:436px;
            justify-content:center;
            align-items:center;
            padding-left:5px;
            span{
                width:321px;
                height:100%;
                line-height:43px;
                font-size:12px;
            }
            p {
                width:48px;
                height:43px;
                background:#f5a64a;
                text-align:center;
                padding-top:7px;
                margin-block-end: 0;
                svg{
                    width:24px;
                    height:24px;
                }
            }
        }
        .car{
            display:flex;
            width:114px;
            height:43px;
            background:#f5a64a;
            margin-top:25px;
            margin-left:298px;
            border-radius:4px;
            p{
                width:44px;
                height:43px;
                background-color:#d4d2d2;
                text-align:center;
                padding-top:5px;
                border-radius:4px;
                svg{
                    width:28px;
                    height:28px;
                }
            }
            span{
                width:69px;
                border-radius:0 4px px 0;
                border-left:1px solid #fff;
                text-align:center;
                line-height:43px;
                font-size:12px;
            }
        }
    }
    .menu_box{
        height:34px;
        width:100%;
        .menu{
            height:34px;
            li {
                float: left;
                color:#000;
                cursor: pointer;
                -webkit-transition: all .3s;
                transition: all .3s;
                position: relative;
                width:160px;
                height:34px;
                font-size:18px;
                /*  */line-height:34px;
                display:flex;
                justify-content:center;
                margin-right:98px;
                &:hover{
                    ul{
                        display:block;
                    }
                    em{
                        width: 0;   
                        height: 0;  
                        border-left: 10px solid transparent;
                        border-right: 10px solid transparent;
                        border-top: 10px solid #217AFF;
                    }
                    li{
                        background-color:rgba(247,251,251,.7);
                        font-size:14px;
                        img{
                            display:block;
                            width:16px;
                            height:16px;
                            margin-top:9px;
                            margin-right:4px;
                        }
                        &:hover{
                            background-color:#f5a64a;
                            color:#fff;
                        }
                    }
                }
                ul{
                    position: absolute;
                    top: 100%;
                    left: 0%;
                    width:160px;
                    height:34px;
                    display: none;
                    z-index: 1;
                    background-color: rgba(247,251,251,.7)
                    li{
                        width: 100%;
                        &:hover{
                            background-color:#f5a64a;
                        }
                    }
                }
            }
            .has-submenu{
                /* background:pink; */
                em{
                    display:block;
                    width: 0;   
                    height: 0;  
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-bottom: 10px solid #217AFF;
                }
            }
        }
        
        
    }
    


}

 
 `






export {
    Container,
    BuyBannerWrap,
    AllGoodsWrap,
    BuySearchWrap
}