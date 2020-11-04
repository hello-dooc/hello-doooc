import React from 'react'
import {useHistory} from 'react-router-dom'

import Head from '@c/header/Header'
import Snack from './Snack'
import Food1 from './Food1'
import Food2 from './Food2'
import Food3 from './Food3'
import Food4 from './Food4'

import Title from './Title'

import Link from '@c/link/Link'
import StyledLink from '@c/link/StyledLink'

import Footer from '@c/footer/Footer'

import StyledFooter from '@c/footer/StyledFooter'

import banner from '@a/images/banner.jpeg'

import {
  SnackOne,
  FoodChange1,
  FoodChange2,
  FoodChange3,
  FoodChange4
} from './StyledHome'

import linkimg from '@a/images/底栏.jpg'




const HomeUi = (props) => {
  const history=useHistory();
  const callback=(url)=>{
    history.push(url)
  }
  return (
    <div>
      <Head
        ht="1100px"
        bg={banner}
      ></Head>
      <SnackOne>
        <Snack gotoFoodMarket={callback}></Snack>
      </SnackOne>
      <FoodChange1>
        <Title name="食材选取"></Title>
        <Food1></Food1>
      </FoodChange1>
      <FoodChange2>
        <Title name="达人晒宠"></Title>
        <Food2></Food2>
      </FoodChange2>
      <FoodChange3>
        <Food3></Food3>
      </FoodChange3>
      <FoodChange4>
        <Title name="展会信息"></Title>
        <Food4></Food4>
      </FoodChange4>
      <StyledLink>
        <Link
          outerbg={linkimg}
        ></Link>
      </StyledLink>
      <StyledFooter>
        <Footer></Footer>
      </StyledFooter>
    </div>
  )
}

export default HomeUi