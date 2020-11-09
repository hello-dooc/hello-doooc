import React, { Component } from 'react';
import Header from '@c/header/Header.jsx'
import Footer from '@c/footer/Footer.jsx'
import Link from '@c/link/Link.jsx'

import {
    Container
  } from './styledshowpets'

import YouLike from './YouLike'
import MyShow from './MyShow'


class ShowPets extends Component {
    render() {
        return (
            <Container>
                <header>
                    <Header></Header>
                </header>
                <div className="contain">
                    <div className="mypets"></div>
                            <div className="middle">
                                <div className="left-nav">

                                </div>
                                <MyShow ></MyShow>
                            </div>
                    <YouLike></YouLike>
                    
                </div>
                <footer>
                    <Link></Link>
                    <Footer></Footer>
                </footer>
            </Container>
        );
    }
}

export default ShowPets;