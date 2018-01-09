import React from 'react';
import Bodychild from './bodychild'

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
  }

  handelChildChangeAge(event){
    console.log(event);
    this.setState({ age: event.target.value });
  }

  render(){
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p style={{ color: 'blue' }} >{ this.state.username } - { this.state.age }</p>

        {/* 调用组件里的方法 */}
        <p><button onClick={ this.changAge.bind(this) } >年龄变10</button></p>

        {/* 子组件向父组件传递参数 */}
        <Bodychild childChangeAge={ this.handelChildChangeAge.bind(this) } />
      </div>
    )
  }
}
