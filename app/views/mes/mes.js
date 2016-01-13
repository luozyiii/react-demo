import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../components/menu/menu.js';
import './mes.scss';
export default class Mes extends React.Component {
	render() {
		return ( 
			< div className = "" >
				<h1>消息</h1>
				<Menu />
			< /div>
		);
	}
}

main();

function main() {
    ReactDOM.render(<Mes />, document.getElementById('app'));
}