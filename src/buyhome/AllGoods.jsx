import React from 'react'

import img1 from '@a/images/buyhome/petscan.png'
import img2 from '@a/images/buyhome/petseat.png'
import img3 from '@a/images/buyhome/petsmac.png'
import img11 from '@a/images/buyhome/11.jpg'
import img22 from '@a/images/buyhome/22.jpg'
import hotimg from '@a/images/buyhome/hotimg.png'


import {
    AllGoodsWrap
} from './StyledBuyHome'

/* export default class AllGoods extends Component {
    render() {
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
                        <div className="img-box">
                            <img src={img11} alt="" />
                            <span>宝路妙险包成犬通用湿狗粮</span>
                        </div>
                        <div className="img-box">
                            <img src={img22} alt="" />
                            <span>宝路妙险包成犬通用湿狗粮</span>
                        </div>
                        <div className="img-box">
                            <img src={img11} alt="" />
                            <span>宝路妙险包成犬通用湿狗粮</span>
                        </div>
                        <div className="img-box">
                            <img src={img22} alt="" />
                            <span>宝路妙险包成犬通用湿狗粮</span>
                        </div>
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
                        <div className="img-box">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>小佩MINI喂食器宠物猫咪英短猫自动喂食定时自动喂食器猫咪日用品</h1>
                            <span>￥699.00</span>
                            <p>已售8</p>
                        </div>
                        <div className="img-box">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>小佩MINI喂食器宠物猫咪英短猫自动喂食定时自动喂食器猫咪日用品</h1>
                            <span>￥699.00</span>
                            <p>已售8</p>
                        </div>
                        <div className="img-box">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>小佩MINI喂食器宠物猫咪英短猫自动喂食定时自动喂食器猫咪日用品</h1>
                            <span>￥699.00</span>
                            <p>已售8</p>
                        </div>
                        <div className="img-box">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>小佩MINI喂食器宠物猫咪英短猫自动喂食定时自动喂食器猫咪日用品</h1>
                            <span>￥699.00</span>
                            <p>已售8</p>
                        </div>

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
                            <span>Click >></span>
                        </div>
                        <div className="imgbox">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>波斯猫</h1>
                            <span>Click >></span>
                        </div>
                        <div className="imgbox">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>波斯猫</h1>
                            <span>Click >></span>
                        </div>
                        <div className="imgbox">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>波斯猫</h1>
                            <span>Click >></span>
                        </div>
                    </div>

                </div>


            </AllGoodsWrap>
        )
    }
} */



const AllGoods = (props) => {
        let cate = props.cate
        console.log(cate);
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
                        <div className="img-box">
                            <img src={img11} alt="" />
                            <span>宝路妙险包成犬通用湿狗粮</span>
                        </div>
                        <div className="img-box">
                            <img src={img22} alt="" />
                            <span>宝路妙险包成犬通用湿狗粮</span>
                        </div>
                        <div className="img-box">
                            <img src={img11} alt="" />
                            <span>宝路妙险包成犬通用湿狗粮</span>
                        </div>
                        <div className="img-box">
                            <img src={img22} alt="" />
                            <span>宝路妙险包成犬通用湿狗粮</span>
                        </div>
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
                                <div key={value.clothesId} className="img-box">
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
                            <span>Click >></span>
                        </div>
                        <div className="imgbox">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>波斯猫</h1>
                            <span>Click >></span>
                        </div>
                        <div className="imgbox">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>波斯猫</h1>
                            <span>Click >></span>
                        </div>
                        <div className="imgbox">
                            <div className="topimg">
                                <img src={img11} alt="" />
                            </div>
                            <h1>波斯猫</h1>
                            <span>Click >></span>
                        </div>
                    </div>

                </div>


            </AllGoodsWrap>
        );
}

export default AllGoods