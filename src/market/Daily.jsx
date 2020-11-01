import React, { Component } from 'react';
import { Breadcrumb,Pagination } from 'antd';

import {
    Container
} from './StyledDaily'

import cs from '@a/images/market/ceshi.jpg'

class Daily extends Component {
    state = {
        current: 1,
      };
    
      onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
      };
    render() {
        return (
            <Container>
                <header>123</header>
                <div className="nav">
                    <div className="search">123456</div>
                    <>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>宠物商城</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/src/shoppingCart/ShoppingCartH.jsx">宠物食品</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>宠物主粮</Breadcrumb.Item>
                        </Breadcrumb>
                    </>   
                    <ul className="classification">
                        <li>
                            <i>分类:</i>
                            <span>服饰</span>
                            <span>餐具</span>
                            <span>清洁</span>
                            <span>玩具</span>
                        </li>
                        <li>
                            <i>品种:</i>
                            <span>喵喵</span>
                            <span>汪汪</span>
                        </li>
                        <li>
                            <i>价格:</i>
                            <span>全部</span>
                            <span>￥0-50</span>
                            <span>￥51-100</span>
                            <span>￥101-200</span>
                            <span>￥201-500</span>
                        </li>
                    </ul>
                    <ul className="priceSort">
                        <i>排序:</i>
                        <li>默认<span> ↓</span></li>
                        <li>价格<span> ↓</span></li>
                        <li>销量<span> ↓</span></li>
                    </ul>
                </div>    
                <div className="goods">
                    <div className="goodsList">
                        <div className="oneGood">
                            <img src={cs} alt=""/>
                            <div>
                                <h2>满99减20</h2>
                                <p>麦富迪  双拼标准颗粒成犬粮10KG</p>
                            </div>
                            <div>
                                <h3>￥290</h3>
                                <i>已售2345</i>
                            </div>
                        </div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                        <div className="oneGood"></div>
                    </div>
                    <>
                        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
                    </>
                </div> 
                <footer></footer>         
            </Container>
        );
    }
}

export default Daily;