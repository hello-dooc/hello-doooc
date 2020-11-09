import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {get} from '@u/http.js'

import { FilterWrap }from '../StyledPetMarket'
@withRouter
class Filter extends Component {
    state={
        type:'喵喵',
        petTypeList:[],
        petType:1,
        petSex:'',
        petAge:0,
    }
    handleClickUp=(isVariety)=>{
        return()=>{
            this.props.callback(isVariety)
        }
    }
    handleChooseType=(isVariety)=>{
        return (e)=>{
            let pType=1
            if(e.target.innerHTML==='喵喵') {
                this.setState({
                    type:'喵喵'
                },()=>{
                    pType=1;
                    this.props.getpetList&&this.props.getpetList('petcatmarket/findAll','Cat')
                    this.getPetTypeList()
                })   
                
            }else if(e.target.innerHTML==='汪汪') {
                this.setState({
                    type:'汪汪'
                },()=>{
                    pType=2;
                    this.props.getpetList&&this.props.getpetList('petdogmarket/findAll','Dog')
                    this.getPetTypeList()
                })
            }else{
                this.setState({
                    type:'全部'
                },()=>{
                    pType=1
                    this.props.getpetList&&this.props.getpetList('allpet/list','')
                    this.getPetTypeList()
                })
            }
            this.props.changePetType&&this.props.changePetType(pType,0)
            // this.getPetTypeList()
            this.props.callback(isVariety)
        }
    }
    async getPetTypeList(){
        // let result1 = await get({
        //     url:'/api/petType'
        // })
        if(this.state.type==="喵喵"){
            let result = await get({
                url:'http://123.56.160.44:8080/petcatmarket/findAllCategory'
            })
            let list = result.data.data
            var arr = list.reduce((arr,value)=>{
                value.category='cat'
                value.n='x';
                arr.push(value)
                return arr
            },[])
            this.setState({
                petTypeList:arr
            })
        }else if(this.state.type==="汪汪"){
            let result1 = await get({
                url:'http://123.56.160.44:8080/petdogmarket/findAllCategory'
            })
            let list1 = result1.data.data
            var arr1 = list1.reduce((arr,value)=>{
                value.category='dog'
                value.n='y';
                arr.push(value)
                return arr
            },[])
            this.setState({
                petTypeList:arr1
            })
        }else{
            let result = await get({
                url:'http://123.56.160.44:8080/petcatmarket/findAllCategory'
            })
            let list = result.data.data
            var arr = list.reduce((arr,value)=>{
                value.category='cat'
                value.n='x';
                arr.push(value)
                return arr
            },[])
            let result1 = await get({
                url:'http://123.56.160.44:8080/petdogmarket/findAllCategory'
            })
            let list1 = result1.data.data
            var arr1 = list1.reduce((arr,value)=>{
                value.category='dog'
                value.n='y';
                arr.push(value)
                return arr
            },[])
            this.setState({
                petTypeList:[
                    ...arr,
                    ...arr1
                ]
            })
        }
        console.log(arr,arr1);
    }
    handleType=(petType)=>{
        return ()=>{
            this.setState({
                petType
            })
        }
    }
    handleSex=(petSex)=>{
        return ()=>{
            this.setState({
                petSex
            })
        }
    }
    handleAge=(petAge)=>{
        return ()=>{
            this.setState({
                petAge
            },()=>{
                console.log(this.state.petType,this.state.petSex,this.state.petAge);
                if(this.state.petType && this.state.petSex && this.state.petAge!==null){
                    this.props.history.push('/screen')
                }
            })
        }
    }
    handleClick=()=>{
        this.props.history.push('/buy')
    }
    componentDidMount(){
        this.getPetTypeList()
    }
    render() {
        return (
            <FilterWrap>
                <li>
                    <span onClick={this.handleClick}>宠物商城</span>
                    <span>&gt;</span>
                    <span>宠物市场</span>
                </li>
                <li>
                    <span>分类:</span>
                    <span onClick={this.handleChooseType(true)}>全部</span>
                    <span onClick={this.handleChooseType(true)}>喵喵</span>
                    <span onClick={this.handleChooseType(true)}>汪汪</span>
                </li>
                <span></span>
                <li className="clear_fix"> 
                    <span><i>{this.state.type}</i>品种</span>
                    <span><i>{this.state.type}</i>性别</span>
                    <span><i>{this.state.type}</i>年龄</span>
                    <div className="float_right">
                        <span onClick={this.handleClickUp(false)}>收起筛选器</span>
                        <span></span>
                    </div>
                </li>
                <div className="classify clear_fix">
                    <ul className="pet_variety float_left">
                        {
                            this.state.petTypeList.map(value=>{
                                return(
                                    <li key={value[value.category+'CategoryId']+value.n} onClick={this.handleType(value[value.category+'CategoryId'])}>{value[value.category+'CategoryName']}</li>
                                )
                            })
                        }
                    </ul>
                    <ul className="pet_sex float_left">
                        <li onClick={this.handleSex('GG')}>哥哥</li>
                        <li onClick={this.handleSex('MM')}>妹妹</li>
                    </ul>
                    <ul className="pet_age float_left">
                        <li onClick={this.handleAge(0)}>幼年</li>
                        <li onClick={this.handleAge(1)}>成年</li>
                    </ul>
                </div>
                <li>
                    <span onClick={this.handleClickUp(false)}>收起筛选器</span>
                    <span></span>
                </li>
            </FilterWrap>
        )
    }
}
export default Filter