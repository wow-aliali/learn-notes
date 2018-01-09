import React from 'react';

export default class Bodychild extends React.Component{
    render(){
        return(
            <div>
                <p>从祖父组件传递来 - userid: {this.props.userid} , username: {this.props.username}</p>
            </div>
        )
    }
}