import React, { Component } from 'react';
import img3 from '@a/images/7339310_100643166157_2.jpg'

class DogInfo extends Component {
  render() {
    return (
      <div className="center">
        <h2>
          <span>狗狗美容资讯</span>
        </h2>
        <div className="info">
          <ul>
            <li><span>>></span>狗狗洗澡用什么沐浴露好？</li>
            <li><span>>></span>给狗狗洗澡洗的太勤会危害它们的健康？</li>
            <li><span>>></span>如何正确的给狗狗洗澡？</li>
            <li><span>>></span>为什么狗狗的毛发无光泽又粗糙打结？</li>
            <li><span>>></span>狗狗美容的方法技巧！在家也能给狗狗美容？</li>
            <li><span>>></span>狗狗剪毛之后会出现那些情绪变化？？</li>
            <li><span>>></span>给狗狗清洁耳朵的方法，给狗掏耳朵需要很深吗？</li>
            <li><span>>></span>什么情况不能给狗狗洗澡，大家都知道吗？</li>
            <li><span>>></span>如何正确的给沙皮狗洗澡？简单实用的步骤</li>
            <li><span>>></span>狗狗美容的方法技巧！在家也能给狗狗美容？</li>
            <li><span>>></span>给狗狗修剪被毛的方法和注意事项？</li>
          </ul>
          <img src={img3} alt=""/>
        </div>
      </div>
    );
  }
}

export default DogInfo;