import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  SearchOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
@withRouter
class Search extends Component {
  handleGotoOthers=(url)=>{
    return ()=>{
        this.props.history.push(url)
    }
  }
  render() {
    return (
      <div>
        <div className="center">
          <form action="">
            <input type="text" placeholder="搜索商品"/>
            <button><SearchOutlined /></button>
          </form>
          <div className="shoppingCart">
            <p className="shopcart"><ShoppingCartOutlined /></p>
            <p className="shopnum">购物车(<span>0</span>)</p>
          </div>
          <ul>
            <li className="active" onClick={this.handleGotoOthers('/foodMarket')}>宠物食品</li>
            <li onClick={this.handleGotoOthers('/daily')}>宠物日用</li>
            <li onClick={this.handleGotoOthers('/petMarket')}>宠物市场</li>
          </ul>
          <ol>
            <li>宠物商城</li>
            <span> > </span>
            <li>宠物食品</li>
            <span> > </span>
            <li>宠物主粮</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;