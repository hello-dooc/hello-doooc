import styled from 'styled-components'

const KnowStyled = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  background: #f5a64a;
  li{
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    font-size: 27px;
    float: left;
    &.active{
      background: #fff;
    }
  }
  ul{
    display: inline-block;
    float: left;
  }
  ol{
    display: inline-block;
    float: right;
  }
  .iimg{
    width: 210px;
    height: 210px;
    border-radius: 50%;
    position: absolute;
    background: pink;
    left: 50%;
    margin-left: -105px;
    top: -105px;
  }
`
export {
  KnowStyled
}