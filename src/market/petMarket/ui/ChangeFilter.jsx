import React, { Component} from 'react'
import FilterUp from './FilterUp'
import Filter from './Filter'
export default class ChangeFilter extends Component {
    constructor(props){
        super(props)
        this.state={
            isVariety:false,
        }
        this.callback=this.callback.bind(this)
    }
    callback(isVariety){
        this.setState({
            isVariety
        })
    }
    componentDidMount(){
        console.log(this.props.type);
    }
    render() {
        return (
            <div>
                {
                    this.state.isVariety?
                    <Filter 
                        getpetList={this.props.getpetList} 
                        changePetType={this.props.changePetType} 
                        isVariety={this.state.isVariety} 
                        callback={this.callback} 
                        pType={this.props.pType} 
                    /> 
                    : <FilterUp 
                        getpetList={this.props.getpetList} 
                        changePetType={this.props.changePetType} 
                        isVariety={this.state.isVariety} 
                        callback={this.callback} 
                        type={this.props.type}  
                    />
                }
            </div>
        )
    }
}
