import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'

import touxiang from '@a/images/goodsdetail/touxiang.jpg';
/* import gouliang from '@a/images/goodsdetail/timg3N38CJXS.jpg'; */
import Header from '@c/header/Header.jsx'
import Footer from '@c/footer/Footer.jsx'
import Link from '@c/link/Link.jsx'
import DetailMiddle from './DetailMiddle'

import {
    Container
  } from './styledgoodsdetail'

@withRouter
class GoodsDetail extends Component {
   /*  handleClick = ()=>{
        this.props.history.goBack()
    } */
    
    state = {
        current:"goodsdetail"
    }

    /* 取路由里的/后的那个单词赋值给current */
    componentDidMount=()=>{
        let pathname = this.props.location.pathname
       let moren = pathname.split("/") 
        let path = moren.slice(1,2)
        console.log(pathname)
        console.log(moren)
        console.log(path[0])
        this.setState({
            current:path[0]
        })
    }
    render() {

      console.log(this.state.current) 
        return (
            <Container>
                <header>
                   {/*  <Header></Header> */}
                </header>

                <div className="detail-con">
                    <div className="detail-wrap">
                        <div className="detail-left">
                            <img src={touxiang} alt=""/>
                        </div>
                        <div className="detail-middle">
                            <span>宠物详情</span>
                        </div>
                        <div className="detail-right">

                      {this.state.current ==="goodsdetail" ?  <DetailMiddle {...this.props}></DetailMiddle>:""}
                       
                        
                        </div>
                    </div>
                </div>


                <footer>
                    <Link></Link>
                    <Footer></Footer>
                </footer>
            </Container>
        );
    }
}

export default GoodsDetail;