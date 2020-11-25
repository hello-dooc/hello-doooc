import styled from 'styled-components'

import bg from '@a/images/Trainning/TrFooter.png'

const Container = styled.div`
    .con{
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
            width:1300px;
            margin:0 auto;
            height:663px;
            position: relative;
            .petsItem{
                position: absolute;
                .petsText{
                    width:100%;
                    background-color:rgba(0,0,0,0.4);
                    color:#fff;
                    padding: 0 35px;
                    font-size:16px;
                    font-family:SimSun;
                    position: absolute;
                    bottom:10px;
                }
            }
            >div{
                &:nth-child(1){
                bottom:0;
                left:0;
                z-index:1
                }
                &:nth-child(2){
                    bottom:0;
                    left:264px;
                    z-index:5;
                }
                &:nth-child(3){
                    bottom:0;
                    left:480px;
                    z-index:3;
                }
                &:nth-child(4){
                    bottom:0;
                    left:778px;
                    z-index:1
                }
                &:nth-child(5){
                    bottom:0;
                    right:0px;
                    z-index:5;
                }
            }
        }
        
        .news{
            height:1435px;
            width:1300px;
            margin:0 auto;
            padding-top:20px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            .newsItem{
                display:flex;
                flex-direction:row;
                justify-content:space-around;
                dl{
                    display:flex;
                    flex-direction:column;
                    padding-top:70px;
                    font-size:24px;
                    font-family:SimSun;
                    width:500px;
                    dd{
                        font-size:30px;
                    }
                    dt{
                        padding-top:60px;
                        font-size:18px;
                        line-height:35px;
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