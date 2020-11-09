import React, { Component } from 'react';
import img1 from '@a/images/4.png'
import img2 from '@a/images/c4bc035943ebe0f_w600_h465.jpg'

class LoveBody extends Component {
  render() {
    return (
      <div className="center">
        <div className="title">
          <h1>定时的护理，让我更健康</h1>
          <p>Regular care makes me healthier.</p>
        </div>
        <section className="hair">
          <div className="txt">
            <p>一周一次</p>
            <h2>毛发护理</h2>
            <h2>Hair care</h2>
            <p>每天清洁你的狗狗，不但可以使狗狗保持清洁和健康，而且可以使狗狗知道主人的权力和威严。清洁狗狗时，将狗狗抱起，抓住狗狗的头，打开狗狗的嘴等动作表示对狗狗的支配，可帮助你增加控制狗狗的能力。开始时，给狗狗提供食物作为奖赏，使以狗狗分心，以后逐渐发展到用语言命令和身体语言命令来控制狗狗。</p>
          </div>
          <div>
            <img src={img1} alt=""/>
          </div>
          <span></span>
        </section>
        <section className="clean">
          <div className="txt">
            <p>一周一次</p>
            <h2>日常清洁</h2>
            <h2>Hair care</h2>
            <p>狗狗沐浴露的选择上一定要用狗狗专用的沐浴露，那么有些人就会问为什么要不能用人的沐浴露，这是因为：狗狗的皮肤时弱碱性的，而人的皮肤是弱酸性的。人用的浴液或洗发精一般偏碱性，可以和人的皮肤值中和。而狗狗的弱碱性皮肤遇到同样是碱性的洗发水，无法进行中和。</p>
          </div>
          <div>
            <img src={img2} alt=""/>
          </div>
          <span></span>
        </section>
      </div>
    );
  }
}

export default LoveBody;