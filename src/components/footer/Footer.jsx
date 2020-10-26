import React, { Component } from 'react';
import FooterWrap from './StyledFooter'
class Footer extends Component {
    render() {
        return (
            <FooterWrap>
                <div id="link">
                    <div className="link-wrap">
                        <div className="logo"></div>
                        <p>我们愿意与对未知拥有极强探索欲，能快速接受并学习新事物，对任何感兴趣的事情能大胆尝试的人共事，<br/>
                        我们相信简单、热情且善于沟通的人总是充满了能量并拥有一颗年轻的心。<br/>
                        我们希望聚集最优秀的人才，致力于追求卓越、持续创新、解决问题、创造价值为世界的发展探索正确的<br/>
                        方向，成为驱动前进的力量</p>
                        <div className="link_way">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </FooterWrap>
        );
    }
}

export default Footer;