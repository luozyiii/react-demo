import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../components/menu/menu.js';
import './my.scss';
export default class My extends React.Component {
	render() {
		return ( 
			< div className = "" >
				<h1>我的</h1>
				<Menu />
			< /div>
		);
	}
}

main();

function main() {
    ReactDOM.render(<My />, document.getElementById('app'));
}