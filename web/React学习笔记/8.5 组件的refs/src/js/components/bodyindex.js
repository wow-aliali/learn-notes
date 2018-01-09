import React from 'react';
import ReactDOM from 'react-dom'

export default class BodyIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      username: 'aliail',
      age: 20
    }
  }

  changAge(){
    this.setState({ age: 10 });

    // 获取原生DOM的两种方法:
    // 1. 不推荐
    var changeBtnEle = document.getElementById('changeBtn');
    ReactDOM.findDOMNode(changeBtnEle).style.color = 'violet';

    // 2. 通过refs
    this.refs.changeBtn.style.border = '3px solid violet';
  }

  // refs 是访问到组件内部DOM节点唯一可靠的方法
  // refs 会自动销毁对子组件的引用
  // 不要在render或render之前对refs进行调用, 不要滥用refs (能用setState就用)

  render(){
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{ this.state.username } - { this.state.age }</p>

        <p><button id="changeBtn" ref="changeBtn" onClick={ this.changAge.bind(this) } >年龄变10</button></p>
      </div>
    )
  }
}
