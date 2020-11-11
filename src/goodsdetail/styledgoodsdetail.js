import styled from 'styled-components'
import bgImage from "@a/images/buyhome/bg.png"
import detailbg from "@a/images/buyhome/scbg.png"

const Container = styled.div`
    header{
        height:96px;
        background:pink;
    }
    footer{
        /* height:730px; */
        height:640px;
        width:100%;
        background:url(${detailbg});
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
        .detail-box{
            width:723px;
            height:523px;
            background:rgba(252,242,231,.7);
            box-shadow:0 10px 30px #888888;
        }
    }
    

`


const DetailMiddleWrap = styled.div `
.left-box{
    float:left;
    width:14px;
    height:32px;
    padding-top:172px;
    margin-left:27px;
    margin-right:22px;
    span{
        display:block;
        width:0;
        height:0;
        border-top:14px solid transparent;
        border-bottom:14px solid transparent;
        border-right:14px solid #f5a64a;
        &:hover{
            cursor:pointer;
        }
    }
}
.middle-box{
    float:left;
    width:272px;
    height:346px;
    padding-top:74px;
    margin-right:50px;
    img{
        display:block;
        width:100%;
        height:100%;
    }
}
.right-box{
    float:left;
    width:194px;
    h1{
        font-size:10px;
        line-height:10px;
        padding-top:25px;
    }
    h2{
        font-size:10px;
        line-height:10px;
        padding-top:16px;
        margin-left:14px;
        margin-bottom:10px;
    }
    h3{
        font-size:10px;
        width:190px;
        line-height:12px;
        word-wrap: break-word;
        margin-bottom:104px;
    }
    ul{
        width:192px;
        li{
            width:192px;
            height:12px;
            margin-bottom:10px;
            span{
                float:left;
                font-size:10px;
                line-height:12px;
                margin-right:10px;
                height:12px;
                width:42px;
                display:block;
                text-align-last:justify;
            }
            span:nth-child(2){
                text-align-last:left;
            }
        }
        li:nth-child(2n-1){
            background:#f5a64a;
        }
    }



`
export {
    Container,
    DetailMiddleWrap
}
