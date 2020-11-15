import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {get,put,post} from '@u/http'
import Axios from 'axios';
import qs from 'qs'

import {
    OrderDetailWrap
} from './styledgoodorder'


import { Select } from 'antd';
const { Option } = Select;
@withRouter
class OrderDetail extends Component {

        state = {
        
            adresslist:[],
            sumprice :0,
            sumcount:0,
            value:1,
            datalist:[],
            adress:null
        }
  
      handleChange(value){
              console.log(value);
              this.setState({
                 adress:value
             }) 
          }
    
   /*  handleSelect=(item)=>{
       return(e)=>{
           console.log(item);
           console.log(e);
       }
    }
 */

    async getAdress(){
        Axios.defaults.headers.common['token'] = 'token_123456'
        let result = await get({
          url:'http://123.56.160.44:8080/user/address/list'
        })
        console.log(result);
        this.setState(
            {adresslist:result.data.data,
            adress:result.data.data[0].userAddressId
                
            },
        )   
      }

    async updateCar(cartId,goodsNum){
        Axios.defaults.headers.common['token'] = 'token_123456'
        let result = await put({
            url:'http://123.56.160.44:8080/cart/update',
            params:{
                cartId,
                goodsNum,
                cartStatus:1
            }
        })
        // let params={
        //     cartId,
        //     goodsNum,
        //     cartStatus:1
        // }
        // console.log(qs.stringify(params))
        // let result = await put('http://123.56.160.44:8080/cart/update',qs.stringify(params))
        console.log(result)
        this.getData()
        //  this.setState(
        //     ()=>{this.getData()}
        // ) 
      }

      async getData(){
        Axios.defaults.headers.common['token'] = 'token_123456'
                let result = await get({
                    url:'http://123.56.160.44:8080/cart/list'
                })
        console.log(result);
        this.setState({
            datalist:result.data.data,
           /*  sumprice :0, */
        })   
      }

      async createOrder(orderAddressInfo){
        let params={
            orderAddressInfo
        } 
        Axios.defaults.headers.common['token'] = 'token_123456'
        let result = await post('http://123.56.160.44:8080/order/create',qs.stringify(params))
        console.log(result)
        console.log(params)
        console.log(qs.stringify(params))
        this.props.history.push('/order')
      }

    componentDidMount(){
        this.getAdress();
        this.getData()
    }

    handleAdd(index){
        var list = [...this.state.datalist]
        list[index].goodsNum++;
        this.updateCar(list[index].cartId,list[index].goodsNum);
        
        // this.setState(
        //     ()=>{this.updateCar(list[index].cartId,list[index].goodsNum)}
        // )
       
       
    }
    handleMinus(index){
        // 设定的value= {this.state.datalist[index].count}
        var list = [...this.state.datalist];
        list[index].goodsNum--
        list[index].goodsNum=list[index].goodsNum<1?1:list[index].goodsNum; 
       /*  list[index].goodsPrice = ((list[index].goodsNum)*(list[index].goodsDTO.goodsPrice)).toFixed(2)
        this.setState({
            datalist : list
        }) */
        this.updateCar(list[index].cartId,list[index].goodsNum)
        // this.setState(
        //     ()=>{this.updateCar(list[index].cartId,list[index].goodsNum)}
        // )
        // this.SumPrice()
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
        const adlist = this.state.adresslist
        // const a =(this.state.aaaa.province+this.state.aaaa.city+this.state.aaaa.addressDetail)+''
        // let a = adlist[0] && adlist[0].province+adlist[0].city+adlist[0].addressDetail
        // console.log(a);
       /*  console.log(adlist);
        console.log(adlist[2] && (adlist[2].province+adlist[2].city+adlist[2].addressDetail+"")); */
        return (
            <OrderDetailWrap>
                <div className="select-lo">
                    <p>
                        <span>用户名</span>
                        <span>{adlist[0] && adlist[0].userName}</span>
                    </p>
                </div>
                <div className="select-ad">
                    选择地址:
                </div>
                <div className="search-item">
                    <Select defaultValue={adlist[2] && (adlist[2].province+adlist[2].city+adlist[2].addressDetail)+""} key={adlist[2]&&adlist[2].userAddressId} style={{ width: 223 }} onChange={this.handleChange.bind(this)} >
                        {
                            adlist && adlist.map(value =>{
                               /*  console.log(value.province+value.city+value.addressDetail); */
                                return (
                                <Option key={value.province+value.city+value.addressDetail} value={value.userAddressId} >{value.province+value.city+value.addressDetail}</Option>
                                )
                            })
                        }
                    </Select>
                </div>

            {
                this.state.sumprice=0,
                this.state.datalist && this.state.datalist.map((item,index)=>{
                    this.state.sumprice+=item.goodsPrice;
                    return(
                   <div key={item.cartId} style={{minHeight:250}}>
                        <div className="good-detail">
                            <div className="img-box">
                                <img src={item.goodsDTO.goodsImage} alt="" />
                            </div>
                        </div>
        
                        <div className="right-box">
                            <h1>{item.goodsDTO.goodsName}</h1>
                            <div className="prinum">
                                <h2>￥{item.goodsDTO.goodsPrice}</h2>
                                <h3>X {item.goodsNum}</h3>
                            </div>
                            <div className="select-num">
                                <p>购买数量</p>
                                <div className="button-num">
                                    <button className="minus" onClick={()=>{this.handleMinus(index)}}>-</button>
                                    <input className="putvalue" type="text"  value={item.goodsNum} onChange={(e)=>{this.textValue(e,index)}}/>
                                    <button className="add" onClick={()=>{this.handleAdd(index)}}>+</button>
                                </div>
                            </div>
                            <div className="count-box">
                                <p onClick={()=>this.handleSubmit()}>合计￥{item.goodsPrice}</p>
                            </div> 
                        </div>
                   </div>
                    )
                })
            }
            
            <div className="sumprice">总价:￥{this.state.sumprice}
            
                {console.log(this.state.adress),
                <p onClick={()=>this.createOrder(this.state.adress)}>提交待付款</p>}
            
            </div> 
            
           
            </OrderDetailWrap>
        );
    }
}

export default OrderDetail;