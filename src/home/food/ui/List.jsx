import React, { Component } from 'react';

import list1 from '@a/images/cadfc367d9263412d9ac9356f53f3b97.jpg'

import { Pagination } from 'antd';

const List = (props) => {
  return (
        <div className="center">
          <ol>
            {
              props.list.length>0 && props.list.map(item => {
                  return(
                    <li key={item.id}>
                      <img src={item.image} alt=""/>
                      <p>
                        <span>满99减20</span>
                        <span className="title">{item.name}</span>
                      </p>
                      <p className="price">￥{item.originalPrice}</p>
                      <p>
                        <del>￥{item.salePrice}</del>
                        <del>已售{item.sales}</del>
                      </p>
                    </li>
                  )
              })
            }
          </ol>
          
        </div>
      ) 
}

export default List;