import styled from 'styled-components'

const Info = styled.div `
    .shopDetails{
        height:180px;
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
        }
    }
`

export {
    Info
  }