import React from 'react';
import Bodychild from './bodychild'
import PropTypes from 'prop-types'   // 引入props验证库

export default class BodyIndex extends React.Component{
  render(){
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>从父组件传递来 - userid: { this.props.userid } , username: { this.props.username }</p>

        <Bodychild { ...this.props }/>
        {/* ...this.props 可以快捷获取从父组件传递过来的所有 prop, 然后可传递给子组件 */}
      </div>
    )
  }
}

// prop 验证
BodyIndex.propTypes = {
  userid: PropTypes.number.isRequired,   // userid为数字类型且必须传递
  username: PropTypes.string
}

// 默认 prop 值
BodyIndex.defaultProps = {
  username: '这是默认的用户名'
}