import React from 'react'

import Header from '@c/header/Header'
import banner from '@a/images/banner_dog.png'
const Disease=() => {
    return (
        <div>
            <div className="dis-wrap">
                <Header ht="503px" bg={banner}></Header>
                <div className="dis_tab clear_fix">
                    <ul className="tit_left">
                        <li>疾病</li>
                        <li>养护</li>
                        <li>训练</li>
                    </ul>
                    <ul className="tit_right">
                        <li>医疗</li>
                        <li>冷知识</li>
                        <li>联系我们</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Disease
