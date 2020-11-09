import styled from 'styled-components';
import footer_banner from '@a/images/footer_banner_03.png'
const SelfInfoWrap=styled.div`
    .self-wrap{
        width:864px;
        margin:72px 0 0 217px;
        height:1096px;
        .ant-upload-select{
            margin-left:50%;
        }
        .ant-form{
            margin-left:145px
        }
    }
    #link{
        background:url(${footer_banner}) no-repeat;
    }
`
export default SelfInfoWrap