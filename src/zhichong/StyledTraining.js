import styled from 'styled-components'

import banConBg from '@a/images/Trainning/navBg_03.png'
import banBg from '@a/images/Trainning/banBg1px_03.png'
import bg from '@a/images/Trainning/TrFooter.png'


const Container = styled.div`
    .con{
        /* width:1300px;
        margin:0 auto; */

        /* header {
            height: 96px;
            line-height: 96px;
            text-align: center;
            font-size: 30px;
            background-color: #eeeeee;
        } */
        nav{
            width:1300px;
            margin:0 auto;
            height:60px;
            background-color:#f5a64a;
            display:flex;
            ul{
                height:60px;
                flex:1;
                display:flex;
                justify-content:space-around;
                align-items: center;
                li{
                    height:60px;
                    line-height:60px;
                    font-size:20px;
                    img{
                        height:20px;
                        width:20px;
                        margin-right:15px;
                        display:inline-block;
                    }
                }
            }
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
            background:url(${banBg});
            .banCon{
                height:810px;
                max-width:1300px;
                margin:0 auto;
                background:url(${banConBg}) no-repeat;
                background-size:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                div{
                    padding:72px;
                    h2{
                        height:40px;
                        line-height:40px;
                        font-size:40px;
                    }
                    h3{
                        height:30px;
                        line-height:30px;
                        font-size:30px;
                    }
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