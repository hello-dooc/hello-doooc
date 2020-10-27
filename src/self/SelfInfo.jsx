import React, { Component } from 'react';
 import Header from '@c/header/Header'
 import Link from '@c/link/Link'
 import Footer from '@c/footer/Footer'
 import SelfInfoWrap from './StyledSelf'

class SelfInfo extends Component {
    render() {
        return (
            <SelfInfoWrap>
                <Header></Header>
                <div className="self-wrap"> 
                </div>
                <Link></Link>
                <Footer></Footer>
            </SelfInfoWrap>
        );
    }
}

export default SelfInfo;