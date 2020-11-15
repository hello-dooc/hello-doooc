import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Footer from '@c/footer/Footer'
import Link from '@c/link/Link'
import Header from '@c/header/Header'


import {
    Container
} from './StyledKnowledge'
import banner from '@a/images/banner_dog.png'

import ban1 from '@a/images/knowledge/ban1_03.png'
import ban2 from '@a/images/knowledge/ban2_03.png'
import ban3 from '@a/images/knowledge/ban3_03.png'
import ban4 from '@a/images/knowledge/ban4_03.png'
import ban5 from '@a/images/knowledge/ban5_03.png'

import news1 from '@a/images/knowledge/1.png'
import news2 from '@a/images/knowledge/2.png'
import news3 from '@a/images/knowledge/3.png'

@withRouter
class Knowledge extends Component {
    render() {
        return (
            <Container>
                <div className="con">
                    <nav>

                    </nav>

                    <div className="train">
                        <h2>关于宠物</h2>
                        <h3>About pets</h3>
                    </div>

                    <div className="banner">
                        <div className="petsItem">
                            <img src={ban1} alt="" />
                            <div className="petsText">
                                <span>
                                    猫咪是一种非常灵活的动物<br />
                                    可以根据容器将自己塑造成任何的形状<br />
                                    这得多亏于它有230根骨头<br />
                                    53根宽松的椎骨<br />
                                    而人类全身也只有206根<br />
                                </span>
                            </div>
                        </div>
                        <div className="petsItem">
                            <img src={ban2} alt="" />
                            <div className="petsText">
                                <span>
                                    猫咪的爪爪猫咪的前爪有五个肉球，而后爪只有四个肉球。一般来说，猫爪是凉凉的，如果突然有一天变得热乎乎的，那么很可能你的猫咪发烧了。
                                </span>
                            </div>
                        </div>
                        <div className="petsItem">
                            <img src={ban3} alt="" />
                            <div className="petsText">
                                <span>
                                    猫咪本身是有狩猎的天性在的<br />
                                    所以在家中看见小虫子的时候<br />
                                    他们都会跳得老高想要去抓虫子<br />
                                    据相关研究表明<br />
                                    猫咪垂直跳跃的最高高度可达自己身体5倍
                                </span>
                            </div>
                        </div>
                        <div className="petsItem">
                            <img src={ban4} alt="" />
                            <div className="petsText">
                                <span>
                                    母猫如果不绝育的话<br />
                                    一窝可生产1到9只小猫咪<br />
                                    如此这般下来<br />
                                    一代又一代不断的繁殖<br />
                                    7年就可繁殖42万只猫咪<br />
                                    如此可见绝育的重要性
                                </span>
                            </div>
                        </div>
                        <div className="petsItem">
                            <img src={ban5} alt="" />
                            <div className="petsText">
                                <span>
                                    奔跑也是猫咪的天性<br/>
                                    不过狭小的家中束缚住了它们<br/>
                                    据可靠的研究数据表明<br/>
                                    家猫的奔跑速度最快可达55——60km/h
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="news">
                        <div className="newsItem">
                            <img src={news1} alt=""/>
                            <dl>
                                <dd>每只狗狗的鼻纹是独特的</dd>
                                <dt>宠物狗狗的鼻子上也是有纹路的，它的纹路就想我们人类的指纹一样，是独一无二的。曾经有个人用自己的狗狗给手机录入鼻纹，最后成功解锁了他的手机。在国外，一些动物的公益团队还会通过狗狗的鼻子纹路来确认它的身份。</dt>
                            </dl>
                        </div>
                        <div className="newsItem">
                            <img src={news2} alt=""/>
                            <dl>
                                <dd>狗狗的尿液有腐蚀性</dd>
                                <dt>狗狗的尿液有腐蚀性，据说因为有太多狗狗在上面小解了，因此造成了克罗地亚当地的一些街灯柱坍塌，一场由狗尿引发的小型地震。</dt>
                            </dl>
                        </div>
                        <div className="newsItem">
                            <img src={news3} alt=""/>
                            <dl>
                                <dd>狗狗可以听到、闻到、感觉到天气的变化哦！</dd>
                                <dt>狗狗可以听到、闻到、感觉到天气的变化哦！所以如果你家狗狗忽然开始捣蛋或是做各种事情来引起你注意，甚至是表现得不安，那么很有可能是因为风暴要来了。</dt>
                            </dl>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Knowledge;