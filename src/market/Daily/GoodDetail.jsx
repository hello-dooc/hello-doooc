import React, { Component } from 'react';
// import cs from '@a/images/market/ceshi.jpg';

class GoodDetail extends Component {
    render() {
        // console.log(this.props.indexList)
        return (
            <div className="goodsList">
                {
                    this.props.indexList && this.props.indexList.map(value=>{
                        // console.log(value);
                        // console.log(value[value.des+'Image']);
                        let dis=value[value.desc+'Discount']
                        return(
                            <div key={value[value.desc+'Id']} className="oneGood">
                            <img src={value[value.desc+'Image']} alt=""/>
                            <div>
                                <h2 >{value[value.desc+'Discount']}</h2>
                                <p style={{width:dis?"115px":""}}> {value[value.desc+'Desc']} </p>
                            </div>
                            <div>
                                <h3>￥{value[value.desc+'Price']} </h3>
                                <i>已售  {value[value.desc+'SellCount']} </i>
                            </div>
                            </div>
                        )
                    })
                    }
                </div>
        );
    }
}

export default GoodDetail;