import styled from 'styled-components'
 
import sprite from '@a/images/sprite.png'
const FooterWrap = styled.div`
    .link-wrap{
        height:516px;
        margin:0 auto;
        padding-top:91px;   
        .logo{
            width:202px;
            height:160px;
            margin:0 auto;
            background:url(${sprite}) no-repeat -656px -60px;
        }
        >p{
            width:660px;
            font-size:14px;
            color:#fefefe;
            line-height:25px;
            text-align:center;
            margin:33px auto 0;
        }
        .link_way{
            width:156px;
            margin:0 auto;
            margin-top:39px;
            >span:first-child{
                display:inline-block;
                width:30px;
                height:36px;
                background:url(${sprite}) no-repeat -803px -241px;
                &:hover{
                    background:url(${sprite}) no-repeat -803px -298px;
                }
            }
            >span:last-child{
                display:inline-block;
                width:44px;
                height:36px;
                margin-left:82px;
                background:url(${sprite}) no-repeat -915px -241px;
                &:hover{
                    background:url(${sprite}) no-repeat -915px -305px;
                }
            }
        }
    }
`

export default FooterWrap
