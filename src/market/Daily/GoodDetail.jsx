import React, { Component } from 'react';
// import cs from '@a/images/market/ceshi.jpg';

class GoodDetail extends Component {
    render() {
        console.log(this.props)

        return (
            <div className="goodsList">
                {
                    this.props.list && this.props.list.map(value=>{
                       
                        return(
                            <div key={value.clothesId} className="oneGood">
                            <img src={value.clothesImage} alt=""/>
                            <div>
                                <h2>{value.clothesDiscount}</h2>
                                <p> {value.clothesDesc} </p>
                            </div>
                            <div>
                                <h3>￥{value.clothesPrice} </h3>
                                <i>已售  {value.clothesSellCount} </i>
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