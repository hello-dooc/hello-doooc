import React, { Component } from 'react'
import {FilterUpWrap} from '../StyledPetMarket'
import {get} from '@u/http.js'
export default class FilterUp extends Component {
    state={
        type:'喵喵',
        petTypeList:[]
    }
    handleChooseType=()=>{
        return(e)=>{
            let pType=1
            if(e.target.innerHTML==='喵喵') {
                this.setState({
                    type:'喵喵'
                },()=>{
                    this.getPetTypeList()
                    this.props.getpetList&&this.props.getpetList('petcatmarket/findAll','Cat')
                })
                pType=1;
            }else if(e.target.innerHTML==='汪汪') {
                this.setState({
                    type:'汪汪'
                },()=>{
                    this.getPetTypeList()
                    this.props.getpetList&&this.props.getpetList('petdogmarket/findAll','Dog')
                })
                pType=2;
            }
            this.props.changePetType&&this.props.changePetType(pType)
        }
    }
    
    async getPetTypeList(){
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
        }
    }
    handleClickDown=(isVariety)=>{
        return ()=>{
            this.props.callback(isVariety)
            this.getPetTypeList()
        }
    }
    componentDidMount(){
        this.getPetTypeList()
    }
    render() {
        return (
            <FilterUpWrap>
                <li>
                    <span>宠物商城</span>
                    <span>&gt;</span>
                    <span>宠物市场</span>
                </li>
                <li>
                    <span>分类:</span>
                    <span onClick={this.handleChooseType()}>喵喵</span>
                    <span onClick={this.handleChooseType()}>汪汪</span>
                </li>
                <span></span>
                <li>
                    <span onClick={this.handleClickDown(true)}>显示筛选器</span>
                    <span onClick={this.handleClickDown(true)}></span>
                </li>
            </FilterUpWrap>
        )
    }
}
