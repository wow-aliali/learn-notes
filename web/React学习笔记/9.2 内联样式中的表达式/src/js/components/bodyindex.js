import React from 'react';

export default class BodyIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      username: 'aliail',
      age: 20
    }
  }

  render(){
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p style={{ color: 'blue' }} >{ this.state.username } - { this.state.age }</p>
      </div>
    )
  }
}
