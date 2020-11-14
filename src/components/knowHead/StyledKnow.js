import styled from 'styled-components'
import nav_bg from '@a/images/Trainning/nav_03.png'
import dbg from '@a/images/dbg_03.jpg'

const KnowStyled = styled.div`
  height:62px;
  background:#f5a64a;
  .tit_wrap{
      width:1300px;
      margin:0 auto;
      position: relative;
      >ul{
          >li{
              float:left;
              font-size:30px;
              color:#131313;
              width:157px;
              line-height:62px;
              padding-left:37px;
              background: #f5a64a url(${nav_bg}) no-repeat left center;
          }
          .active{
            background: #fff url(${dbg}) no-repeat left center;
          }
      }
      .tit_left{
          float:left;
      }
      .tit_right{
          float:right;
      }
      >div{
          float:left;
          width:210px;
          height:210px;
          border-radius:100%;
          background:#faf6f5;
          position: absolute;
          left:542px;
          top:-116px;
          >p{
              text-align:center;
              color:#131313;
              &:first-child{
                  font-size:48px;
                  line-height:48px;
                  margin:27px 0  20px 0;
              }
              &:nth-of-type(2){
                  font-size:30px;
                  line-height:30px;
                  margin-bottom:23px;
              }
          }
          >img{
              margin:0 auto;
          }
      }
  }
  .active{

  }
`
export {
  KnowStyled
}