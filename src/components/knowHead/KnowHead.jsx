import React, { Component } from 'react';
import {KnowStyled} from './StyledKnow'

class KnowHead extends Component {
  render() {
    return (
      <KnowStyled>
        <div className="center">
          <ul>
            <li>疾病</li>
            <li className="active">养护</li>
            <li>训练</li>
          </ul>
          <div className="iimg"></div>
          <ol>
            <li>医疗</li>
            <li>冷知识</li>
            <li>联系我们</li>
          </ol>
        </div>
      </KnowStyled>
    );
  }
}

export default KnowHead;