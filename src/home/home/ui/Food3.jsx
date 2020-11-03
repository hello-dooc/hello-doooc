import React, { Component } from 'react';

import food3one from '@a/images/001.jpg'
import food3two from '@a/images/002.jpg'
import food3three from '@a/images/003.jpg'
import food3four from '@a/images/004.jpg'
import food3five from '@a/images/005.jpg'
import food3six from '@a/images/006.jpg'

class Food3 extends Component {
  render() {
    return (
      <div>
        <h3>爱宠不会养？doooc让你满意</h3>
        <ul>
          <li>
            <p>xxx</p>
            <img src={food3one} alt=""/>
          </li>
          <li>
            <p>xxx</p>
            <img src={food3two} alt=""/>
          </li>
          <li>
            <p>xxx</p>
            <img src={food3three} alt=""/>
          </li>
          <li>
            <p>xxx</p>
            <img src={food3four} alt=""/>
          </li>
          <li>
            <p>xxx</p>
            <img src={food3five} alt=""/>
          </li>
          <li>
            <p>xxx</p>
            <img src={food3six} alt=""/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Food3;