import React, { Component } from 'react';
import { Breadcrumb, Pagination } from 'antd';
import GoodDetail from './GoodDetail'
import PageButton from './PageButton'

import {
    Container
} from './StyledDaily'

import { get } from '@u/http'

class Daily extends Component {
     constructor(props){
        super(props);
        this.pageNext=this.pageNext.bind(this);
        this.setPage=this.setPage.bind(this);
        this.state = {
            indexList:[],//当前渲染的页面数据
            totalData:[],
            current: 1, //当前页码
            pageSize:10, //每页显示的条数
            goValue:0,  //要去的条数index
            totalPage:0,//总页数
            current: 1,
            list:[]
        };

    }



    async componentDidMount() {
        let result = await get({
            url: 'http://123.56.160.44:8080/clothes/findAllByClothesPetTypeOrderByClothesIdDesc/1'
        })

        console.log(result.data.data); 

        this.setState({
            list: result.data.data,
            totalPage:Math.ceil( result.data.data.length/this.state.pageSize),

        })
        this.pageNext(this.state.goValue)
    }
    
    //设置内容
    setPage(num){
        this.setState({
            indexList:this.state.list.slice(num,num+this.state.pageSize)
        })
    }

    pageNext (num) {
        this.setPage(num)
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
                        indexList={this.state.indexList}
                    ></GoodDetail>            
                    <>
                        <Pagination current={this.state.current} onChange={this.onChange} total={this.state.totalPage} />
                      {/*  <PageButton
                       { ...this.state } pageNext={this.pageNext}
                       ></PageButton> */}
                    </>
                </div>

                <footer></footer>
            </Container>
        );
    }
}

export default Daily;