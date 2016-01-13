import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../components/menu/menu.js';
import './found.scss';
export default class Found extends React.Component {
	render() {
		return ( 
			< div className = "" >
				<h1>发现</h1>
				<Menu />
			< /div>
		);
	}
}

main();

function main() {
    ReactDOM.render(<Found />, document.getElementById('app'));
}