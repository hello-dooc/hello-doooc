import styled from 'styled-components'

import bg from '@a/images/best.jpg'

const Container = styled.div `
    header {
        height: 96px;
        line-height: 96px;
        text-align: center;
        font-size: 30px;
        background-color: #eeeeee;
    }
    .nav{
        width:1300px;
        margin:0 auto;
        .search{
            height:106px;
            line-height:106px;
        }
        .ant-breadcrumb{
            height:43px;
            line-height:43px;
        }
        .classification{
            li{
                height:38px;
                line-height:38px;
                background-color:#f5a64a;
                display:flex;
                padding-left:16px;
                span{
                    padding-left:20px;
                }
            }
            li:nth-child(even){
                background-color:#fdc98c;
            }
        }
        .priceSort{
            height:57px;
            margin-top:10px;
            background-color:#fdc98c;
            line-height:57px;
            display:flex;
            padding-left:16px;
            li{
                padding-left:20px;
            }
        }
    }
    .goods{
        width:1300px;
        margin:0 auto;
        .goodsList{
            /* height:1047px; */
            min-height:330px;
            display:flex;
            flex-wrap:wrap;
            justify-content:start; 
            column-count:5;
            column-gap:50px;
            align-content:space-between; 
            .oneGood{
                margin-bottom:30px;
                height:330px;
                width:220px;
                padding-top:20px;
                background-color:#eee;
                /* border:1px solid #eeeeee; */
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                img{
                    height:151px;
                    width:161px;
                    margin:0 auto;
                }
                div{
                    width:185px;
                    margin:0 auto;
                    display:flex;
                    font-size:12px;
                    color:#ccc;
                    display: flex;
                    justify-content:space-between;
                    h2{
                        height:16px;
                        line-height:16px;
                        font-size:12px;
                        background-color:#ff3366;
                        color:#fff;
<<<<<<< HEAD
                        padding:0 3px;
=======
                        /* padding:0 3px; */
>>>>>>> master
                    }
                    h3{
                        font-size:12px;
                        color:#ff3366;
                        font-weight:600;
                    }
                    p{
                        width:115px;
                    }
                }
            }
        }
        .ant-pagination{
            height:94px;
            display:flex;
            justify-content:flex-end;
            align-items:center;
        }
    }
    #link{
        background:url(${bg}) no-repeat;
        /* background-size:100% */
    }
`

export {
    Container,
  }