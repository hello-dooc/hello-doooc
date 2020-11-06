import styled from 'styled-components'
import '@a/styles/reset.css'

import bg from '@a/images/bg.png'

const HeadStyle = styled.div`
  width: 100%;
  height: 90px;
  background: #eeeeee;
  position:relative;
  ul {
    height: 90px;
    display: inline-block;
    li{
      display: inline-block;
      margin-right: 90px;
      line-height: 90px;
      color: #686868;
      font-size: 30px;
    }
    li.active{
      color: #f5a64a;
    }
  }
  h1{
    position: absolute;
    background: blue;
    top: 0;
    left: 50%;
  }
`
const SearchStyle = styled.div`
  padding-top: 27px;
  width: 100%;
  height: 140px;
  position: relative;
  form{
    left: 50%;
    margin-left: -200px;
    height: 40px;
    position: absolute;
    input {
      padding-left: 2px;
      width: 310px;
      height: 40px;
      border: 0;
      float: left;
      background: #eee;
    }
    button {
      width: 40px;
      height: 40px;
      border: 0;
      float: left;
      background: #f5a64a;
      font-size: 20px;
    }
  }
  .shoppingCart{
    border-radius: 10px;
    overflow: hidden;
    width: 115px;
    height: 40px;
    float: right;
    margin-right: 35px;
    background: #f5a64a;
    p{
      float: left;
      line-height: 40px;
      text-align: center;
      height: 40px;
    }
    .shopcart{
      background: #d0d0d0;
      font-size: 30px;
      width: 40px;
    }
    .shopnum{
      padding-left: 5px;
    }
  }
  ul{
    display: inline-block;
    position: absolute;
    top: 80px;
    li{
      display: inline-block;
      height: 35px;
      font-size: 17px;
      line-height: 35px;
      padding: 0 45px;
    }
    li.active{
      background: #eee;
    }
  }
  ol{
    position: absolute;
    top: 120px;
    li{
      display: inline-block;
      margin: 0 10px;
    }
  }
`
const ClassifyStyle = styled.div`
  width: 100%;
  li{
    display: inline-block;
    margin: 0 8px;
    font-size: 15px;
    line-height: 35px;
  }
  ul{
    margin-top: 5px;
    height: 35px;
    background: #f5a64a;
  }
  nav{ 
    height: 55px;
    background: #fdc98c;
    line-height: 55px;
    margin-top: 10px;
  }
`
const ListStyle = styled.div`
  width: 100%;
  background: url(${bg});
  height: 1130px;
  .center{
    height: 1130px;
    position: relative;
  }
  ol{
    overflow: hidden;
    height: 1050px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li{
      position: relative;
      background: #eeeeee;
      display: inline-block;
      width: 225px;
      height: 330px;
      padding: 43px 30px 21px;
      box-sizing: border-box;
      margin-bottom: 30px;
      img {
        width: 100%;
        height: 160px;
        margin-bottom: 34px;
      }
      p:nth-of-type(1){
        position: relative;
        height: 30px;
        >span{
          position:absolute;
          top: 0px;
          left: -20px;
          width: 60px;
          height: 15px;
          background: #fdc98c;
          font-size: 12px;
          margin-right: 10px;
          color: #fff;
          padding-left: 2px;
        }
        .title{
          position: absolute;
          left: 50px;
          width: 120px;
          height: 50px;
          font-size: 12px;
          word-wrap: break-word;
          word-break: normal;
          color: #525050;
          background: #eeeeee;
        }
      }
      .price{
        font-size: 18px;
        color: #ff3366;
        font-weight: 700;
        margin: 0;
      }
      p:nth-of-type(3){
        font-size: 12px;
        color: #cecece;
        del:last-child{
          float: right;
        }
      }
    }
  }
  ul{
    position: absolute;
    bottom: 20px;
    right: 0;
  }
`
export {
  HeadStyle,
  SearchStyle,
  ClassifyStyle,
  ListStyle
}