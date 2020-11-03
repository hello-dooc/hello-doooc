import React, { Component } from 'react';
import { InputNumber , Select  } from 'antd';

import {
    Info
} from '../self/StyledOrder'

class DetailInfo extends Component {
    render() {
        const { Option } = Select;
        return (
            <Info>
                <div className="shopDetails">
                    <img src="" alt="" />
                    <span className="shopName">进口鳕鱼肉</span>
                    <i>RMB &nbsp;500</i>
                    <InputNumber min={1} max={10} defaultValue={1} style={{ width:50,height:30 }}/>
                    <i>口味</i>
                    <>
                        <Select defaultValue="lucy" style={{ width: 80,height:30}}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled">Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </>
                    <i>删除</i>
                </div>
                
            </Info>
        );
    }
}

export default DetailInfo;