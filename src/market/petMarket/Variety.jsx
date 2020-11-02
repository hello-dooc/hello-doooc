import React, { Component } from 'react'

// import {get} from '@u/http.js'

import { VarietyWrap }from './StyledPetMarket'
import HeaderNoPg from '@c/header/HeaderNoPg'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'
import Display from '@m/petMarket/Display'

import Search from './Search'

export default class Variety extends Component {
    constructor(props){
        super(props)
        this.handleDown=this.handleClickUp.bind(this)
    }
    handleClickUp(isVariety){
        return()=>{
            this.props.callback(isVariety)
        }
    }
    componentDidMount(){
    }
    render() {
        return (
            <VarietyWrap>
                <HeaderNoPg></HeaderNoPg>
                <div className="variety-wrap">
                    <Search></Search>
                    <ul>
                        <li>
                            <span>宠物商城</span>
                            <span>&gt;</span>
                            <span>宠物市场</span>
                        </li>
                        <li>
                            <span>分类:</span>
                            <span>全部</span>
                            <span>喵喵</span>
                            <span>汪汪</span>
                        </li>
                        <span></span>
                        <li className="clear_fix"> 
                            <span><i>汪汪</i>品种</span>
                            <span><i>汪汪</i>性别</span>
                            <span><i>汪汪</i>年龄</span>
                            <div className="float_right">
                                <span onClick={this.handleClickUp(false)}>收起筛选器</span>
                                <span></span>
                            </div>
                        </li>
                        <div className="classify clear_fix">
                            <ul className="pet_variety float_left">
                                <li>博美犬</li>
                            </ul>
                            <ul className="pet_sex float_left">
                                <li>哥哥</li>
                            </ul>
                            <ul className="pet_age float_left">
                                <li>幼年</li>
                            </ul>
                        </div>
                        <li>
                            <span onClick={this.handleClickUp(false)}>收起筛选器</span>
                            <span></span>
                        </li>
                    </ul>
                </div>
                <Display></Display>
                <Link></Link>
                <Footer></Footer>
            </VarietyWrap>
        )
    }
}
