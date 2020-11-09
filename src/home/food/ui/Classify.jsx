import React, { Component } from 'react';

class Classify extends Component {
  render() {
    return (
      <div className="center">
        <ul>
          <li>分类：</li>
          <li className="active1">喵喵</li>
          <li>旺旺</li>
        </ul>
        <ul>
          <li>价格：</li>
          <li className="active1">全部</li>
          <li>￥0-50</li>
          <li>￥51-100</li>
          <li>￥101-200</li>
          <li>￥201-500</li>
        </ul>
        <nav>
          <li>排序</li>
          <li className="active1">默认<span>⬇</span></li>
          <li>价格<span>⬇</span></li>
          <li>销量<span>⬇</span></li>
        </nav>
      </div>
    );
  }
}

export default Classify;