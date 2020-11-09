import React, { Component } from 'react';
// 食材选取
import a from '@a/images/a.jpg'
import b from '@a/images/b.jpg'
import c from '@a/images/c.jpg'




class Food1 extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><img src={a} alt=""/></li>
          <li><img src={b} alt=""/></li>
          <li><img src={c} alt=""/></li>
        </ul>
      </div>
    );
  }
}

export default Food1;