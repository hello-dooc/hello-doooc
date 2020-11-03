import React, { Component } from 'react';

import list1 from '@a/images/cadfc367d9263412d9ac9356f53f3b97.jpg'

import { Pagination } from 'antd';

const List = (props) => {
  console.log(props)
  props.list && props.list.map(item => {
    return(
      <div className="center">
        <ol>
          <li>
            <img src={list1} alt=""/>
            <p>
              <span>满99减20</span>
              <span className="title">111111111111111111111111</span>
            </p>
            <p className="price">￥22</p>
            <p>
              <del>￥299</del>
              <del>已售</del>
            </p>
          </li>
        </ol>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    )
  })
}

export default List;