import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'

import {
    OrderDetailWrap
} from './styledgoodorder'
import { InputNumber } from 'antd';

 import gouliang from '@a/images/goodsdetail/timg3N38CJXS.jpg'; 

import { Select } from 'antd';
const { Option } = Select;
@withRouter
class OrderDetail extends Component {
        state = {
            datalist:[
                {
                    "imgUrl":"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
                    "name": "小青菜350g",
                    "newprice" : "4.5",
                    "oldprice" : "4.9",
                    "checked" :false,
                    "count" :1
                },
            
                {
                    "imgUrl":"https://img.wochu.cn/upload/abbc6852-711f-4d09-8e61-216c13505ccd.jpg",
                    "name": "洪湖渔家香辣大闸蟹500g",
                    "newprice" : "15.9",
                    "oldprice" : "39.9",
                    "checked" :false,
                    "count" :1
            
                },
                {
                    "imgUrl":"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
                    "name": "小青菜350g",
                    "newprice" : "4.5",
                    "oldprice" : "4.8",
                    "checked" :false,
                    "count" :1
            
                },
            ],
            all : false,
            one : false,
            totalPrice:0,
            totalcount:1,
            sumprice :0,
            sumcount:0,
            value:1
        }



  
      handleChange(value) {
        console.log(`selected ${value}`);
    }

    componentDidMount(){
        /* console.log(this.props.location.state.data); 
        const spdata = this.props.location.state.data; */
    }

    handleAdd(index){
        // 设定的value= {this.state.datalist[index].count}
        var list = [...this.state.datalist]
        list[index].count++;
        list[index].newprice = ((list[index].count)*(list[index].oldprice)).toFixed(2)
        
        this.setState({
            datalist : list,
        })
       
        this.SumPrice()
       
    }
    handleMinus(index){
        // 设定的value= {this.state.datalist[index].count}
        var list = [...this.state.datalist];
        list[index].count--
        list[index].count=list[index].count<1?1:list[index].count; 
        list[index].newprice = ((list[index].count)*(list[index].oldprice)).toFixed(2)
        this.setState({
            datalist : list
        })

        this.SumPrice()
    }
   /*  SumPrice(){
        var sum=0
        var count = 0;
        var list = [...this.state.datalist]
        for(var i =0; i< list.length ;i++){
                sum += list[i].newprice
                count += list[i].count
        }
        this.setState({
            sumprice : sum,
            sumcount : count //结算个数
        })
    } */
    SumPrice=()=>{
        var sum=0
        var num = 0
        this.state.datalist.forEach((ele,index)=>{
             sum+=ele.count*ele.newprice
             num+=ele.count
        })
        this.setState({
            sumprice:sum.toFixed(2),
            sumcount:num
        })
    }

     textValue=(e,i)=>{
        this.setState({
            datalist:this.state.datalist.map((ele,index)=>{
                if(index===i){
                    ele.count=e.target.value
                    return ele
                }else {
                    return ele
                }
            })
        })
        console.log(this.state.datalist[i].count)
        this.SumPrice()
    } 

    render() {
      /*  const spdate = this.props.location.state.data;
       const sptype = this.props.location.pathname.substr(11)
       console.log(sptype)  */
        return (
            <OrderDetailWrap>
                <div className="select-lo">
                    <p>
                        <span>用户名</span>
                        <span>13875412549</span>
                    </p>
                </div>
                <div className="select-ad">
                    选择地址:
                </div>
                <div className="search-item">
                    <Select defaultValue="lucy" style={{ width: 223 }} onChange={this.handleChange.bind(this)}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">那你那你那</Option>
                        <Option value="disabled" >
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>

            {
                this.state.datalist.map((item,index)=>{
                    return(
                   <div key={item.oldprice} style={{minHeight:250}}>
                        <div className="good-detail">
                            <div className="img-box">
                                <img src={item.imgUrl} alt="" />
                            </div>
                        </div>
        
                        <div className="right-box">
                            <h1>{item.name}</h1>
                            <div className="prinum">
                                <h2>￥{item.oldprice}</h2>
                                <h3>X {item.count}</h3>
                            </div>
                            <div className="select-num">
                                <p>购买数量</p>
                                <div className="button-num">
                                    <button className="minus" onClick={()=>{this.handleMinus(index)}}>-</button>
                                    <input className="putvalue" type="text"  value={item.count} onChange={(e)=>{this.textValue(e,index)}}/>
                                    <button className="add" onClick={()=>{this.handleAdd(index)}}>+</button>
                                </div>
                            </div>
                            <div className="count-box">
                                <p >合计￥{item.newprice}</p>
                            </div> 
                        </div>
                   </div>
                    )
                })
            }
            
            <div className="sumprice">总价:￥{this.state.sumprice}</div> 
            
           
            </OrderDetailWrap>
        );
    }
}

export default OrderDetail;