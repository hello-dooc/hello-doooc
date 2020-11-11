import React,{ useCallback, useState} from 'react'
import { useHistory} from 'react-router-dom'
import Header from '@c/header/Header'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'
import { DiseaseWrap } from './StyleDisease'

import banner from '@a/images/banner_dog.png'
import heart from '@a/images/heart_03.jpg'
import dog_disease from '@a/images/dog_disease_03.jpg'
import disease_bg from '@a/images/disease_bg_03.jpg'

const Disease=() => {
    const history = useHistory()
    const handleClick = useCallback((url)=>{
        return ()=>{
            history.push(url)
        }
    },[])

    return (
        <DiseaseWrap>
            <Header ht="503px" bg={banner}></Header>
            <div className="dis_tab clear_fix">
                <div className="tit_wrap">
                    <ul className="tit_left">
                        <li onClick={handleClick('/disease')}>疾病</li>
                        <li onClick={handleClick('/love')}>养护</li>
                        <li onClick={handleClick('/training')}>训练</li>
                    </ul>
                    <div>
                        <p>知宠</p>
                        <p>zhichong</p>
                        <img src={heart} alt=""/>
                    </div>
                    <ul className="tit_right">
                        <li onClick={handleClick('')}>医疗</li>
                        <li onClick={handleClick('/answer')}>冷知识</li>
                        <li onClick={handleClick('')}>联系我们</li>
                    </ul>
                </div>
            </div>
            <div className="dis-wrap">
                <p>世界那么大，而我只有你</p>
                <p>The world is so big, and I only have you.</p>
                <div className="dog_disease clear_fix">
                    <div className="dog_left float_left">
                        <div className="dog_container">
                            <li>注射狂犬疫苗需要注意什么</li>
                            <li>得了狂犬病的人有什么症状</li>
                            <li>狗狗感冒了怎么办?</li>
                            <li>狗狗感冒的症状及治疗方法</li>
                            <li>狗狗发烧的症状及治疗方法</li>
                        </div>
                    </div>
                    <div className="dog_img float_left">
                        <h3>狗狗常见疾病</h3>
                        <img src={dog_disease} alt=""/>
                    </div>
                </div>
                <div className="cat_disease clear_fix">
                    <div className="cat_img float_left">
                        <h3>猫猫常见疾病</h3>
                    </div>
                    <div className="cat_left float_right">
                        <div className="cat_container">
                            <li>猫咪的了弓形虫病 怎么办</li>
                            <li>如 何 防 治 猫 腹 泻 </li>
                            <li>猫咪得了猫癣怎么办</li>
                            <li>猫发出咕咕声 什么原因引起的</li>
                            <li>猫不能吃什么</li>
                        </div>
                    </div>
                </div>
                <div className="dog_news">
                    <h3>最新狗训</h3>
                    <ul>
                        <li>&gt;&gt;&nbsp;【吉娃娃犬】吉娃娃到底会长到多大？</li>
                        <li>&gt;&gt;&nbsp;【阿富汗猎犬】阿富汗犬狗狗眼角膜发炎</li>
                        <li>&gt;&gt;&nbsp;【苏格兰牧羊犬】狗狗膀胱结石的预防及</li>
                        <li>&gt;&gt;&nbsp;【恩特布山地犬】成犬狗狗的基本护理知识有哪些？</li>
                        <li>&gt;&gt;&nbsp;【瓷器犬】老犬的基本护理知识有哪些？</li>
                        <li>&gt;&gt;&nbsp;【比熊犬】狗狗季节流行病该怎么预防？</li>
                        <li>&gt;&gt;&nbsp;【大白熊犬】狗狗患脓皮症怎么办？</li>
                        <li>&gt;&gt;&nbsp;【西伯利亚雪橇犬】哈士奇得皮肤湿疹如何处理？</li>
                        <li>&gt;&gt;&nbsp;【巴吉度猎犬】狗狗患皮肤病的处理方法有哪些？</li>
                        <li>&gt;&gt;&nbsp;【约克夏】狗狗夏天怎么避暑呢？</li>
                    </ul>
                </div>
            </div>
            <Link outerbg={disease_bg}></Link>
            <Footer></Footer>
        </DiseaseWrap>
    )
}

export default Disease
