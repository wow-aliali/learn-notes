import React from 'react';
import { Link } from 'react-router-dom'

export default class ComponentHeader extends React.Component{
  render(){
    return (
      <header>
        <h1>这里是头部</h1>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/news">新闻</Link></li>
          <li><Link to="/list/666">列表</Link></li>
        </ul>
        
        {/* 调用URL参数 */}
        <p>{ this.props.match.params.id }</p>
      </header>
    )
  }
}
