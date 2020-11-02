import React, { Component } from 'react';

import NoVariety from './NoVariety'
import Variety from './Variety'

class PetMarket extends Component {
    constructor(){
        super()
        this.state={
            isVariety:false,
        }
        this.callback=this.callback.bind(this)
    }
    callback(isVariety){
        console.log(isVariety);
        this.setState({
            isVariety
        })
    }
    componentDidMount(){
        console.log(this.state.isVariety);
    }
    render() {
        return (
            <div>
                {
                    this.state.isVariety?<Variety callback={this.callback} isVariety={this.state.isVariety}/>:<NoVariety callback={this.callback} isVariety={this.state.isVariety} />   
                }
            </div>
        );
    }
}

export default PetMarket;