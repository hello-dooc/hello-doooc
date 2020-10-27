import styled from 'styled-components' 

const FooterWrap = styled.div`
    background:#2c2c2c;
    .footer-wrap{
        width:1300px;
        margin:0 auto;
        height:124px;
        color:#fefefe;
        font-size:14px;
        >div{
            margin:0 auto;
            &:first-child{
                width:372px;
                padding:29px 0 19px;
                line-height:15px;
                >ul{
                    li{
                        height:15px;
                        border-right:1px solid #fefefe;
                        float:left;
                        padding:0 8px;
                    }
                }
            }
            &:nth-child(2){
                width:1000px;
                line-height:15px;
                margin-bottom:19px;
                >ul{
                    margin-right:8px;
                    float:left;
                    li{
                        height:15px;
                        border-right:1px solid #fefefe;
                        float: left;
                        padding:0 8px;
                    }
                }
            } 
            &:last-child {
                width:460px;
            }
        }
    }
`
export default FooterWrap
