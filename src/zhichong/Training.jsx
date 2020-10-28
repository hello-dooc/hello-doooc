import React, { Component } from 'react';

import navImg from '../assets/images/nav_03.png'

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
                    <div className="banner">
                        
                    </div>
                </div>
            </Container>
        );
    }
}

export default Training;