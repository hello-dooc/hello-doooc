import React, { Component } from 'react';

import NoFilter from './NoFilter'
import Filter from './Filter'

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
                    this.state.isVariety?<Filter callback={this.callback} isVariety={this.state.isVariety}/>:<NoFilter callback={this.callback} isVariety={this.state.isVariety} />   
                }
            </div>
        );
    }
}

export default PetMarket;