import React, { Component } from 'react'
import HeaderNoBg from '@c/header/HeaderNoBg'
import Search from './Search'

import {ScreenWrap} from './StyledPetMarket'
import ChangeFilter from './ChangeFilter'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'


import timg from '@a/images/timg.jpeg'
import img1 from '@a/images/01_03.png'
import img2 from '@a/images/01_05.png'
import img3 from '@a/images/01_07.png'
import img4 from '@a/images/01_09.png'
import img5 from '@a/images/01_11.png'


export default class ScreenAfter extends Component {
    constructor(){
        super();
        this.state={
            isVariety:true
        }
    }
    render() {
        return (
            <ScreenWrap>
                <HeaderNoBg></HeaderNoBg>
                <div className="screen-wrap">
                    <Search></Search>
                    <ChangeFilter isVariety={this.state.isVariety} />
                    <div className="petForSale">
                        <h2>宠物待售</h2>
                        <div className="pet_img">
                            <div className="img_box">
                                <img src={timg} alt=""/>
                            </div>
                            <div className="img_box">
                                <img src={timg} alt=""/>
                            </div>
                            <div className="img_box">
                                <img src={timg} alt=""/>
                            </div>
                        </div>
                        <div className="detail_box">
                            <h3>宠物详细</h3>
                            <p>出售纯种健康宠物猫布偶猫<br/>支持上门挑选送货上门</p>
                            <div>
                                <span>价格:</span>
                                <span>3000</span>
                                <span>元/只</span>
                            </div>
                            <ul>
                                <li>
                                    在售只数<span>8</span>只
                                </li>
                                <li>
                                    年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄<span>3</span>个月
                                </li>
                                <li>
                                    品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种<span>布偶猫</span>
                                </li>
                                <li>
                                    性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别<span>公母都有</span>
                                </li>
                                <li>
                                    驱虫情况<span>已驱虫</span>
                                </li>
                            </ul>
                        </div>
                        <div className="buy_process">
                            <div className="title_bg clear_fix">
                                <span></span>
                                <span></span>
                            </div>
                            <h3 className="tit_h3">购物流程</h3>
                            <div className="process_box">
                                <div className="process_container clear_fix">
                                    <div className="float_left">
                                        <div>
                                            <h4>01</h4>
                                            <img src={img1} alt=""/>
                                        </div>
                                        <h4>快速发货</h4>
                                    </div>
                                    <div className="float_left">
                                        <div>
                                            <h4>02</h4>
                                            <img src={img2} alt=""/>
                                        </div>
                                        <h4>快速发货</h4>
                                    </div>
                                    <div className="float_left">
                                        <div>
                                            <h4>03</h4>
                                            <img src={img3} alt=""/>
                                        </div>
                                        <h4>快速发货</h4>
                                    </div>
                                    <div className="float_left">
                                        <div>
                                            <h4>04</h4>
                                            <img src={img4} alt=""/>
                                        </div>
                                        <h4>快速发货</h4>
                                    </div>
                                    <div className="float_left">
                                        <div>
                                            <h4>05</h4>
                                            <img src={img5} alt=""/>
                                        </div>
                                        <h4>快速发货</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pet_security">
                            <div className="title_bg clear_fix">
                                <span></span>
                                <span></span>
                            </div>
                            <h3 className="tit_h3">宠物保障</h3>
                            <p>自家繁育,品质保障</p>
                            <div className="security_detail clear_fix">
                                <ul className="float_left">
                                    <li>保健康</li>
                                    <li>保纯种</li>
                                    <li>保售后</li>
                                </ul>
                                <div className="float_left">
                                    <p>出售的每一只爱宠都是做好疫苗,经过健康检测在去新家的,客户收到爱宠经检测如出现(猫瘟,狗瘟,鼻支传腹)出示检测结果便可调换同等价位的爱宠</p>
                                    <p>爱宠均有血统证书,购买后经鉴定不纯种,我们将翻倍赔偿</p>
                                    <p>终身售后指导饲养,我们有专业的饲养医疗团队,手把手教您饲养及预防,让您养宠无忧.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pet_footer clear_fix">
                            <span></span>
                            <span>选doooc·品质放心</span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <Link></Link>
                <Footer></Footer>
            </ScreenWrap>
        )
    }
}
