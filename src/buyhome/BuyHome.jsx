
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
  }
  async getList(){
    let result = await get({
      url: 'http://123.56.160.44:8080/clothes/findAllByClothesPetTypeOrderByClothesIdDesc/1'
    })
    this.setState({
      cate: result.data.data.slice(0,4)
    })
  }
  componentDidMount() {
    this.getList()
  }
  



  render() {
    return (
      <Container>
        <BuyBanner></BuyBanner>
        <AllGoods
          cate = {this.state.cate}
        ></AllGoods>
        <footer>
          <Link></Link>
          <Footer></Footer>
        </footer>
      </Container>
    );
  }
}

