import React, { Component } from 'react';

import {DisplayWrap} from './StyledPetMarket'

import timg from '@a/images/timg.jpeg'
class Display extends Component {
    render() {
        return (
            <DisplayWrap>
                <div className="display-wrap">
                    <div className="display_img">
                        <h2>宠物展示</h2>
                        <div className="pet_display">
                            <div className="pet_box clear_fix">
                                <div className="pet">
                                    <img src={timg} alt=""/>
                                    <div className="pet_detail clear_fix">
                                        <div className="pet_price float_left">
                                            ￥<span>3000</span>
                                        </div>
                                        <div className="pet_type float_left">
                                            <div>布偶猫</div>
                                            <div>
                                                <span>品种:</span>
                                                <span>布偶猫</span>
                                            </div>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page clear_fix">
                            <span>上一页</span>
                            <span>下一页</span>
                        </div>
                    </div>
                    <div className="display_video">
                        <h2>宠物视频</h2>
                        <div className="pet_video">
                            <div className="petVideo clear_fix">
                                <div className="video_box float_left">
                                    <img src={timg} alt=""/>
                                    <div className="video_desc">
                                        <div>布偶猫</div>
                                        <div>品种:<span>布偶猫</span></div>
                                    </div>
                                </div>
                                <div className="video_box float_left">
                                    <img src={timg} alt=""/>
                                    <div className="video_desc">
                                        <div>布偶猫</div>
                                        <div>品种:<span>布偶猫</span></div>
                                    </div>
                                </div>
                                <div className="video_box float_left">
                                    <img src={timg} alt=""/>
                                    <div className="video_desc">
                                        <div>布偶猫</div>
                                        <div>品种:<span>布偶猫</span></div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayWrap>
        );
    }
}

export default Display;