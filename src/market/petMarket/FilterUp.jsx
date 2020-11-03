import React, { Component } from 'react'
import {FilterUpWrap} from './StyledPetMarket'
export default class FilterUp extends Component {
    constructor(props){
        super(props)
        this.handleClickUp=this.handleClickDown.bind(this);
    }
    handleClickDown(isVariety){
        return()=>{
            this.props.callback(isVariety)
        }
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
                    <span>喵喵</span>
                    <span>汪汪</span>
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
