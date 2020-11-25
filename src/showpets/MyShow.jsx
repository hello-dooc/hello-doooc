import React, { Component } from 'react';

import {
    MyShowWrap
  } from './styledshowpets'

  import PageButton from './PageButton'
  import {get} from '@u/http'

class MyShow extends Component {
    
  
    constructor(props){
        super(props);
        this.pageNext=this.pageNext.bind(this);
        this.setPage=this.setPage.bind(this);
        this.state = {
            indexList:[],//当前渲染的页面数据
            totalData:[],
            current: 1, //当前页码
            pageSize:4, //每页显示的条数
            goValue:0,  //要去的条数index
            totalPage:0,//总页数
        };

    }
      async getList(){
        let result = await get({
          url: 'http://123.56.160.44:8080/clothes/findAllByClothesPetTypeOrderByClothesIdDesc/1'
        })
        this.setState({
            totalData: result.data.data,
            totalPage:Math.ceil( result.data.data.length/this.state.pageSize),
        })
        this.pageNext(this.state.goValue)
      }
      componentDidMount() {
        this.getList()
      }
      
      

    //设置内容
    setPage(num){
        this.setState({
            indexList:this.state.totalData.slice(num,num+this.state.pageSize)
        })
    }

    pageNext (num) {
        this.setPage(num)
    }

    

    render() {
      /*  console.log(this.state.totalData)
       console.log(this.state.totalPage)
      console.log(this.state.indexList) */
        return (
            <MyShowWrap>
                <div className="imgbox">
                    {
                        this.state.indexList && this.state.indexList.map(value=>{
                            return(

                                <div key={value.clothesId} className="topimg">
                                    <img src={value.clothesImage} alt=""/>
                                </div>
                            )
                        })
                    }
                   
                </div>

                <PageButton {...this.state} pageNext={this.pageNext}></PageButton>
            </MyShowWrap>
        );
    }
}

export default MyShow;