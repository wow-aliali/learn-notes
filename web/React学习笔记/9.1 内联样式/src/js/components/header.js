import React from 'react';

export default class ComponentHeader extends React.Component{
  render(){

    const styleObj = {
      header: {
        paddingTop: '10px',
        paddingBottom: '10px',
        color: 'violet',
        backgroundColor: '#666',
        fontSize: '18px'
      }
    }
    // 这种方法不能使用动画和伪类

    return (
      <header>
        <h1 style={ styleObj.header } className="borderEle">这里是头部</h1>
        {/* 注意用 className, 安装babel-plugin-react-html-attrs插件就可以使用class */}
      </header>
    )
  }
}
