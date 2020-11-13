import styled from 'styled-components'

const Info = styled.div`
    height:558px;
    overflow-y:auto;
    width:800px;
    p{
        margin:0;
        padding-top:10px;
    }
    .shopDetail{
        height:150px;
        /* background:#eee; */
        display:flex;
        justify-content:space-around; 
        align-items:center;
        border-bottom:1px solid black;
        img{
            height:110px;
            width:92px;
        }
        .shopName{
            width:90px;
            height:24px;
            border-radius:2px;
            /* background:#f5a64a; */
            text-align:center;
            overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap
        }
    }

`
export {
    Info
}