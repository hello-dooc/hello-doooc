import React, { Component } from 'react';
import { Descriptions } from 'antd';

 import SelfInfoWrap from './StyledSelf'

 import profile from '@a/images/timg.jpeg'

class SelfInfo extends Component {
    render() {
        return (
            <SelfInfoWrap id="self">
                <div className="self-wrap"> 
                    <Descriptions bordered>
                        <Descriptions.Item span={3}>
                            <img src={profile} alt=""/>
                        </Descriptions.Item>
                        <Descriptions.Item label="用户名" span={3}></Descriptions.Item>
                        <Descriptions.Item label="手机号" span={3}></Descriptions.Item>
                        <Descriptions.Item label="性别" span={3}></Descriptions.Item>
                        <Descriptions.Item label="邮箱" span={3}></Descriptions.Item>
                        <Descriptions.Item label="QQ" span={3}></Descriptions.Item>
                        <Descriptions.Item label="收货地址" span={3}>
                            <span>北京市昌平区沙河镇沙阳路18号北京科技职业技术学院</span>
                            <button>选择默认地址</button>
                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </SelfInfoWrap>
        );
    }
}

export default SelfInfo;