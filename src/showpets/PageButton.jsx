import React, { Component } from 'react';
import {
    PageButtonWrap
  } from './styledshowpets'

class PageButton extends Component {
    

     constructor(props) {
        super(props);
       this.setNext=this.setNext.bind(this);
        this.setUp=this.setUp.bind(this); 
        this.state={
            num: 0,
            pagenum:this.props.current
        }
    }

    //下一页
    setNext(){
        if(this.state.pagenum < this.props.totalPage){
            this.setState({
                num:this.state.num + this.props.pageSize,
                pagenum:this.state.pagenum + 1
            },function () {
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }

    //上一页
    setUp(){
        if(this.state.pagenum > 1){
            this.setState({
                num:this.state.num - this.props.pageSize,
                pagenum:this.state.pagenum - 1
            },function () {
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }
 



    render() {
        return (
            <PageButtonWrap>
                <div className="button-box">
                    <div className="left-button"  onClick= { this.setUp} > 上一页</div>
                    <div className="middle-box"> { this.state.pagenum } 页/  { this.props.totalPage } 页</div>
                    <div className="left-button"  onClick={ this.setNext } >下一页</div>
                </div>
            </PageButtonWrap>
        );
    }
}

export default PageButton;