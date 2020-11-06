import styled from 'styled-components'


import banner from '@a/images/footer_banner_03.png'
import add from '@a/images/add_bg_01.png'
import add_footer from '@a/images/add_footer_bg_02.png'
import back_left from '@a/images/back_left_03.png'

const AddressListWrap=styled.div`
    .address-list-wrap{
        width:864px;
        min-height:648px;
        margin:20px auto;
        font-size:24px;
        color:#595959;
        border:1px solid #ccc;
        .list_top{
            border-bottom:1px solid #ccc;
            padding:10px;
            span{
                &:first-child{
                    margin:0 40px 0 354px;
                }
                &:last-child{
                    
                }
            }
        }
        .address_list{
            padding:10px 20px;
            border-bottom: 1px solid #ccc;
            .address_top{
                margin-bottom:5px;
                span{
                    float:left;
                    &:first-child{
                        margin-right:20px;
                    }
                }
            }
        }
    }
    #link{
        background:url(${banner}) no-repeat;
    }
`
const AddAddWrap=styled.div`
    #header{
        ul>li{
            color:#686868;
            &:hover{
                color:#f5a64a;
            }
        }
    }
    .add{
        min-height:640px;
        background:url(${add}) no-repeat;
        .add-wrap{
            width:1300px;
            margin:0 auto;
            padding-top:75px;
            .add_logo{
                width:111px;
                height:106px;
                margin:0 14px 0 148px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            >span{
                display:block;
                width:60px;
                font-size:14px;
                color:#000;
                text-align:center;
                line-height:14px;
                padding:21px 0 7px;
                margin-right:38px;
                border-bottom:4px solid #f5a64a;
            }
            .add_address{
                width:626px;
                height:318px;
                margin-top:16px;
                background:#ead9c4;
                >span{
                    display:block;
                    width:12px;
                    height:28px;
                    background:url(${back_left}) no-repeat;
                    margin:145px 0 0 4px;
                }
                .add_detail{
                    width:595px;
                    height:310px;
                    background:#fcf2e7;
                    margin:4px 4px 0 0;
                    padding-left:62px;
                    >p{
                        font-size:14px;
                        color:#11100f;
                        line-height:20px;
                        margin-top:30px;
                    }
                    .area{
                        >span{
                            margin-right:29px;
                        }
                        .ant-input{
                            color:#000;
                        }
                    }
                    label{
                        display:block;
                        margin:17px 0;
                        >input{
                            margin-left:29px;
                            width:298px;
                            height:20px;
                            border:1px solid #353434;
                            border-radius:4px;
                        }
                    }
                    .choice{
                        width:374px;
                        span{
                            display:block;
                            width:56px;
                            height:38px;
                            text-align:center;
                            line-height:38px;
                            border-radius:10px;
                            float: left;
                            background:#f5a64a;
                            &:first-child{
                                margin-left:120px;
                            }
                            &:last-child{
                                margin-left:80px;
                            }
                        }
                    }
                }
            }
        }
    }
    #link{
        background:url(${add_footer}) no-repeat;
    }
`
export {
    AddressListWrap,
    AddAddWrap
}