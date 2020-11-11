import React, { Component } from 'react';
import { Breadcrumb, Pagination } from 'antd';
import GoodDetail from './GoodDetail'
import Footer from '@c/footer/Footer'
import Link from '@c/link/Link'
import BuySearch from '../../buyhome/BuySearch'
import HeaderNoBg from '@c/header/HeaderNoBg'


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
                "ads": "Clothes",
                "sptype": "clothes"
            },
            {
                "id": "2",
                "name": "餐具",
                "des": "foodtool",
                "ads": "Food",
                "sptype": "food"
            },
            {
                "id": "3",
                "name": "清洁",
                "des": "cleaning",
                "ads": "Clean",
                "sptype": "clean"
            },
            {
                "id": "4",
                "name": "玩具",
                "des": "play",
                "ads": "Play",
                "sptype": "play"
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
                "name": "￥201-500",
                "price1": "201",
                "price2": "500"
            },

        ]
    },

];

const sortList = [
    {
        "id": "1",
        "name": "价格 ↓",
        "sort": "Price",
        "sortValue": "PriceDesc"
    },
    {
        "id": "2",
        "name": "价格 ↑",
        "sort": "Price",
        "sortValue": "PriceAsc"
    },
    {
        "id": "3",
        "name": "销量 ↓",
        "sort": "SellCount",
        "sortValue": "SellCountDesc"
    },
    {
        "id": "4",
        "name": "销量 ↑",
        "sort": "SellCount",
        "sortValue": "SellCountAsc"
    },
]

class Daily extends Component {
    state = {
        type: 1,
        price1: 0,
        price2: 10000,
        des: "clothes",
        ads: "Clothes",
        sptype: "clothes",
        sortValue: "PriceDesc",
        sort: "Price",
        sign: false,
        valueSign: true,
        list: [],

        current: 1,
        pageSize: 10,
        goValue: 0,
        indexList: [],
        totalPage: 0,
    };

    //分页器
    onChange = page => {
        console.log(page);
        this.setState(
            { current: page },
            () => { this.getData(this.state.current) }
        )
    };

    //猫狗数据测试
    listStatus = (item) => {
        console.log(item);
        //品种 
        if (item.PetType !== undefined) {
            // console.log(111);
            this.setState(
                {
                    type: item.PetType,
                    current: 1
                },
                () => { this.getData(this.state.type) }
            );
        }
        //价格
        if (item.price1 !== undefined && item.price2 !== undefined) {
            // console.log(222);
            this.setState(
                {
                    price1: item.price1,
                    price2: item.price2,
                    current: 1
                },
                () => { this.getData(this.state.price1, this.state.price2) }
            )
        }
        //分类
        if (item.des !== undefined && item.ads !== undefined && item.sptype !== undefined) {
            // console.log(333);
            // console.log(this.state.sort);
            this.setState(
                {
                    des: item.des,
                    ads: item.ads,
                    sign: item.des === 'foodtool' ? true : false,
                    sptype: item.sptype,
                    current: 1,
                    valueSign: (item.ads === 'Food' || this.state.sort === 'Price') ? true : false,
                },
                () => { this.getData(this.state.des, this.state.ads, this.state.sptype, this.state.valueSign) }
            )
        }
        //排序
        if (item.sortValue !== undefined && this.state.ads !== undefined) {
            // console.log(444);
            this.setState(
                {
                    sortValue: item.sortValue,
                    sort: item.sort,
                    valueSign: (this.state.ads === 'Food' || item.sort === 'Price') ? true : false,
                },
                () => { this.getData(this.state.sortValue, this.state.valueSign) }
            )
        }
    }

    //请求数据函数
    async getData() {
        let result = await get({
            url: 'http://123.56.160.44:8080/'
                + this.state.des + '/findAllBy'
                + this.state.ads + 'PetTypeAnd'
                + this.state.ads + 'PriceBetween'
                + (this.state.sign ? 'And' : '')
                + 'Order' + (this.state.valueSign ? 'By' : '') + this.state.ads
                + this.state.sortValue + '/' + this.state.type
                + '/' + this.state.price1 + '/'
                + this.state.price2,
        })

        let list = result.data.data;
        // console.log(this.state.valueSign);
        // let indexList = list.slice((this.state.current-1)*this.state.pageSize,this.state.current*this.state.pageSize)
        list = list.reduce((arr, value) => {
            value.sptype = this.state.sptype
            arr.push(value)
            return arr;
        }, []);
        // console.log(list);
        this.setState({
            list,
            indexList: list.slice((this.state.current - 1) * this.state.pageSize, this.state.current * this.state.pageSize)
        })
        // console.log(this.state.indexList);

    }

    //请求数据，第一次渲染
    async componentDidMount() {
        this.getData(this.state.type, this.state.price1, this.state.price2, this.state.des, this.state.ads, this.state.decs, this.state.current)
    };

    render() {
        return (
            <Container>
                <HeaderNoBg></HeaderNoBg>
                <div className="nav">
                    <div style={{ height: '110px' }}>
                        <BuySearch></BuySearch>
                    </div>
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
                        {
                            sortList.map((value, key) => {
                                return (
                                    <li key={value.id} onClick={(e) => this.listStatus(value)}>{value.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="goods">
                    <GoodDetail
                        indexList={this.state.indexList}
                    ></GoodDetail>
                    <>
                        <Pagination
                            current={this.state.current}
                            onChange={this.onChange}
                            total={this.state.list.length} />
                    </>
                </div>
                <Link></Link>
                <Footer></Footer>
            </Container>
        );
    }
}

export default Daily;