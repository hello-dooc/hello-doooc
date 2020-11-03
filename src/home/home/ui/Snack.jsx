import React, { Component } from 'react';


import snack from '@a/images/snacks.jpg'
import one from '@a/images/one.jpg'
import two from '@a/images/two.jpg'
import three from '@a/images/three.jpg'
import fure from '@a/images/fure.jpg'
import five from '@a/images/five.jpg'

class Snack extends Component {
  render() {
    return (
        <center>
          <h2><img src={snack} alt=""/></h2>
          <ul>
            <li><img src={one} alt=""/></li>
            <li><img src={two} alt=""/></li>
            <li><img src={three} alt=""/></li>
            <li><img src={fure} alt=""/></li>
            <li><img src={five} alt=""/></li>
          </ul>
        </center>
    );
  }
}

export default Snack;