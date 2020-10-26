import React, { Component } from 'react';
 import Header from '@c/header/Header'
 import Footer from '@c/footer/Footer'
 import SelfInfoWrap from './StyledSelf'
class SelfInfo extends Component {
    render() {
        return (
            <SelfInfoWrap>
                <Header></Header>
                <div className="self-wrap"> 
                </div>
                <Footer></Footer>
            </SelfInfoWrap>
        );
    }
}

export default SelfInfo;