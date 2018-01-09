import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './index'
import News from './components/news'
import List from './components/list'

export default class Root extends React.Component {
    render() {
        const About = () => (
            <div>
                <h2>关于</h2>
            </div>
        )

        return (
            <BrowserRouter>
                <div>
                    <Route exact component={Index} path="/" />
                    <Route component={News} path="/news" />
                    <Route component={List} path="/list/:id" />
                    <Route component={About} path="/about" />
                </div>
            </BrowserRouter>
        )
    }
}

// 替换之前的 Index, 变成了程序的入口
ReactDOM.render(<Root />, document.getElementById('app'));