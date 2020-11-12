import React, { Component } from 'react';
// import DetailInfo from '../components/Detail/DetailInfo';
import { InputNumber , Select  } from 'antd';

import {
    HCart
} from './StyledCartH'

class CartH extends Component {
    
    state={
        totalPrice:0
    };

    onNumberChange=(id)=>{
        return (value)=>{
            console.log(id);
            console.log(value);
        }
    };
    
    onOptionChange=(value)=>{
        return (tasteName)=>{
            console.log(tasteName);
            console.log(value);
        }
    }

    onDelete=(item)=>{
        console.log(item);
    }
    handleChange=(item)=>{
        return (e)=>{
            console.log(item);
            console.log(e);
        }
    }

    render() {
        // console.log(this.props.goodsList);
        const { Option } = Select;
        return (
            <HCart>
                <div className="goods">
                    {
                        this.props.goodsList && this.props.goodsList.map(value=>{
                            this.state.totalPrice+=value.goodsPrice;
                            // console.log(this.state.totalPrice);
                            return(
                            <div key={value.cartId} className="shopDetails" >
                                <img src={value.goodsDTO.goodsImage} alt="" />
                                <span className="shopName">{value.goodsDTO.goodsName}</span>
                                <i>RMB &nbsp;{value.goodsDTO.goodsPrice}</i>
                                <InputNumber min={1} defaultValue={value.goodsNum} style={{ width:50,height:30 }} onChange={this.onNumberChange(value.cartId)}/>
                                <i style={{visibility:value.selectGoodsTaste? "":"hidden"}}>口味</i>
                                
                                <>
                                    <Select defaultValue={value.selectGoodsTaste?value.selectGoodsTaste[0].tasteName:""} style={{ width: 80,height:30,visibility:value.selectGoodsTaste? "":"hidden"}} onChange={this.onOptionChange(value)}>
                                {
                                    value.selectGoodsTaste && value.selectGoodsTaste.map(value1=>{
                                        return (
                                            <Option value={value1.tasteName} key={value1.tasteId}>{ value1.tasteName }</Option>
                                        )
                                    })
                                }
                                    </Select>
                                </>
                                
                                {/* <i onClick={(e)=>this.onDelete(value)}>删除</i> */}
                                <i onClick={this.handleChange(value)}>删除</i>

                            </div>
                            )
                        })
                    }
                </div>
                <div className="pay">
                    <i>合计：  RMB &nbsp; {this.state.totalPrice}</i>
                    <button>提&nbsp; 交&nbsp; 订&nbsp; 单</button>
                </div>
            </HCart>
        );
    }
}

export default CartH;