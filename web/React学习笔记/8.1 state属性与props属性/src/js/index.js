var React = require('react');
var ReactDOM = require('react-dom');

class Index extends React.Component{
    // state对于模块属于自身属性, 而props对于模块属于外来属性

    constructor(){
        // 每个类都有一个构造函数
        super();   // 调用基类(父类)的所有的初始化方法 

        this.state = {
            newsName: 'React入门与案例',
            newsTime: '2017-12-01'
        };   // 初始化赋值
        // state作用域只是当前的类, 不污染其他模块
    }

    render(){
        setTimeout(() => {
            this.setState({ newsName: 'Vue饿了么实例' });
            // 修改state属性
        }, 3000);

        return (
            <div>
                <h1>你好, 世界!</h1>
                <p>{ this.state.newsName } in { this.state.newsTime }</p>
                <p>{ this.props.userId } - { this.props.userName }</p>
            </div>
        )
    }
};

ReactDOM.render(
    <Index userId={123456} userName={"阿狸阿里"} />,   // 在调用组件时传递props
    document.getElementById('app')
);