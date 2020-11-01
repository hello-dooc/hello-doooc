import styled from 'styled-components'

import bg2 from '@a/images/ShoppingCart/shoppingCartH_02.png'
import bg from '@a/images/bg.png'


const Container = styled.div `
  .con{
    /* width:1920px;      
    overflow:auto; */
    background:url(${bg});
    background-size:100%;
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
        .cartCon{
          height:520px;
          width:726px;
          background:#faefe1;
          margin:auto;
          box-shadow: #c2b5a6 0px 0px 20px 5px;
          padding:20px 40px;
          opacity: 1;
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
              border-radius:18px;
              background:#f5a64a;
            }
          }
        }
      }
    }
    footer{
      height: 732px;
      /* background-color:#eeeeee; */
      background:url(${bg2}) no-repeat;
      background-size:100%;
      img{
        /* width:1920px; */
        /* width:100%; */
        display:block;
      }
    }
  }
`


export {
  Container,
}