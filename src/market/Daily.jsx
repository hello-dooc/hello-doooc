import React, { Component } from 'react';
import { Breadcrumb, Pagination } from 'antd';
import GoodDetail from './GoodDetail'

import {
    Container
} from './StyledDaily'

import { get } from '@u/http'

class Daily extends Component {
    state = {
        current: 1,
        list:null
    };

    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
    };

    async componentDidMount() {
        let result = await get({
            url: 'http://123.56.160.44:8080/clothes/findAllByClothesPetTypeOrderByClothesIdDesc/1'
        })

        console.log(result.data.data);
        this.setState({
          list: result.data.data
        })

    }

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
                    <GoodDetail
                        list={this.state.list}
                    ></GoodDetail>            
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