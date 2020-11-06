import React, { Component } from 'react';
import {KnowStyled} from './StyledKnow'
import {withRouter } from 'react-router-dom'
@withRouter
class KnowHead extends Component {
  handleGotoOthers=(url)=>{
      return ()=>{
          this.props.history.push(url)
      }
  }
  render() {
    return (
      <KnowStyled>
        <div className="center">
          <ul>
            <li>疾病</li>
            <li className="active">养护</li>
            <li onClick={this.handleGotoOthers('/training')}>训练</li>
          </ul>
          <div className="iimg"></div>
          <ol>
            <li>医疗</li>
            <li>冷知识</li>
            <li onClick={this.handleGotoOthers('/answer')}>联系我们</li>
          </ol>
        </div>
      </KnowStyled>
    );
  }
}

export default KnowHead;