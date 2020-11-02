import React, { Component } from 'react';

import{
    NoVarietyWrap
} from './StyledPetMarket'
import HeaderNoPg from '@c/header/HeaderNoPg'

import Display from '@m/petMarket/Display'

import Search from './Search'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'

class NoVariety extends Component {
    constructor(props){
        super(props)
        this.handleClickDown=this.handleClickDown.bind(this);
    }
    handleClickDown(isVariety){
        return()=>{
            this.props.callback(isVariety)
        }
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <NoVarietyWrap>
                <HeaderNoPg></HeaderNoPg>
                <div className="bg"></div>
                <div className="noVariety">
                    <Search></Search>
                    <ul>
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
                            <span></span>
                        </li>
                    </ul>
                </div>
                <Display></Display>
                <Link></Link>
                <Footer></Footer>
            </NoVarietyWrap>
        );
    }
}

export default NoVariety;