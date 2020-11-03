import React, { Component } from 'react';

class Head extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className="center" {...this.props}>
          <ul>
            <li className="active">首页</li>
            <li>商城</li>
            <li>知宠</li>
          </ul>
          <h1>logo</h1>
        </div>
      </div>
    );
  }
}

export default Head;