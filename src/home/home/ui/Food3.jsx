import React, { Component } from 'react';

import food3one from '@a/images/001.jpg'
import food3two from '@a/images/002.jpg'
import food3three from '@a/images/003.jpg'
import food3four from '@a/images/004.jpg'
import food3five from '@a/images/005.jpg'
import food3six from '@a/images/006.jpg'

var List = [
  {
    id: '1',
    txt: '美容沙龙',
    image: food3one
  },
  {
    id: '2',
    txt: '洗护清洁',
    image: food3two
  },
  {
    id: '3',
    txt: '爱宠训练',
    image: food3three
  },
  {
    id: '4',
    txt: '兽医护理',
    image: food3four
  },
  {
    id: '5',
    txt: '爱宠寄养',
    image: food3five
  },
  {
    id: '6',
    txt: '领养中心',
    image: food3six
  }
]

class Food3 extends Component {
  render() {
    return (
      <div>
        <h3>爱宠不会养？doooc让你满意</h3>
        <ul>
         
            {
              List.map(item => {
                return (
                <li key={item.id}>
                  <p>{item.txt}</p>
                  <div>
                    
                  <img src={item.image} alt=""/>
                  </div>
                </li>
                )
              })
          }
        </ul>
      </div>
    );
  }
}

export default Food3;