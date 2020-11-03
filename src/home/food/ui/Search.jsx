import React, { Component } from 'react';
import {
  SearchOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

class Search extends Component {
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
            <li className="active">宠物食品</li>
            <li>宠物日用</li>
            <li>宠物市场</li>
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