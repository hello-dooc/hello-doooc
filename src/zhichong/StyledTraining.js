import styled from 'styled-components'

import banBg from '../assets/images/navBg_02.png'

const Container = styled.div`
    .con{
        /* width:1300px;
        margin:0 auto; */
        header {
            height: 96px;
            line-height: 96px;
            text-align: center;
            font-size: 30px;
            background-color: #eeeeee;
        }
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
                    }
                }
            }
        }
        .banner{
            height:810px;
            background:url(${banBg}) no-repeat;
            background-size:100%;
        }
    }
`

export {
    Container,
}