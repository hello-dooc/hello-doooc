import styled from 'styled-components';

const SelfInfoWrap=styled.div`
    .self-wrap{
        width:864px;
        margin:72px 0 0 217px;
        height:1096px;
        .ant-descriptions-row{
            width:100%;
            .ant-descriptions-item-label{
                width:144px;
                font-size:24px;
                color:#595959;
                text-align:right;
                &::after{
                    content:'';
                }
            }
            .ant-descriptions-item-content{
                font-size:24px;
                color:#595959;
                text-align:center;
            }
            &:first-child{
                .ant-descriptions-item-content{
                    border-right:none;
                    >img{
                        margin:0 auto;
                        width:100px;
                        height:100px;
                        border-radius:100%;
                    }
                }
            }
            &:nth-child(2){
                width:100%;
                .ant-descriptions-item-content{
                    text-align:center;
                }
            }
            &:last-child{
                .ant-descriptions-item-content{
                    text-align:left;
                    >span{
                        width:509px;
                        float:left;
                    }
                    >button{
                        display:block;
                        float:right;
                    }
                }
            }
        }
    }
`
export default SelfInfoWrap