import React, { Component } from 'react';
import Header from '@c/header/Header.jsx'
import Footer from '@c/footer/Footer.jsx'
import Link from '@c/link/Link.jsx'
import navImg from '@a/images/Trainning/nav_03.png'


import {
    Container
} from './StyledCold'

class ColdKnow extends Component {
    render() {
        return (
            < Container>
                <header>
                    <Header></Header>
                
                    <nav>
                        <ul>
                            <li>
                                <img src={navImg} alt="" />
                                <span>疾病</span>
                            </li>
                            <li>
                                <img src={navImg} alt="" />
                                <span>养护</span>
                            </li>
                            <li>
                                <img src={navImg} alt="" />
                                <span>训练</span>
                            </li>
                        </ul>
                        <ul></ul>
                        <ul>
                            <li>
                                <img src={navImg} alt="" />
                                <span>医疗</span>
                            </li>
                            <li>
                                <img src={navImg} alt="" />
                                <span>冷知识</span>
                            </li>
                            <li>
                                <img src={navImg} alt="" />
                                <span>联系我们</span>
                            </li>
                        </ul>
                    </nav>
                    </header>
                <div className="contain">

                </div>


                <footer>
                    <Link></Link>
                    <Footer></Footer>
                </footer>
            </ Container>
        );
    }
}

export default ColdKnow;