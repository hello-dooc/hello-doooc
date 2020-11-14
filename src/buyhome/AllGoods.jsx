import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import img1 from '@a/images/buyhome/petscan.png'
import img2 from '@a/images/buyhome/petseat.png'
import img3 from '@a/images/buyhome/petsmac.png'
import img11 from '@a/images/buyhome/11.jpg'
import img22 from '@a/images/buyhome/22.jpg'
import hotimg from '@a/images/buyhome/hotimg.png'

import {
    AllGoodsWrap
} from './StyledBuyHome'

/* function handleClick(){
    console.log(this.props)
}
 */


/* const AllGoods = (props) => {
        let cate = props.cate
        console.log(cate); */
@withRouter
class AllGoods extends Component {
    state = {
        datalist: [
            {
                "Id":1,
                "imgUrl": "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
                "name": "小青菜350g",
                "newprice": "4.5",
                "oldprice": "4.9",
                "checked": false,
                "count": 1
            },

            {
                "Id":2,
                "imgUrl": "https://img.wochu.cn/upload/abbc6852-711f-4d09-8e61-216c13505ccd.jpg",
                "name": "洪湖渔家香辣大闸蟹500g",
                "newprice": "15.9",
                "oldprice": "39.9",
                "checked": false,
                "count": 1

            },
            {
                "Id":3,
                "imgUrl": "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
                "name": "小青菜350g",
                "newprice": "4.5",
                "oldprice": "4.8",
                "checked": false,
                "count": 1
            },
            {
                "Id":4,
                "imgUrl": "https://img.wochu.cn/upload/abbc6852-711f-4d09-8e61-216c13505ccd.jpg",
                "name": "洪湖渔家香辣大闸蟹500g",
                "newprice": "15.9",
                "oldprice": "39.9",
                "checked": false,
                "count": 1
            },
        ],
    }

    handleClick = (data, type) => {
        return () => {
            console.log(this.props.history)
            this.props.history.push('/goodsdetail/' + type, { data })

        }//不写return的话，下面有（）这个函数就会立即执行
    }
    //下面三个根据不同的click传不同的type

    render() {
        let cate = this.props.cate
        let cate2 = this.props.cate2
        console.log(cate2)
        return (
                    <AllGoodsWrap>
                        <div className="foodbox">
                            <div className="pets-title">
                                <span>
                            一 &nbsp;<img src={img1} alt="" />
                                    &nbsp;宠物食品 一
                                </span>
                                <p>Pet Food</p>
                            </div>
                            <div className="pet-food">
                                {
                                    cate2 && cate2.map(value=>{
                                        return(
                                            <div className="img-box" key={value.id}>
                                                <img src={value.image} alt="" />
                                                <span>{value.name}</span>
                                            </div>
                                        )
                                    }) 
                                }
                            </div>
                        </div>
        
                        <div className="commodilies">
                            <div className="pets-title">
                                <span>
                        一 &nbsp;<img src={img2} alt="" />
                                    &nbsp;宠物日用品 一
                                </span>
                                <p>Pet Commodilies</p>
                            </div>
                            <div className="pet-commodilies">
                              {     
                                   cate && cate.map(value => {
                                      return (
                                        <div key={value.clothesId} className="img-box" onClick={this.handleClick(value,"clothes")}>
                                            <div className="topimg">
                                                <img src={value.clothesImage} alt="" />
                                            </div>
                                            <h1>小佩MINI喂食器宠物猫咪英短猫自动喂食定时自动喂食器猫咪日用品</h1>
                                            <span>￥{value.clothesPrice}</span>
                                            <p>已售8</p>
                                        </div>
                                      )
                                  })   
                              }
                            </div>
                        </div>
        
                        <div className="marketbox">
                            <div className="pets-title">
                                <span>
                        一 &nbsp;<img src={img3} alt="" />
                                    &nbsp;宠物市场 一
                                </span>
                                <p>Pet Market</p>
                            </div>
                            <div className="hot">
                                <span>HOT</span>
                                <img src={hotimg} alt="" />
                            </div>
                            <div className="pet-market">
                                <div className="imgbox">
                                    <div className="topimg">
                                        <img src={img11} alt="" />
                                    </div>
                                    <h1>波斯猫</h1>
                                    <span>Click &gt;&gt;</span>
                                </div>
                                <div className="imgbox">
                                    <div className="topimg">
                                        <img src={img11} alt="" />
                                    </div>
                                    <h1>波斯猫</h1>
                                    <span>Click &gt;&gt;</span>
                                </div>
                                <div className="imgbox">
                                    <div className="topimg">
                                        <img src={img11} alt="" />
                                    </div>
                                    <h1>波斯猫</h1>
                                    <span>Click &gt;&gt;</span>
                                </div>
                                <div className="imgbox">
                                    <div className="topimg">
                                        <img src={img11} alt="" />
                                    </div>
                                    <h1>波斯猫</h1>
                                    <span>Click &gt;&gt;</span>
                                </div>
                            </div>
        
                        </div>
        
        
                    </AllGoodsWrap >
                );
    }
}
export default AllGoods;
