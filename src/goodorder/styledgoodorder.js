import styled from 'styled-components'
import bgImage from "@a/images/buyhome/bg.png"

const Container = styled.div`
    header{
        height:96px;
        background:pink;
    }
    footer{
        height:730px;
        width:100%;
        background:#000;
    }
    .detail-con{
        min-height:732px;
        background:url(${bgImage});
        .detail-wrap{
            width:1300px;
            margin:0 auto;
            min-height:732px;
            padding-top:75px;
        }
    }
    .detail-left{
        float:left;
        width:112px;
        height:106px;
        img{
            display:block;
            width:100%;
            height:100%;
        }
    }
    .detail-middle{
        float:left;
        padding-top:8px;
        margin:0 73px 0 48px;
        span{
            display:block;
            width:60px;
            height:30px;
            border-bottom:2px solid #f5a64a;
            font-size:12px;
            text-align:center;
            line-height:30px;

        }
    }
    .detail-right{
        float:left;
        width:835px;
        height:578px;
        background:rgba(249,208,164,.6);
        padding:30px 56px;
        position:relative;
        .detail-box{
            width:723px;
            height:523px;
            background:rgba(252,242,231,.7);
            box-shadow:0 10px 30px #888888;
        }
    }
    .left-box{
        width:14px;
        height:32px;
        position:absolute;
        left:15px; top:218px;
        span{
            display:block;
            width:0;
            height:0;
            border-top:14px solid transparent;
            border-bottom:14px solid transparent;
            border-right:14px solid #444341;
        }
    }


`

const OrderDetailWrap = styled.div`
    height:300px;
    padding:30px 56px;
    .select-lo{
        font-size:14px;
        span{
            padding-right:15px;
        }
        p{
            margin-bottom:10px;
        }
    }
    .select-ad{
        float:left;
        line-height:30px;
    }
    .search-item{
        float:left;
        margin-left:10px;
    }


    .ant-select ant-select-single,.ant-select-show-arrow{
        height:18px;
        line-height:18px;
        .ant-select-selector{
            background:#f5a64a;
            height:18px;
            line-height:18px;
            color:#000;
            .ant-select-selection-search-input{
                height:18px;
                line-height:18px;
            }
        }
        .ant-select-selection-item{
            height:18px;
            line-height:18px;
            font-size:10px;
        }
    }

    .good-detail{
        width:590px;
        margin-top:40px;
        padding-top:20px;
        .img-box{
            float:left;
            width:273px;
            height:273px;
            margin-right:50px;
            img{
                display:block;
                width:100%;
                height:100%;
            }
        }
    }

    .right-box{
        height:276px;
        width:267px;
        float:left;
        h1{
            float:left;
            font-size:20px;
            line-height:22px;
            width:116px;
            height:44px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    .prinum{
        float:right;
        text-align:right;
        h2{
            font-size:20px;
            line-height:22px;
        }
        h3{
            font-size:20px;
            line-height:22px;
        }
    }
    .select-num{
        padding-top:30px;
        width:267px;
        height:22px;
        float:left;
        p{
            font-size:20px;
            line-height:22px;
            width:100px;
            height:22px;
            float:left;
        }
        .button-num{
            background:pink;
            height:22px;
            width:88px;
            float:right;
            .ant-input-number{
                height:22px;
            }
            .ant-input-number-input {
                height:22px;
                line-height:22px;
            }
        }
    }
    .count-box{
        width:267px;
        float:left;
        padding-top:50px;
        display:flex;
        p{
            margin-right:10px;
            font-size:18px;
            line-height:22px;
        }
        p:nth-child(3){
            background:#f5a64a;
            padding:3px;
            border-radius:3px;
        }
    }
`

export {
    Container,
    OrderDetailWrap
}