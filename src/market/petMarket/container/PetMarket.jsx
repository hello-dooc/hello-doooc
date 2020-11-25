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
            pType:1,
            petList:[],
            pageSize:6,
            totalPage:1,
            current:1,
            petShow:[],
            isChange:false
        }
        this.handleClickDown=this.handleClickDown.bind(this);
    }
    changePetType=(pType)=>{
        this.setState({
            pType,
            isChange:true
        },()=>{
            // console.log(this.state.petType);
        })
    } 
    handleClickDown(isVariety){
        return()=>{
            this.props.callback(isVariety)
        }
    }
    getpetList= async (pet,pn)=>{
        let result = await get({
            url:`http://10.9.12.250:8088/${pet}`
        })
        console.log(result);
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
        this.setPage(1,2);
    }
    setPage=(num,pagenum)=>{
        this.setState({
            petShow:this.state.petList.slice(num,num+this.state.pageSize),
            pagenum
        })
    }
    changeStatus=()=>{
        this.setState({
            isChange:false
        })
    }
    componentDidMount(){
        this.getpetList('petcatmarket/findAll','Cat')
    }
    render() {
        let cn = 'cat-wrap'
        let dn = 'dog-wrap'
        return (
            <PetWrap 
                style={{
                    background:this.state.pType===2?`url(${display_bg}) no-repeat`:'',
                    backgroundSize:this.state.pType===2?'cover':''
                }}
            >
                <HeaderNoBg></HeaderNoBg>
                <div style={{height:'60px'}}>
                    <BuySearch></BuySearch>
                </div>
                <div className="bg"></div>
                <div className={this.state.pType===1||this.state.pType===3?cn:dn}>
                    <ChangeFilter pType={this.state.pType} getpetList={this.getpetList}  changePetType={this.changePetType} isVariety={this.props.isVariety} />
                </div>
                <Display {...this.state} setPage={this.setPage}  changeStatus={this.changeStatus}></Display>
                <Link style={{background:this.state.pType===1?`url(${v_footer}) no-repeat`:'#4c4c4c'}}></Link>
                <Footer></Footer>
            </PetWrap>
        );
    }
}

export default NoFilter;