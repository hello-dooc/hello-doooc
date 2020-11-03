import styled from 'styled-components'
import '@a/styles/reset.css'
import left from '@a/images/left.png'
import right from '@a/images/right.png'

const SnackOne = styled.div`
  height: 480px;
  width: 100%;
  h2{
    margin-top: 120px;
    display: block;
    width: 120px;
    height: 120px;
    margin-bottom: 80px;
  }
  ul{
    width: 990px;
    display: flex;
    justify-content: space-between;
    li {
      float: left;
      width:170px;
      height: 170px;
      border-radius: 50%;
      border: 1px solid #f5a64a;
      padding-top: 25px;
      box-sizing: border-box;
    }
  }


`
const TitleBorder = styled.div`
  height: 32px;
  width: 250px;
  border: 1px solid #f5a64a;
  position: relative;
  margin-bottom: 60px;
  span{
    width: 32px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #f5a64a;
    border-radius: 0 32px 32px 0;
    position: absolute;
    right: -34px;
    top: -1px;
  }
  
`
const FoodChange1 = styled.div`
  width: 1300px;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-between;
    width: 1110px
    margin-top: 80px;
    li {
      width: 340px;
      height: 540px;
    }
  }
`
const FoodChange2 = styled.div`
  width: 1300px;
  margin: 0 auto;
  section {
    width: 100%;
    height: 620px;
    display: grid;
    grid-template-areas: 'a a b c d'
                         'a a e f d'
                         'a a e g h';
    > div:nth-child(1) {
      grid-area: a;
    }
    > div:nth-child(2) {
      grid-area: b;
    }
    > div:nth-child(3) {
      grid-area: c;
    }
    > div:nth-child(4) {
      grid-area: d;
    }
    > div:nth-child(5) {
      grid-area: e;
    }
    > div:nth-child(6) {
      grid-area: f;
    }
    > div:nth-child(7) {
      grid-area: g;
    > div:nth-child(8) {
      grid-area: h;
    }
    > div img{
      width: 100%;
      height: 100%;
    }
  }
`
const FoodChange3 = styled.div`
  width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 120px;
  overflow: hidden;
  h3{
    text-align: center;
    margin-bottom: 50px;
    overflow:hidden;
  }
  ul{
    height: 545px;
    width: 1150px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    border-radius: 30px;
    overflow: hidden;
    
    li{
      width: 330px;
      height: 250px;
      img{
        width: 100%;
        height: 200px;
      }
      p{
        height: 50px;
        background: #f5a64a;
        line-height: 50px;
        text-align: center;
      }
    }
    li:nth-child(4),li:nth-child(5),li:nth-child(6){
      margin-top: 50px;
    }
  }
`


const FoodChange4 = styled.div`
  margin: 0 auto;
	position: relative;
	width: 1200px;
  margin: 0 auto
  overflow: hidden;
  margin-bottom: 60px;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    img{
      width: 300px;
    }
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.7);

    }
  .swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    width: 50px;
    background: url(${left}) no-repeat;
    background-size: 40px;
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    background: url(${right}) no-repeat;
    width: 50px;
    background-size: 40px;
  }
`
export {
  SnackOne,
  TitleBorder,
  FoodChange1,
  FoodChange2,
  FoodChange3,
  FoodChange4
}