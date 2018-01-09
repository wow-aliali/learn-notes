import React from 'react';

export default class ComponentHeader extends React.Component{

  constructor() {
    super();
    this.state = {
      miniHeader: false
    }
  };

  toggleHeader(){
    this.setState({
      miniHeader: !this.state.miniHeader
    })
  }

  render(){

    const styleObj = {
      header: {
        paddingTop: (this.state.miniHeader) ? '5px' : '20px',
        paddingBottom: (this.state.miniHeader) ? '5px' : '20px',
        color: 'violet',
        backgroundColor: '#666',
        fontSize: '18px'
      }
    };

    return (
      <header>
        <h1 style={ styleObj.header } className="borderEle" onClick={ this.toggleHeader.bind(this) }>这里是头部</h1>
      </header>
    )
  };
}