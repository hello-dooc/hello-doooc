import React, { Component } from 'react'
import {RelevantWrap} from './StyledHeader'

import img4 from '@a/images/background_09.gif'
import img5 from '@a/images/sc1.png'

export default class Relevant extends Component {
  render() {
    return (
      <RelevantWrap>
        <div className="relevant">
                    <div className="centerWrap">
                        <div className="r-left">
                            <ul>
                                <li><img src={img4} alt=""/>疾病</li>
                                <li><img src={img4} alt=""/>养护</li>
                                <li><img src={img4} alt=""/>训练</li>
                            </ul>
                        </div>
                        <div className="r-center">
                            <img src={img5} alt=""/>
                        </div>
                        <div className="r-right">
                            <ul>
                                <li><img src={img4} alt=""/>医疗</li>
                                <li><img src={img4} alt=""/>冷知识</li>
                                <li><img src={img4} alt=""/>联系我们</li>
                            </ul>
                        </div>
                    </div>
                </div>
      </RelevantWrap>
    )
  }
}
