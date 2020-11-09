import React, { Component } from 'react';

import list1 from '@a/images/cadfc367d9263412d9ac9356f53f3b97.jpg'

import { Pagination } from 'antd';

const List = (props) => {
  console.log(props)
  return (
        <div className="center">
          <ol>
            {
              props.list.length>0 && props.list.map(item => {
                  return(
                    <li key={item.clothesId}>
                      <img src={item.clothesImage} alt=""/>
                      <p>
                        <span>{item.clothesDiscount}</span>
                        <span className="title">{item.clothesName}</span>
                      </p>
                      <p className="price">￥{item.clothesPrice}</p>
                      <p>
                        <del>￥{item.clothesPrice}</del>
                        <del>已售{item.clothesCount}</del>
                      </p>
                    </li>
                  )
              })
            }
          </ol>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      ) 
}

export default List;