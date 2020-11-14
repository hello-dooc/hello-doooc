import styled from 'styled-components'

import owncenter from '@a/images/showpets/owncenter.png'
import shaibg from "@a/images/showpets/shaibg.png"

const Container = styled.div`
    header{
        height:545px;
        background:url(${owncenter});
        position:relative;
        nav{
            position:absolute;
            bottom:0;
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
    }
    footer{
        /* height:730px; */
        height:640px;
        width:100%;
        background:url(${shaibg}) no-repeat;
    }
    
    .contain{
        height:2373px;
        width:1305px;
        margin:0 auto;
    }

`

export {
    Container,

}