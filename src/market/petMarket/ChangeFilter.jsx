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
        this.props.isVariety&& this.setState({
            isVariety:this.props.isVariety
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.isVariety?<Filter callback={this.callback} /> : <FilterUp callback={this.callback} />
                }
            </div>
        )
    }
}
