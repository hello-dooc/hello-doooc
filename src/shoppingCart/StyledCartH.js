import styled from 'styled-components'

import bg2 from '@a/images/ShoppingCart/shoppingCartH_02.png'
import bg from '@a/images/bg.png'

const Container = styled.div`
  .con{
    /* width:1920px;      
    overflow:auto; */
    background:url(${bg});
    background-size:100%;
    main{
      width:1300px;
      margin:0 auto;
      padding: 76px 170px 78px 0;
      display:flex;
      justify-content:space-between;


      img{
        height: 110px;
        width:110px;
      }
      p{
        font-size:14px;
        width:70px;
        height: 28px;
        border-bottom: 4px solid #f5a64a;
      }
      .cart{
        width:840px;
        height: 578px;
        background:#f8e3cc;
        opacity: 0.75;
        display:flex;
      }
    }
    #link{
      background:url(${bg2}) no-repeat;
      /* background-size:100%; */
    }
  }
`
const HCart = styled.div`
    height:520px;
    width:726px;
    background:#faefe1;
    margin:auto;
    box-shadow: #c2b5a6 0px 0px 20px 5px;
    padding:20px 40px;
    opacity: 1;
    
    .goods{
      height:360px;
      overflow-y:auto;
      .shopDetails{
        height:180px;
        background:#eee;
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
          background:#f5a64a;
          text-align:center;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap
        }
      }
    }
    .pay{
      height:35px;
      line-height:35px;
      display:flex;
      justify-content:center;
      margin-top:35px;
      button{
        margin-left:35px;
        font-size:18px;
        width:138px;
        border:0;
        border-radius:18px;
        background:#f5a64a;
      }
    }
  
`
const NCart = styled.div`
    height:520px;
    width:726px;
    background:#fff;
    margin:auto;
    box-shadow: #c2b5a6 0px 0px 20px 5px;
    padding-top:180px;
    display:flex;
    justify-content: center;
    opacity: 1;
    img{
      height:192px;
      height:157px;
    }
    div{
      /* padding:20px 10px; */
      display:flex;
      flex-flow: column;
      padding-left:15px;
      button{
        border:0;
        margin-top:20px;
        height:32px;
        width:100px;
        line-height:32px;
        font-size:12px;
        background:#f5a64a;
      }
    }
`

export {
  Container,
  HCart,
  NCart
}