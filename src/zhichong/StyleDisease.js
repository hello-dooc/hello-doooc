import styled from 'styled-components'

import ball_line from '@a/images/ball_line_03.jpg'
import cat_img from '@a/images/cat_disease_03.jpg'
import news_dog from '@a/images/news_dog_03.png'

const DiseaseWrap = styled.div`
    .dis-wrap{
        width:1300px;
        margin:98px auto 0;
        >p{
            text-align:center;
            line-height:63px;
            &:first-child{
                font-size:30px;
                color:#323232;
            }
            &:nth-of-type(2){
                font-size:30px;
                color:#323232;
            }
        }
        .dog_disease{
            height:465px;
            margin-top:61px;
            .dog_left{
                background:#f0f4fd;
                height:100%;
                width:846px;
                .dog_container{
                    width:420px;
                    height:342px;
                    margin:61px 0 0 189px;
                    background:url(${ball_line}) no-repeat left center;
                    padding-left:58px;
                    >li{
                        font-size:30px;
                        color:#f5a64a;
                        line-height:38px;
                        margin-bottom:38px;
                    }
                }
            }
            .dog_img{
                width:415px;
                height:100%;
                padding:22px 0 0 38px;
                h3{
                    font-size:30px;
                    color:#131313;
                    line-height:30px;
                    margin-bottom:92px;
                    padding-left:10px;
                }
            }
        }
        .cat_disease{
            height:467px;
            margin-top:58px;
            .cat_img{
                width:432px;
                height:100%;
                background:url(${cat_img}) no-repeat;
                >h3{
                    text-align:right;
                    font-size:30px;
                    color:#131313;
                    line-height:30px;
                    padding:20px 20px 0 0;
                }
            }
            .cat_left{
                width:847px;
                height:100%;
                background:#f0f4fd;
                padding:64px 0 0 184px;
                .cat_container{
                    height:342px;
                    background:url(${ball_line}) no-repeat left center;
                    padding-left:58px;
                    >li{
                        font-size:30px;
                        color:#f5a64a;
                        line-height:38px;
                        margin-bottom:38px;
                    }
                }
            }
        }
        .dog_news{
            height:773px;
            margin-top:69px;
            background:#fcf7f4 url(${news_dog}) no-repeat 806px 194px;
            padding: 27px 0 0 26px;
            >h3{
                font-size:30px;
                color:#080202;
                line-height:30px;
                margin-bottom:110px;
            }
            >ul{
                li{
                    font-size:30px;
                    color:#080202;
                    line-height:51px;
                }
            }
        }
    }
`

export {
    DiseaseWrap
}