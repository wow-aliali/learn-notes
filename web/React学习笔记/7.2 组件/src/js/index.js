var React = require('react');
var ReactDOM = require('react-dom');
import Header from './components/header';
import Footer from './components/footer';
import BodyIndex from './components/bodyindex';

class Index extends React.Component {
    render() {
        var bodyindex = <BodyIndex/>

        return (
            <div>
                <Header/>
                { bodyindex }
                <Footer/>
            </div>
        )
    }
};

ReactDOM.render(<Index/>, document.getElementById('app'));