import React, { Component } from 'react';
import { Breadcrumb, Pagination } from 'antd';
import GoodDetail from './GoodDetail'

import {
    Container
} from './StyledDaily'

import { get } from '@u/http'

//nav数组
const navList = [
    {
        "title": "分类",
        "des": " ",
        "list": [
            {
                "id": "1",
                "name": "服饰",
                "des": "clothes",
                "ads": "Clothes"
            },
            {
                "id": "2",
                "name": "餐具",
                "des": "foodtool",
                "ads": "Food"
            },
            {
                "id": "3",
                "name": "清洁",
                "des": "cleaning",
                "ads": "Clean"
            },
            {
                "id": "4",
                "name": "玩具",
                "des": "play",
                "ads": "Play"
            }
        ]
    },
    {
        "title": "品种",
        "des": "PetType",
        "list": [
            {
                "id": "1",
                "name": "喵喵",
                "PetType": "1"
            },
            {
                "id": "2",
                "name": "汪汪",
                "PetType": "2"
            }
        ]
    },
    {
        "title": "价格",
        "des": "PriceBetween",
        "list": [
            {
                "id": "1",
                "name": "全部",
                "price1": "0",
                "price2": "10000"
            },
            {
                "id": "2",
                "name": "￥0-50",
                "price1": "0",
                "price2": "50"
            },
            {
                "id": "3",
                "name": "￥51-100",
                "price1": "51",
                "price2": "100"
            },
            {
                "id": "4",
                "name": "￥101-200",
                "price1": "101",
                "price2": "200"
            },
            {
                "id": "5",
                "name": "￥200-500",
                "price1": "200",
                "price2": "500"
            },

        ]
    },
];



class Daily extends Component {
    state = {
        current: 1,
        type: 1,
        list: []
    };

    //分页器
    onChange = page => {
        console.log(page);
        this.setState({
            current: page
        });
    };

    //猫狗数据测试
    listStatus = (item) => {
        console.log(item);
        console.log(this.state.type);
        if(item.PetType!==undefined){
            console.log(111);
            this.setState(
                { type: item.PetType },
                () => { this.getData(this.state.type) }
                );
        }
        // this.setState(
        //     {type:item.PetType},
        //     ()=>{this.getData(this.state.type)}
        //     );
    }

    //请求数据函数
    async getData() {
        // console.log(this.state.type);
        let result = await get({
            url: 'http://123.56.160.44:8080/clothes/findAllByClothesPetTypeOrderByClothesIdDesc/' + this.state.type
        })
        this.setState({
            list: result.data.data
        })
    }

    //请求数据，第一次渲染
    async componentDidMount() {
        this.getData(this.state.type)
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
                        {
                            navList.map((value, key) => {
                                // console.log(value,key);
                                return (
                                    <li key={value.des}>
                                        <i>{value.title}</i>
                                        {
                                            value.list.map((value1, key1) => {
                                                // console.log(value1,key1);
                                                return (
                                                    <span key={value1.id} onClick={(e) => this.listStatus(value1)}>{value1.name}</span>
                                                )
                                            })
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="priceSort">
                        <i>排序:</i>
                        <li>价格<span> ↓</span></li>
                        <li>销量<span> ↓</span></li>
                    </ul>
                </div>

                <div className="goods">
                    <GoodDetail
                        list={this.state.list}
                    ></GoodDetail>
                    <>
                        <Pagination current={this.state.current} onChange={this.onChange} total={31} />
                    </>
                </div>

                <footer></footer>
            </Container>
        );
    }
}

export default Daily;