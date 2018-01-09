var React = require('react');
var ReactDOM = require('react-dom');

class Index extends React.Component{
    render (){
        var username = 'aliali';
        var boolInput = true;

        return (
            <div>
                <h1>你好, 世界!</h1>
                <p>{username == '' ? '用户还没有登录' : '用户名为' + username}</p>
                <p><input type="button" value={username} disabled={boolInput} /></p>
                
                {/* JSX注释格式 */}
            </div>
        )
    }
};

ReactDOM.render(
    <Index/>,
    document.getElementById('app')
);