import React, { Component } from 'react';

import{
    PetWrap
} from '../StyledPetMarket'
import HeaderNoBg from '@c/header/HeaderNoBg'

import Display from '@m/petMarket/ui/Display'
import {get} from '@u/http.js'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'
import ChangeFilter from '../ui/ChangeFilter'
import BuySearch from '@b/BuySearch'
import v_footer from '@a/images/variety_footer_02.png'
import display_bg from '@a/images/display_bg_01.png'

class NoFilter extends Component {
    constructor(props){
        super(props)
        this.state={
            petType:1,
            petList:[],
            pageSize:6,
            totalPage:1,
            current:1,
            petShow:[],
            goValue:0,
        }
        this.handleClickDown=this.handleClickDown.bind(this);
    }
    changePetType=(petType)=>{
        this.setState({
            petType,
        })
    } 
    handleClickDown(isVariety){
        return()=>{
            this.props.callback(isVariety)
        }
    }
    getpetList= async (pet,pn)=>{
        let result = await get({
            url:`http://123.56.160.44:8080/${pet}`
        })
        let list = result.data.data
        if(pn){
            let n3='x'
            let arr = list.reduce((arr,value)=>{
                value.pn=pn;
                value.n=n3
                arr.push(value)
                return arr
            },[])
            this.setState({
                petList:arr,
                totalPage:Math.ceil( arr.length/this.state.pageSize)
            })
        }else{
            let n1 = 'y';
            let n2='z';
            let arr1 = list[0].data.reduce((arr,value)=>{
                value.pn='Cat';
                value.n=n1;
                arr.push(value)
                return arr
            },[])
            let arr2 = list[1].data.reduce((arr,value)=>{
                value.pn='Dog';
                value.n=n2
                arr.push(value)
                return arr
            },[])
            let arr = [
                ...arr1,
                ...arr2
            ]
            this.setState({
                petList:arr,
                totalPage:Math.ceil( arr.length/this.state.pageSize)
            })
        }
        this.setPage(this.state.goValue);
    }
    setPage=(num,pagenum)=>{
        this.setState({
            petShow:this.state.petList.slice(num,num+this.state.pageSize),
            pagenum
        })
    }
    componentDidMount(){
        this.getpetList('petcatmarket/findAll','Cat')
    }
    render() {
        let cn = 'cat-wrap'
        let dn = 'dog-wrap'
        return (
            <PetWrap style={{background:this.state.petType===2?`url(${display_bg}) no-repeat`:''}}>
                <HeaderNoBg></HeaderNoBg>
                <div className="bg"></div>
                <div className={this.state.petType===1?cn:dn}>
                    <div style={{height:'108px'}}>
                        <BuySearch></BuySearch>
                    </div>
                    <ChangeFilter getpetList={this.getpetList}  changePetType={this.changePetType} isVariety={this.props.isVariety} />
                </div>
                <Display {...this.state} setPage={this.setPage} ></Display>
                <Link style={{background:this.state.petType===1?`url(${v_footer}) no-repeat`:'#4c4c4c'}}></Link>
                <Footer></Footer>
            </PetWrap>
        );
    }
}

export default NoFilter;