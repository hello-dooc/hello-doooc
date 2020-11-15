import styled from 'styled-components'

import bg from '@a/images/best.jpg'

const Container = styled.div`
    /* header {
        height: 96px;
        line-height: 96px;
        text-align: center;
        font-size: 30px;
        background-color: #eeeeee;
    } */
    main{
        width:1300px;
        margin:0 auto;
        .category{
            height:850px;
            display:flex;
            .ant-tabs-nav-wrap{
                width:140px;
            }
            .ant-tabs-tab{
                /* width:100px; */
                font-size:24px;
            }
            .ant-tabs-tab:hover{
                color:#f8c486;
                .ant-tabs-tab-btn:hover{
                        color:#f8c486;
                }
            }
            .ant-tabs-tab-active{
                .ant-tabs-tab-btn{
                    color:#f8c486;
                }
               
            }
            .ant-tabs-ink-bar{
                background:rgba(0,0,0,0)
            }
        }
        .recommend{
            height:439px;
            width:864px;
            margin:0 auto;
            text-align:center;
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
    #link{
        
        background:url(${bg}) no-repeat;
        /* background-size:100% */
    }
`

const InfoForm = styled.div`
.ant-tabs-nav{
    .ant-tabs-nav-list{
        .ant-tabs-tab{
            font-size:20px;
        }
    }
}
`
export {
    Container,
    InfoForm
}