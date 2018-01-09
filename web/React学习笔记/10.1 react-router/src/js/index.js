var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<ComponentHeader/>
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		);
	}
}