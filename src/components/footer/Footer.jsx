import React, { Component } from 'react'

import FooterWrap from './StyledFooter'

export default class Footer extends Component {
    render() {
        return (
            <FooterWrap id="footer">
                <div className="footer-wrap">
                    <div className="clear_fix">
                        <span className="float_left">友情链接：</span>
                        <ul className="float_left">
                            <li>
                                宠物用品商场
                            </li>
                            <li>
                                兽药营销策划
                            </li>
                            <li className="border_none">
                                兽药动保咨询
                            </li>
                        </ul>
                    </div>
                    <div className="clear_fix">
                        <ul className="clear_fix">
                            <li>
                                关于我们
                            </li>
                            <li>
                                联系我们
                            </li>
                            <li>
                                商家入驻
                            </li>
                            <li>
                                友情链接
                            </li>
                            <li>
                                站点地图
                            </li>
                            <li>
                                手机商城
                            </li>
                            <li>
                                销售联盟
                            </li>
                            <li>
                                商城社区
                            </li>
                            <li>
                                企业文化
                            </li>
                            <li className="border_none">
                                帮助中心
                            </li>
                        </ul>
                        <span>  ICP备案证书号：粤ICP备17156774号-2</span>
                    </div>
                    <div>
                        <p>&copy;2015-2019&nbsp;道奇宠物商城&nbsp;版权所有，并保留所有权利。中国广东深圳市</p>
                    </div>
                </div>
            </FooterWrap>
        )
    }
}
