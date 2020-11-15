import React, { useState,useEffect} from 'react';
import { Breadcrumb , Pagination  } from 'antd';
import { get } from '@u/http1'
import List from './List'

import HeaderNoBg from '@c/header/HeaderNoBg'

import Link from '@c/link/Link'
import StyledLink from '@c/link/StyledLink'

import Footer from '@c/footer/Footer'

import StyledFooter from '@c/footer/StyledFooter'

import BuySearch from '../../../buyhome/BuySearch'

import {
  ClassifyStyle,
  ListStyle
} from './StyledFood'

import linkimg from '@a/images/底栏.jpg'

const navList = [
  {
    "title": "分类",
    "des": 1,
    "list": [
      {
        "id": "1",
        "name": "主粮",
      },
      {
        "id": "2",
        "name": "零食",
      },
      {
        "id": "3",
        "name": "保健",
      }
    ]
  },
  {
    "title": "品种",
    "des": 2,
    "list": [
      {
        "id": "1",
        "name": "喵喵",
      },
      {
        "id": "2",
        "name": "汪汪",
      }
    ]
  },
  {
    "title": "价格",
    "des": 3,
    "list": [
      {
        "id": "1",
        "name": "全部",
      },
      {
        "id": "2",
        "name": "￥0-50",
      },
      {
        "id": "3",
        "name": "￥51-100",
      },
      {
        "id": "4",
        "name": "￥101-200",
      },
      {
        "id": "5",
        "name": "￥201-500",
      },
    ]
  },
];


const FoodUi = (props) => {
  let [list, setList] = useState([])

    useEffect(() => {
    async function loadData() {
      let result = await get({
        url:'http://123.56.160.44:8080/food/list',
        params:{
          priceArea:shopprice,
          sort:changesort,
          type: shoptype,
          variety: shopvariety,
          page: shoppage,
        }
      })
      setList(result.data.content)
      console.log(result)
    }
    loadData()
  }, [])


  let [shoptype, settype] = useState(1)
  let [shopvariety, setvariety] = useState(1)
  let [shoppage, setpage] = useState(1)
  let [shopprice, setprice] = useState(1)
  // 页数
  let bbb = (ye) => {
    shoppage = ye
    aaa()
  }
  // 点击
  let aaa = (name,id,one) => {
    // var ele1 = document.querySelectorAll('.classification li:first-child span')
    // var ele2 = document.querySelectorAll('.classification li:nth-child(2) span')
    // var ele3 = document.querySelectorAll('.classification li:nth-child(3) span')

    shoptype = (name === "主粮"? 1: name==="零食"?2 : name==="保健"?3:1)
    shopvariety = (name === "喵喵"? 1: name==="汪汪"?2:1)
    shopprice = (name === "全部"? 1: name==="￥0-50"?2:name==="￥51-100"?3:name==="￥101-200"?4:name==="￥201-500"?5:1)

    

    // ele1[shoptype-1].classList.add("active")
    // ele2[shopvariety-1].classList.add("active")
    // ele3[shopprice-1].classList.add("active")

    async function loadData() {
        let result = await get({
          url:'http://123.56.160.44:8080/food/list',
          params:{
            priceArea:shopprice,
            sort:changesort,
            type: shoptype,
            variety: shopvariety,
            page: shoppage,
          }
        }
      )
        setList(result.data.content)
      }
      loadData()
  }


  let [up2 , setup2] = useState(true)
  let [up3 , setup3] = useState(true)
  let [changesort,setchange] = useState(0)
  // 排序
  let ccc = (p) => {
    if(p===1){
      setchange(0)
    }
    if(p===2){
      up2 = !up2
      setup2(up2)
      up2===true? setchange(10) : setchange(11)
    }
    if(p===3){
      up3 = !up3
      setup3(up3)
      up3===true? setchange(20) : setchange(21)
    }
    aaa()
  }



  return (
    <div>
    <HeaderNoBg></HeaderNoBg>
    <div className="center">
    <div style={{height:'108px'}}>
      <BuySearch></BuySearch>
    </div>
      <ClassifyStyle>
        <div className="nav">
          <>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>宠物商城</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="#">宠物食品</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>宠物主粮</Breadcrumb.Item>
            </Breadcrumb>
          </>
          <ul className="classification">
            {
              navList.map((value, key) => {
                return (
                  <li
                   key={value.des}
                   >
                    <i>{value.title}</i>
                    {
                      value.list.map((value1, key1) => {

                        return (
                          <span key={value1.id}
                          // className={}
                           onClick={() => 
                            aaa(value1.name,value.des,value1.id)
                          }>{value1.name}</span>
                        )
                      })
                    }
                  </li>
                )
              })
            }
            <li key={4}>
              <i>排序</i>
              <span onClick={() =>ccc(1)}>
                默认
              </span>
              <span onClick={() =>ccc(2)}>价格{up2 ? <i>↑</i> : <i>↓</i>}</span>
              <span onClick={() =>ccc(3)}>销量{up3 ? <i>↑</i> : <i>↓</i>}</span>
            </li>
          </ul>
        </div>
        </ClassifyStyle>
        <ListStyle>
          <List
            list={list}
          ></List>
      <Pagination defaultCurrent={1} total={50} onChange={(page) => bbb(page)} />
        </ListStyle>
    </div>
        <StyledLink>
        <Link
          outerbg={linkimg}
        ></Link>
      </StyledLink>
      <StyledFooter>
        <Footer></Footer>
      </StyledFooter>
    </div>
  );
}


export default FoodUi