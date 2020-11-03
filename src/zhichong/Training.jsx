import React, { Component } from 'react';

import navImg from '@a/images/Trainning/nav_03.png'
import ban from '@a/images/Trainning/TrBan_03.png'
import news1 from '@a/images/Trainning/TrNews01_03.png'
import news2 from '@a/images/Trainning/TrNews02_03.png'
import news3 from '@a/images/Trainning/TrNews03_03.png'


import {
    Container
  } from './StyledTraining'

class Training extends Component {
    render() {
        return (
            <Container>
                <div className="con">
                    <header>123</header>
                    <nav>
                        <ul>
                            <li>
                                <img src={navImg} alt=""/>
                                <span>疾病</span>
                            </li>
                            <li>
                                <img src={navImg} alt=""/>
                                <span>养护</span>
                            </li>
                            <li>
                                <img src={navImg} alt=""/>
                                <span>训练</span>
                            </li>
                        </ul>
                        <ul></ul>
                        <ul>
                            <li>
                                <img src={navImg} alt=""/>
                                <span>医疗</span>
                            </li>
                            <li>
                                <img src={navImg} alt=""/>
                                <span>冷知识</span>
                            </li>
                            <li>
                                <img src={navImg} alt=""/>
                                <span>联系我们</span>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className="train">
                        <h2>宠物训练</h2>
                        <h3>Professional pet training course</h3>
                    </div>

                    <div className="banner">
                        <div className="banCon">
                            <div>
                                <h2>&nbsp;&nbsp;养宠困扰你有么</h2>
                                <h3>为您提供专业的宠物训练课程</h3>
                            </div>
                            <img src={ban} alt=""/>
                        </div>
                    </div>

                    <div className="news">
                        <dl>
                            <dd><img src={news1} alt=""/></dd>
                            <dt>狗的训练，应从出生二、三个月的小狗开始。饲主应有爱心和耐心，让小狗了解对主人的命令是要绝对服从的。有时小狗不听话，要对它进行体罚。可把报纸卷成棍状鞭打狗嘴两边，体罚不能过度，否则小狗会产生害怕心理，整天畏前畏尾。当小狗听话时，可用手顺毛抚摸狗的身体，极力称赞鼓励。要使用统一的口令训练狗做动作。狗是以声调来判断主人的意思的。故此，要让狗理解同样的意思，不能用不同的口令，否则小狗将无法区别</dt>
                        </dl>
                        <dl>
                            <dd>除了一些专门训练过的猎犬外，很多犬都不习惯下水。因此，必须对犬专门训练一番。训练时主人将犬带到一般的淡水游泳场所的水边，先在岸上用犬平时最喜欢的玩耍物品逗引犬充分兴奋后，将物品抛向水面，主人同时冲向水面，并向犬发出游的口令，让犬前去衔来。这时，可将犬带到海水游泳场，训练其适应海水游泳。</dd>
                            <dt><img src={news2} alt=""/></dt>
                        </dl>
                    </div>

                    <div className="advisory">
                        <div className="adHead">
                            <h2>精彩训练资讯</h2>
                        </div>
                        <div className="adMain">
                            <div className="adNews">
                                <div>
                                    <i>【狗狗资讯】</i>
                                    <span>如何训练柯基犬狗狗不要讨要食物？</span>
                                </div>
                                <div>
                                    <i>【狗狗资讯】</i>
                                    <span>如何训练柯基犬狗狗不要讨要食物？</span>
                                </div>
                                <div>
                                    <i>【狗狗资讯】</i>
                                    <span>如何训练柯基犬狗狗不要讨要食物？</span>
                                </div>
                            </div>
                            <img src={news3} alt=""/>
                        </div>
                    </div>

                    <footer></footer>
                </div>
            </Container>
        );
    }
}

export default Training;