import React, { Component } from 'react';
import f2one from '@a/images/1.jpg'
import f2two from '@a/images/2.jpg'
import f2three from '@a/images/3.jpg'
import f2four from '@a/images/8.jpg'
import f2five from '@a/images/4.jpg'
import f2six from '@a/images/5.jpg'
import f2seven from '@a/images/6.jpg'
import f2eight from '@a/images/7.jpg'

class Food2 extends Component {
  render() {
    return (
      <section>
        <div><img src={f2one} alt=""/></div>
        <div><img src={f2two} alt=""/></div>
        <div><img src={f2three} alt=""/></div>
        <div><img src={f2four} alt=""/></div>
        <div><img src={f2five} alt=""/></div>
        <div><img src={f2six} alt=""/></div>
        <div><img src={f2seven} alt=""/></div>
        <div><img src={f2eight} alt=""/></div>

      </section>
    );
  }
}

export default Food2;