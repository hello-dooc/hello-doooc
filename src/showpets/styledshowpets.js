import styled from 'styled-components'

import owncenter from '@a/images/showpets/owncenter.png'


const Container = styled.div`
    header{
        height:545px;
        background:url(${owncenter});
    }
    footer{
        height:730px;
        width:100%;
        background:#000;
    }
    .contain{
        height:1203px;
        width:1300px;
        margin:0 auto;
    .middle{
        height:764px;
    }
    .left-nav{
        width:100px;
        height:153px;
        background:#ccc;
        float:left;
        padding-top:193px;
        margin-left:79px;
        margin-right:183px;
    }


    }

`
const YouLikeWrap = styled.div`
    height:386px;
    width:863px;
    margin:0 auto;
    .like-title{
        text-align:center;
        font-size:36px;
        line-height:36px;
        color:#f5a64a;
        margin-bottom:64px;
    }
    ul{
        width:863px;
        height:276px;
        display:flex;
        justify-content:space-between;
    }
    li{
        height:276px;
        width:164px;
    }
    .img-box{
        width:164px;
        height:220px;
        margin-bottom:6px;
        border-radius:3px;
        img{
            display:block;
            width:100%;
            height:100%;
        }
    }
    .good-name{
        font-size:12px;
        line-height:12px;
        margin-bottom:14px;
        text-align:center;
    }
    .good-price{
        font-size:18px;
        line-height:18px;
        text-align:center;
    }

`

const MyShowWrap = styled.div`
    float:left;
    width:576px;
    padding-top:60px;
    .imgbox{
        width:576px;
        height:607px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .topimg{
        width:244px;
        height:285px;
        background:#451;
        border-radius:10px;
        margin-bottom:38px;
        img{
            display:block;
            width:100%;
            height:100%;
        }
    }
    .button-box{
        width:194px;
        height:62px;
        margin:0 auto;
        padding-top:35px;
        display:flex;
        justify-content:space-between;
        .left-button{
            height:25px;
            width:72px;
            border:1px solid #6d6d6d;
            border-radius:3px;
            text-align:center;
            line-height:25px;
            color:#6d6d6d;
            font-size:14px;
        }
        .middle-box{
            width:25px;
            height:27px;
            color:#6d6d6d;
            font-size:14px;
        }
    }
`

export {
    Container,
    YouLikeWrap,
    MyShowWrap
}