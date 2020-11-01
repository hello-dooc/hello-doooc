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
    main{
        width:1300px;
        margin:0 auto;
        .category{
            height:658px;
            display:flex;
            ul{
                width:200px;
                text-align:center;
            }
        }
        .recommend{
            height:439px;
            width:864px;
            margin:0 auto;
            text-align:center;
            background-color:#eee;
            .shopLike{
                display:flex;
                justify-content:space-between;
                div{
                    padding:65px 0;
                    img{
                        width:164px;
                        height:218px;
                    }
                }
            }
        }
    }
    footer{
        height: 607px;
        background:url(${bg}) no-repeat;
        background-size:100%
    }
`

export {
    Container,
  }