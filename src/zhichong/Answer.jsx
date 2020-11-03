import React, { Component } from 'react'

import {AnswerWrap} from './StyledAnswer'
import img6 from '../assets/images/01.jpg'
import img7 from '../assets/images/02.jpg'
import img8 from '../assets/images/03.png'
import img9 from '../assets/images/04.jpg'
import img10 from '../assets/images/05.jpg'
import img11 from '../assets/images/06.jpg'
import img12 from '../assets/images/07.jpg'
import img13 from '../assets/images/08.JPEG'
import img15 from '../assets/images/h1.jpg'
import img16 from '../assets/images/h2.jpg'
import img17 from '../assets/images/h3.jpg'


export default class answer extends Component {
    render() {
        return (
            <AnswerWrap>
                <div className="doctor">
                    <h1>宠物医生在线免费解答</h1>
                    <h3>关于宠物猫狗喂养，生病等疑难杂症，<br/>在线免费解答，以备不时之需</h3>
                </div>
                <div className="expert">
                    <h2>
                        推荐专家
                    </h2>
                    <div className="imgWrap">
                        <ul>
                            <li><img src={img6} alt=""/></li>
                            <li><img src={img7} alt=""/></li>
                            <li><img src={img8} alt=""/></li>
                            <li><img src={img9} alt=""/></li>
                            <li><img src={img10} alt=""/></li>
                            <li><img src={img11} alt=""/></li>
                            <li><img src={img12} alt=""/></li>
                            <li><img src={img13} alt=""/></li>
                        </ul>
                    </div>
                </div>

                <div className="question">
                    <h3>最新已解决问题</h3>
                    <ul>
                        <li>
                            <span>确诊为细小病毒，现在腹腔有肿块是怎么了？</span> 
                            <p>输液就可以保命，禁食水是让手上的肠胃慢慢恢复，你现在给水或者食物肠胃受到刺激，只会害了...</p>
                        </li>
                        <li>
                            <span>狗狗发烧的症状及治疗方法</span> 
                            <p>一般小狗的正常体温，比人类的体温要偏高一些，所以37.5-38.8度之间都是小狗的正常体温...</p>
                        </li>
                        <li>
                            <span>狗狗感冒了怎么办？家长须知的用药方法!</span> 
                            <p>狗狗感冒以后，并没有出现发烧的状况，那么暂时不需要使用解热和阵痛的药物...</p>
                        </li>
                        <li>
                            <span>狂犬疫苗有必要每年都打吗，有效期是多少？</span> 
                            <p>50天左右的时候，就可以注射第一针狂犬疫苗，然后大概每隔20天左右就要给狗狗注射下一针...</p>
                        </li>
                    </ul>
                </div>

                <div className="hospital">
                    <h3>宠物医院</h3>
                    <ul>
                        <li className="first">
                            <div>
                                <img src={img15} alt=""/>
                            </div>
                            <div>
                                <span>爱窝窝 宠物生活馆</span>
                                <p>136061646830</p>
                                <p>板泉路1027号</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={img16} alt=""/>
                            </div> 
                            <div>
                                <span>Canil狗窝体验馆</span>
                                <p>201-55233971</p>
                                <p>溧阳路611号1933老场坊1号楼318室</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={img17} alt=""/>
                            </div>
                            <div>
                                <span>嘉萌城堡萌宠中心</span>
                                <p>021-62776747</p>
                                <p>真华路1958弄2号2楼(华和路口)</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </AnswerWrap>
        )
    }
}
