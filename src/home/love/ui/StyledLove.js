import styled from 'styled-components'

const BodyStyle = styled.div`
  width: 100%;
  position: relative;
  .title{
    height: 180px;
    text-align: center;
    h1{
      margin-top: 110px;
      font-size: 22px;
      margin-bottom: 42px;
    }
    p{
      font-size: 36px;
    }
  }
}
section{
  margin-top: 40px;
  position: relative;
  height: 550px;
  div{
    width: 670px;
    height: 460px;
    position: absolute;
  }
  .txt{
    padding: 20px;
    box-sizing: border-box;
    width: 340px;
    height: 400px;
    background: #f0f4fd;
    p{
      width: 90px;
      display: block;
      font-size: 16px;
      padding: 0px 5px;
      color: #c39e70;
      border-bottom: 1px solid #c39e70;
    }
    h2{
      font-size: 25px;
      line-height: 37px;
    }
    p:last-child{
      color: #000;
      border: 0;
      font-size: 14px;
      line-height: 24px;
      word-wrap:break-word;
      word-break:normal; 
      width: 280px;
    }
  }
  span{
    width: 310px;
    height: 240px;
    position: absolute;
    border: 2px solid #f5a64a;
  }
}
.hair{
  padding-left: 180px;
  .txt{
    top: 150px;
    left: 850px;
  }
  span{
    top: 50px;
    left: 785px;
  }
}
.clean{
  margin-bottom: 75px;
  div{
    top: 0;
    left: 535px;
  }
  .txt{
    left: 185px;
    top: 110px;
  }
  span{
    top: 20px;
    left: 275px;
  }
}
`
const DogStyle = styled.div`
  width: 100%;
  height: 865px;
  h2{
    background: #f5a64b;
    height: 65px;
    position: relative;
    span{
      position: absolute;
      top: 10px;
      left: 55px;
      background: #fff;
      text-align: center;
      padding: 10px 35px;
      font-size: 24px;
    }
  }
  .info{
    margin-top: 90px;
    ul{
      float: left;
      width: 755px;
      li {
        line-height: 50px;
        font-size: 28px;
        span{
          margin: 0 30px;
        }
      }
    }
    img{
      float: left;
      width: 390px;
      height: 575px;
    }
  }
`
export {
  BodyStyle,
  DogStyle
}