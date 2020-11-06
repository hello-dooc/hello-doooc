import React, { Component } from 'react';

import Head from '@c/header/Header'
import KnowHead from '@c/knowHead/KnowHead'
import LoveBody from './LoveBody'
import DogInfo from './DogInfo'
import Link from '@c/link/Link'
import Foot from '@c/footer/Footer'

import banner from '@a/images/banner.png'

import footbg from '@a/images/底部.png'

import {
  BodyStyle,
  DogStyle
} from './StyledLove'
class loveUi extends Component {
  render() {
    return (
      <div>
        <Head
          bg={banner}
          ht="510px"
        ></Head>
        <KnowHead></KnowHead>
        <BodyStyle>
          <LoveBody></LoveBody>
        </BodyStyle>
        <DogStyle>
          <DogInfo></DogInfo>
        </DogStyle>
        <Link
          outerbg={footbg}
        ></Link>
        <Foot></Foot>
      </div>
    );
  }
}

export default loveUi;