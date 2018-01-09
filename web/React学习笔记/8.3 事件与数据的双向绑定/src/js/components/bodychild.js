import React from 'react';

export default class Bodychild extends React.Component{
    render(){
        return(
            <div>
                {/* 在子组件中通过调用父组件传递过来的事件props进行组件间的参数传递 */}
                <p>子组件修改父组件的Age: <input type="text" onChange={ this.props.childChangeAge } /></p>
            </div>
        )
    }
}