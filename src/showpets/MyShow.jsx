import React, { Component } from 'react';

import {
    MyShowWrap
  } from './styledshowpets'

class MyShow extends Component {
    render() {
        return (
            <MyShowWrap>
                <div className="imgbox">
                    <div className="topimg">
                        <img src="" alt=""/>
                    </div>
                    <div className="topimg">
                        <img src="" alt=""/>
                    </div>
                    <div className="topimg">
                        <img src="" alt=""/>
                    </div>
                    <div className="topimg">
                        <img src="" alt=""/>
                    </div>
                </div>

                <div className="button-box">
                    <div className="left-button">上一页</div>
                    <div className="middle-box">1/3</div>
                    <div className="left-button">下一页</div>
                </div>
            </MyShowWrap>
        );
    }
}

export default MyShow;