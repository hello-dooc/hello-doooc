
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

  @withRouter
class List extends Component{
  jump = (data) => {
    return () => {
        console.log(this.props.history)
        this.props.history.push('/goodsdetail', { data })
    }
}


render(){


  return (
        <div className="center">
          <ol>
            {
              this.props.list.length && this.props.list.map(item => {
                  return(
                    <li key={item.id}  onClick={this.jump(item.id)}>
                    {/* <li key={item.id}  onClick={() => this.props.history.push(item.id)}> */}
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
  }
export default List;