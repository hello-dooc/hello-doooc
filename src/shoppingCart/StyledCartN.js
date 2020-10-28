import styled from 'styled-components'

import bg1 from '../assets/images/shoppingCartN_02.png'
import bg from '../assets/images/bg.png'


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
        /* opacity: 0.75; */
        display:flex;
        .cartCon{
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
              margin-top:20px;
              height:32px;
              width:100px;
              line-height:32px;
              font-size:12px;
              background:#f5a64a;
            }
          }
        }
      }
    }
    footer{
      height: 732px;
      /* background-color:#eeeeee; */
      background:url(${bg1}) no-repeat;
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