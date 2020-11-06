import React,{useEffect,useState} from 'react';


import {get} from '@u/http1'
import Head from '@c/header/Header'
import Search from './Search'
import Classify from './Classify'
import List from './List'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer.jsx'

import StyledLink from '@c/link/StyledLink'
import StyledFooter from '@c/footer/StyledFooter'

import foot from '@a/images/foodfoot.jpg'

import {
  SearchStyle,
  ClassifyStyle,
  ListStyle
} from './StyledFood'

const FoodUi = (props) => {
  let [list,setList] = useState([])
  useEffect(() => {
    async function loadData(){
      let result = await get(
        // 'http://123.56.160.44:8080/food/list'
        'http://123.56.160.44:8080/clothes/findAllByClothesPetTypeOrderByClothesIdDesc/1'
      )
      setList(result.data.data)

      console.log(result)
      console.log(list)
    }
    loadData()
  },[])
  



  return (
    <div>
      <Head
        ht="90px"
        bg="#eee;"
        color="gray"
      ></Head>
      <SearchStyle>
        <Search></Search>
      </SearchStyle>
      <ClassifyStyle>
        <Classify></Classify>
      </ClassifyStyle>
      <ListStyle>
        <List
          list={list}></List>
      </ListStyle>
      <StyledLink>
        <Link
        outerbg={foot}
        ></Link>
      </StyledLink>
      <StyledFooter>
        <Footer></Footer>
      </StyledFooter>
    </div>
  );
  
}

export default FoodUi;