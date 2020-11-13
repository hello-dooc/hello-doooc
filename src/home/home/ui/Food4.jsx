import React, { Component } from 'react';
import Swiper from 'swiper';
import "./swiper.min.css"


import Swiper1 from '@a/images/01.jpg'
import Swiper2 from '@a/images/02.jpg'
import Swiper3 from '@a/images/03.jpg'
import Swiper4 from '@a/images/04.jpg'
import Swiper5 from '@a/images/05.jpg'

class Food4 extends Component {
    componentDidMount(){
        new Swiper ('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
        centeredSlides: true,
        loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      })              
    } 
  render() {
    return (
       <div className="swiper-container">
           <div className="swiper-wrapper">
               <div className="swiper-slide"><img src={Swiper1} alt=""/></div>
               <div className="swiper-slide"><img src={Swiper2} alt=""/></div>
               <div className="swiper-slide"><img src={Swiper3} alt=""/></div>
               <div className="swiper-slide"><img src={Swiper4} alt=""/></div>
               <div className="swiper-slide"><img src={Swiper5} alt=""/></div>

           </div>
           <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>     
      </div>
    );
  }
}

export default Food4;