
import React, { Component } from 'react';
import {get} from '@u/http'

import {
  Container
} from './StyledBuyHome'

import BuyBanner from './BuyBanner'
import AllGoods from './AllGoods'
import Footer from '@c/footer/Footer.jsx'
import Link from '@c/link/Link.jsx'

export default class BuyHome extends Component {

  state = {
    cate: null,
    cate2: null,
    cate3: null,
  }

   getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
    }
    return shuffled.slice(min);
    }
    async getFood(){
      let result2 = await get({
        url:'http://123.56.160.44:8080/food/list'
      })
      this.setState({
        /* cate: result.data.data.slice(0,4) */
        cate2:this.getRandomArrayElements( result2.data.content,4) ,//再写两个的变量
      })
    }



  async getList(){
    let result = await get({
      url:'http://123.56.160.44:8080/clothes/findAllByClothesPetTypeOrderByClothesIdDesc/1'
    })
    this.setState({
      /* cate: result.data.data.slice(0,4) */
      cate:this.getRandomArrayElements( result.data.data,4) ,//再写两个的变量
    })
  }
  componentDidMount() {
    this.getFood()
    this.getList()
  /*   this.getList('http://123.56.160.44:8080/food/list') */
    //写三个getList（食品）（日用品）（市场）
  }
  



  render() {
    return (
      <Container>
        <BuyBanner></BuyBanner>
        <AllGoods
          cate = {this.state.cate}
          cate2 = {this.state.cate2}
         /*  historys={this.props.history} */
        ></AllGoods>
        <footer>
          <Link></Link>
          <Footer></Footer>
        </footer>
      </Container>
    );
  }
}

