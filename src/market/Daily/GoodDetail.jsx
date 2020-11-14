import React, { Component } from 'react';
// import cs from '@a/images/market/ceshi.jpg';

class GoodDetail extends Component {
    render() {
        // console.log(this.props.list)
        return (
            <div className="goodsList">
                {
                    this.props.indexList && this.props.indexList.map(value=>{
                        // console.log(value);
                        // console.log(value[value.des+'Image']);
                        let dis=value[value.sptype+'Discount']
                        return(
                            <div key={value[value.sptype+'Id']} className="oneGood">
                                <img src={value[value.sptype+'Image']} alt=""/>
                                <div>
                                    <h2 >{value[value.sptype+'Discount']}</h2>
                                    <p style={{width:dis?"115px":""}}> {value[value.sptype+'Desc']} </p>
                                </div>
                                <div>
                                    <h3>￥{value[value.sptype+'Price']} </h3>
                                    <i>已售  {value[value.sptype+'SellCount']} </i>
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