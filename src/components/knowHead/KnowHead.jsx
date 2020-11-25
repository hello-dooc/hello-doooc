import React, { Component } from 'react';
import {KnowStyled} from './StyledKnow'
import {withRouter } from 'react-router-dom'
import heart from '@a/images/heart_03.jpg'

@withRouter
class KnowHead extends Component {
  state={
    type:1
  }
  handleGotoOthers=(type)=>{
      return ()=>{
        this.setState({
          type
        })
        this.props.callBack(type)
      }
  }
  render() {
    // console.log(this.state.type);
    return (
      <KnowStyled className="dis_tab clear_fix">
              <div className="tit_wrap">
                  <ul className="tit_left">
                      <li onClick={this.handleGotoOthers(1)} className={this.state.type===1?'active':''}>疾病</li>
                      <li onClick={this.handleGotoOthers(2)} className={this.state.type===2?'active':''}>养护</li>
                      <li onClick={this.handleGotoOthers(3)} className={this.state.type===3?'active':''}>训练</li>
                  </ul>
                  <div>
                      <p>知宠</p>
                      <p>zhichong</p>
                      <img src={heart} alt=""/>
                  </div>
                  <ul className="tit_right">
                      <li onClick={this.handleGotoOthers(4)} className={this.state.type===4?'active':''}>医疗</li>
                      <li onClick={this.handleGotoOthers(5)} className={this.state.type===5?'active':''}>冷知识</li>
                      <li onClick={this.handleGotoOthers(6)} className={this.state.type===6?'active':''}>联系我们</li>
                  </ul>
              </div>
          </KnowStyled>
    );
  }
}

export default KnowHead;