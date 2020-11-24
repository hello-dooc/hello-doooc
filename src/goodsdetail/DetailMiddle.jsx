import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { get, post } from '@u/http'
import Axios from 'axios'
import qs from 'qs'
import {getToken} from '@u/cookies'

import {
    DetailMiddleWrap
} from './styledgoodsdetail'

@withRouter
class DetailMiddle extends Component {
    state = {
        foodId: this.props.location.state.data,
        list: [],
        /*   goodstypeid: 1, */
        dailylist: [],
        isshow: 0,

    }
    handleClick = () => {
        this.props.history.goBack()
    };
    /* 获取点击进来的商品数据 */
    async getData() {
        let result = await get({
            url: 'http://10.9.12.250:8088/food/detail',
            params: {
                foodId: this.state.foodId
            }
        })
        this.setState({
            list: result.data.data,
            /*  foodId: result.data.data.goodsTypeId, */
            isshow: 1
        })
    };

    componentDidMount() {
            this.getData()
    };
    /* 添加到购物车 */
    async addCar(goodsTypeId, goodsId) {
        let params = {
            goodsTypeId,
            goodsId
        }
        let token = getToken()
        console.log(token);
        Axios.defaults.headers.common['token'] = token
        /* Axios.defaults.headers.common['token'] = 'token_123456' */
        let result = await post('http://10.9.12.250:8088/cart/add', qs.stringify(params))
        console.log(result)
        console.log(params)
        console.log(qs.stringify(params))
        console.log(this.props.history)
        this.props.history.push('/shoppingCart')
    };

    render() {
        /*  const foodId = this.props.location.state.data */
        console.log(this.props.location.state.data)
        let foodata = this.state.list
        let dailydata = this.props.location.state.data
        let sptype = this.props.location.state.data.sptype
        console.log(dailydata)
        console.log(foodata)
        console.log(sptype)
        let goodstype 
        switch(sptype){
            case "clothes":
                 goodstype = 4;
                 break;
            case "food":
                 goodstype = 7;
                break;
            case "clean":
                goodstype = 5;
                break;
            case "play":
                goodstype = 6;
                break;
        }
        console.log(goodstype)
        return (
            < DetailMiddleWrap>
                <div className="detail-box">
                    <div className="left-box">
                        <span onClick={this.handleClick}></span>

                    </div>

                    {
                        foodata ? (
                            <>
                                <div className="middle-box">
                                    <img src="" alt="" />

                                </div>
                                <div className="right-box">
                                    <h1>商品详细</h1>
                                    <h2>{foodata && foodata.name}</h2>
                                    <h3>{foodata && foodata.description}</h3>
                                    <ul>
                                        <li>
                                            <span>试用阶段</span>
                                            <span>{foodata && foodata.state}</span>
                                        </li>
                                        <li>
                                            <span>口味</span>
                                            <span>{foodata && foodata.taste}</span>
                                        </li>
                                        <li>
                                            <span>生产地址</span>
                                            <span>{foodata && foodata.from}</span>
                                        </li>
                                        <li>
                                            <span>重量</span>
                                            <span>{foodata && foodata.weight}</span>
                                        </li>
                                        <li>
                                            <span>保质期</span>
                                            <span>{foodata && foodata.expiration}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="putcar" onClick={() => this.addCar(1, foodata && foodata.id)}>
                                    加入购物车
                                </div>
                            </>
                        ) :

                            <>
                                <div className="middle-box">
                                    <img src={sptype ? dailydata[sptype+'Image']:dailydata.clothesImage} alt="" />

                                </div>
                                <div className="right-box">
                                    <h1>宠物日用品详情</h1>
                                    <h2>{sptype ? dailydata[sptype+'Name']:dailydata.clothesName}</h2>
                                    <h3>{sptype ? dailydata[sptype+'Desc']:dailydata.clothesDesc}</h3>
                                    <ul>
                                        <li>
                                            <span>价格</span>
                                            <span>{sptype ? dailydata[sptype+'Price']:dailydata.clothesPrice}</span>
                                        </li>
                                        <li>
                                            <span>口味</span>
                                            <span>{sptype ? dailydata[sptype+'Discount']:dailydata.clothesDiscount}</span>
                                        </li>
                                        <li>
                                            <span>生产地址</span>
                                            <span>{sptype ? dailydata[sptype+'Count']: dailydata.clothesCount}</span>
                                        </li>
                                        <li>
                                            <span>重量</span>
                                            <span>{sptype ? dailydata[sptype+'Count']: dailydata.clothesCount}</span>
                                        </li>
                                        <li>
                                            <span>保质期</span>
                                            <span>{sptype ? dailydata[sptype+'Count']: dailydata.clothesCount}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="putcar" onClick={() => this.addCar(sptype ? goodstype:4, sptype ? dailydata[sptype+'Id']:dailydata.clothesId)}>
                                    加入购物车
                        </div>
                            </>



                    }











                </div>

            </ DetailMiddleWrap>
        );
    }
}

export default DetailMiddle;