import React, { Component } from 'react';

import {
    Container
  } from './styledshowpets'

import YouLike from './YouLike'
import MyShow from './MyShow'

class ShowPets extends Component {
    render() {
        return (
            <Container>
                <header></header>
                <div className="contain">
                    <div className="mypets"></div>
                            <div className="middle">
                                <div className="left-nav">

                                </div>
                                <MyShow></MyShow>
                            </div>
                    <YouLike></YouLike>
                </div>
                <footer></footer>
            </Container>
        );
    }
}

export default ShowPets;