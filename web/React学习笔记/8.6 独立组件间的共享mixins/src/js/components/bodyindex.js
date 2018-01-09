import React from 'react';
import ReactMixin from 'react-mixin'   // ES6使用mixins需要引入react-mixin
import MixinLog from './mixins'

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

    MixinLog.log();
  }

  // mixins - 不同组件间共用功能, 共享代码

  render(){
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p style={{ color: 'blue' }} >{ this.state.username } - { this.state.age }</p>

        <p><button onClick={ this.changAge.bind(this) } >年龄变10</button></p>
      </div>
    )
  }
}

ReactMixin(BodyIndex.prototype, MixinLog);