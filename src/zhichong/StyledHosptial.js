import styled from 'styled-components'

import banConBg from '@a/images/Trainning/navBg_03.png'
import banBg from '@a/images/Trainning/banBg1px_03.png'
import bg from '@a/images/Trainning/TrFooter.png'


const Container = styled.div`
    .con{
        nav{
            width:1300px;
            margin:0 auto;
            height:60px;
        }

        .train{
            height:295px;
            width:1300px;
            margin:0 auto;
            text-align:center;
            padding-top:105px;
            h2{
                height:24px;
                line-height:24px;
                font-size:24px;
                padding-bottom:40px;
            }
            h3{
                height:36px;
                line-height:36px;
                font-size:30px;
                font-family:Segoe Print;
            }
        }

        .banner{
           img{
               margin:0 auto
           }
        }

       /*  .box {
            width:600px;
            height:450px;
            margin:0 auto;
            overflow:hidden;
            div{
                width:10%;
                float:left;
                transition:all 1s;
                img{
                    cursor:pointer;
                }
                &:hover{
                    width:55%;
                }
            }
            &:hover{
                div{
                    width:5%;
                }
            }
        } */
        .box{
            box-sizing: content-box;
            width: 1300px;
            height: 740px;
            border:1px solid black;
            overflow:hidden;
            margin: 50px auto;
            &:hover{
                .item{
                    width:5%;
                }
            }
            .item{
                box-sizing: border-box;
                width: 10%;
                float:left;
                transition:all 1s;
                &:hover{
                    width:55%;
                }
            }
            img{
                width: 877px;
                height: 738px;
            }
        }

        .anli{
            margin: 0 auto;
            width:1300px;
            height:230px;
            img{
                width:100%;
                height:100%;
            }
        }
        .anli_content{
            height:433px;
            background:#f8f8f8;
            padding:40px;
            .content_box{
                margin:0 auto;
                width:1202px;
                height:348px;
                background:#fff;
                display:flex;
                justify-content:space-around;
                align-items:center;
                img{
                    display:block;
                    width:230px;
                    height:220px;
                }
            }
        }

        .bottom{
            margin:0 auto;
            width:1300px;
            height:442px;
            display:flex;
            justify-content:space-around;
            align-items:center;
            dl{
                width:217px;
                height:275px;
                dd{
                    width:219px;
                    height:152px;
                    margin-bottom:28px;
                }
            }
        }

        .news{
            height:790px;
            width:1300px;
            margin:0 auto;
            padding-top:20px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            dl{
                display:flex;
                padding:20px;
                font-size:24px;
                dt{
                    padding-left:75px;
                }
            }
        }

        .advisory{
            height:775px;
            width:1300px;
            margin:0 auto;
            border:1px solid #eaeaec;
            margin-bottom:35px;
            background-color:#faf6f5;
            .adHead{
                height:65px;
                line-height:65px;
                background-color:#f5a64a;
                h2{
                    margin-left:57px;
                    font-size:28px;
                    background-color:#faf6f5;
                    display: inline;
                    padding:5px 30px 15px;
                }
            }
            .adMain{
                display:flex;
                justify-content:space-around;
                padding-top:95px;
                div{
                    height:54px;
                    line-height:54px;
                    font-size:24px;
                    i{
                        padding-right:35px;
                        color:#f5a64a;
                    }
                }
            }
        }
        #link{
            background:url(${bg}) no-repeat;
            /* background-size:100% */
        }
    }
`

export {
    Container,
}