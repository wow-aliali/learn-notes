import React from 'react';

var headerCSS = require('../../css/header.css')   // 可以在JS里引入CSS

console.log(headerCSS);

export default class ComponentHeader extends React.Component{
  render(){
    return (
      <header>
        <h1 className={ headerCSS.borderEle }>这里是头部</h1>
      </header>
    )
  }
}

// 需要安装css-loader和style-loader模块

// CSS 模块化优点: 
// 所有样式都是 local 的, 解决了命名冲突和全局污染的问题
// class 名生成规则配置灵活, 以此来压缩 class 名
// 只需引用组件的 JS 就能搞定组件所有的 JS 和 CSS
// 依然是CSS, 几乎零学习成本