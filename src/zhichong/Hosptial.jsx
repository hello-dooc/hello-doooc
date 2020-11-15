import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'

import Footer from '@c/footer/Footer'
import Link from '@c/link/Link'
import Header from '@c/header/Header'

import ban from '@a/images/hosptial/banner_03.png'
import news1 from '@a/images/Trainning/TrNews01_03.png'
import news2 from '@a/images/Trainning/TrNews02_03.png'
import news3 from '@a/images/Trainning/TrNews03_03.png'
import banner from '@a/images/banner_dog.png'
import box1 from '../assets/images/hosptial/box1.png'
import box2 from '../assets/images/hosptial/box2.jpg'
import box3 from '../assets/images/hosptial/box3.png'
import box4 from '../assets/images/hosptial/box4.jpg'
import anli from '../assets/images/hosptial/anli.png'
import yiyuan1 from '../assets/images/hosptial/yiyuan1.png'
import yiyuan2 from '../assets/images/hosptial/yiyuan2.png'
import yiyuan3 from '../assets/images/hosptial/yiyuan3.png'
import yiyuan4 from '../assets/images/hosptial/yiyuan4.png'
import bottom1 from '../assets/images/hosptial/bottom1.png'
import bottom2 from '../assets/images/hosptial/bottom2.png'
import bottom3 from '../assets/images/hosptial/bottom3.png'



import {
    Container
  } from './StyledHosptial'
@withRouter
class Hosptial extends Component {
    handleGotoOthers=(url)=>{
        return ()=>{
            this.props.history.push(url)
        }
    }
    render() {
        return (
            <Container>
                <div className="con">
                    <nav>

                    </nav>
                    
                    <div className="train">
                        <h2>医疗环境，诊疗设备</h2>
                        <h3>Medical environment, diagnostic equipment</h3>
                    </div>

                    <div className="banner">
                        <img src={ban} alt=""/>
                    </div>

            
                    <div className="box">
                        <div>
                            <div class="item">
                                <img src={box1} alt=""/>
                            </div>
                            <div class="item">
                                <img src={box2} alt=""/>
                            </div>
                            <div class="item">
                                <img src={box3} alt=""/>
                            </div>
                            <div class="item">
                                <img src={box4} alt=""/>
                            </div>
                           
                        </div>
                    </div>

                    <div className="anli">
                        <img src={anli} alt=""/>
                    </div>

                    <div className="anli_content">
                        <div className="content_box">
                            <img src={yiyuan1} alt=""/>
                            <img src={yiyuan2} alt=""/>
                            <img src={yiyuan3} alt=""/>
                            <img src={yiyuan4} alt=""/>
                        </div>
                    </div>
                    
                    <div className="bottom">
                        <dl>
                            <dd><img src={bottom1} alt=""/></dd>
                            <dt>
                            <p>卡拉宠物医院（龙华分院）</p>
                            <p>地址：深圳市龙华区民治街道...</p>
                            <p>电话：0755－21002134</p>
                            <p>客服微信：Carlo1866</p>
                            </dt>
                        </dl>
                        <dl>
                            <dd><img src={bottom2} alt=""/></dd>
                            <dt>
                            <p>上海瑞得容物美容中心</p>
                            <p>地址：上海市长宁区长寿路150号</p>
                            <p>电话：021-51085186</p>
                            <p>客服微信：www74186</p>
                            </dt>
                        </dl>
                        <dl>
                            <dd><img src={bottom3} alt=""/></dd>
                            <dt>
                            <p>瑞鹏宠物医院</p>
                            <p>地址：上海市闸北区</p>
                            <p>电话： 021-51085186</p>
                            <p>客服微信：暂无</p>
                            </dt>
                        </dl>
                    </div>

                    <Link></Link>
                    <Footer></Footer>
                </div>
            
            </Container>
        );
    }
}

export default Hosptial;