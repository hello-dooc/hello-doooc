
import React from 'react'
import { useHistory } from 'react-router-dom'
// import list1 from '@a/images/cadfc367d9263412d9ac9356f53f3b97.jpg'



const List = (props) => {
  const history = useHistory()
  const jump = (id) => {
    history.push('/goodsdetail', { id , from: '/list'})
  }
  return (
        <div className="center">
          <ol>
            {
              props.list.length>0 && props.list.map(item => {
                  return(
                    <li key={item.id} onClick={() => jump(item.id)}>
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