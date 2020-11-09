import React, { Component } from 'react';
import {
  TitleBorder,
} from './StyledHome'
class Title extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <TitleBorder>
          <div className="center">
            <div>
              {this.props.name}
            <span></span>
            </div>
          </div>
        </TitleBorder>
        
    );
  }
}

export default Title;