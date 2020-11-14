import React, { Component } from 'react';
import Swiper from 'swiper';
import "./swiper.min.css"


import Swiper1 from '@a/images/banner1.jpg'
import Swiper2 from '@a/images/banner2.jpg'
import Swiper3 from '@a/images/banner1.jpg'
import Swiper4 from '@a/images/banner4.jpg'
import Swiper5 from '@a/images/banner5.jpg'

class Food4 extends Component {

  componentDidMount(){
      new Swiper ('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
         
         // 如果需要分页器
         pagination: {
           el: '.swiper-pagination',
         },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })              
    }    


  clickNav(){
    console.log(1)
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
          <div className="swiper-button-prev" onClick={this.clickNav}></div>
          <div className="swiper-button-next"></div>     
      </div>
    );
  }
}

export default Food4;