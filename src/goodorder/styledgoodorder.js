import styled from 'styled-components'
import bgImage from "@a/images/buyhome/bg.png"
import detailbg from "@a/images/buyhome/scbg.png"

const Container = styled.div`
    header{
        height:96px;
        
    }
    footer{
       /*  height:730px; */
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
    .detail-box{
        overflow-y:scroll;
    }

`

const OrderDetailWrap = styled.div`
    height:300px;
    padding:30px 56px;
    position:relative;
    button:focus{
        outline: none;
        border-color: transparent;
    }
    .sumprice{
        font-size:20px;
        p{
            background:#f5a64a;
            padding:5px;
            width:112px;
            border-radius:6px;
            float:right;
        }
    }
    select:focus{
        outline: none;
    }
    input:focus{
        outline: none;
    }
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
            width:150px;
            height:150px;
            margin-right:132px;
            img{
                display:block;
                width:100%;
                height:100%;
            }
        }
    }

    .right-box{
        height:230px;
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
        
        .count-box{
            clear:both;
            font-size:20px;
        }
    }

    .select-num{
        padding-top:30px;
        width:267px;
        height:75px;
        float:left; 
        p{
            font-size:20px;
            line-height:22px;
            width:100px;
            float:left;
        }
        .button-num{
            height:22px;
            width:96px;
            float:right;
            position:relative;
            .minus{
                width:22px;
                height:22px;
                text-align:center;
                position:absolute;
                z-index:1;
                left:0;
                background:#fff;
                border:none;
            }
            .putvalue{
                background:#f5a64a;
                border:none;
                width:96px;
                height:22px;
                text-align:center;
                position:absolute;
            }
            .add{
                width:22px;
                height:22px;
                text-align:center;
                position:absolute;
                z-index:1;
                right:0;
                border:none;
                background:#fff;
                &:focus{
                    outline: none;
                    border-color: transparent;
                }
            }
    }
  

`

export {
    Container,
    OrderDetailWrap
}