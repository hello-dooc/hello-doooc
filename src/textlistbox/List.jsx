import React, { Component } from 'react';


class List extends Component {
    
    render() {
        const { idd,title,time,tag,contents } = this.props

        return (
            <li id={idd}>
                
                    <h3>{title}</h3>
                    <div className="icon">
                        <i className="fa fa-calendar"></i>
                        <span>发表于 {time} </span>
                        <i className="fa fa-sitemap"></i>
                        <span>分类于 {tag}  </span>
                        <i className="fa fa-edit"></i>
                        <span>暂无评论</span>
                    </div>
                    <p>{contents}</p>
                    <span className="more">more</span>
               
            </li>
        );
    }
}

export default List;