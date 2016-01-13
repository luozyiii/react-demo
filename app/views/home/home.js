import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../components/menu/menu.js';
import './home.scss';

export default class Home extends React.Component {
	render() {
		return ( 
			< div className = "" >
				<h1>酷窝移动版</h1>
				<div className = "icon"></div>
				<a href="vip/index.html">会员</a>

				<Menu />
			< /div>
		);
	}
}

main();

function main() {
    ReactDOM.render(<Home />, document.getElementById('app'));
}